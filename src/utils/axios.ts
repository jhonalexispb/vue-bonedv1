/* import axios from 'axios';

const axiosServices = axios.create();

// interceptor for http
axiosServices.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
);

export default axiosServices; */

import axios from 'axios';
import { useAuthStore } from '@/stores/auth'; // Importa el store de autenticación

const axiosServices = axios.create({
  baseURL: 'http://127.0.0.1:8000/' // Base URL de tu API
});

// Interceptor para las solicitudes (request)
axiosServices.interceptors.request.use(
  async (config) => {
    const authStore = useAuthStore();

    // Si existe un token de acceso, lo agregamos al header Authorization
    if (authStore.user) {
      config.headers['Authorization'] = `Bearer ${authStore.user.access}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para las respuestas (response)
axiosServices.interceptors.response.use(
  (response) => response, // Si todo va bien, retorna la respuesta
  async (error) => {
    const originalRequest = error.config;
    const authStore = useAuthStore();

    // Si el error es 401 (Unauthorized), intentamos refrescar el token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Marcamos la solicitud para evitar bucles infinitos

      try {
        // Si el token está expirado, refrescamos el access token
        await authStore.refreshAccessToken();

        // Reintenta la solicitud original con el nuevo token
        originalRequest.headers['Authorization'] = `Bearer ${authStore.user.access}`;
        return axiosServices(originalRequest); // Reenvía la solicitud
      } catch (err) {
        // Si falla el refresh, redirigir a login o manejar el error
        authStore.logout();
        return Promise.reject(error);
      }
    }

    // Si no es un error 401, simplemente rechazamos la promesa
    return Promise.reject(error);
  }
);

export default axiosServices;
