import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';

const baseUrl = `http://127.0.0.1:8000`;

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null
  }),
  actions: {
    async login(username: string, password: string) {
      const user = await fetchWrapper.post(`${baseUrl}/api/token/`, { username, password });

      // update pinia state
      this.user = user;
      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));
      // redirect to previous url or default to home page
      router.push(this.returnUrl || '/sistema/');
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/auth/login1');
    },

    async refreshAccessToken() {
      const token = this.user.refresh;

      try {
        const response = await fetchWrapper.post(`${baseUrl}/api/token/refresh/`, {
          refresh: token
        });

        // Si la renovación es exitosa, guardamos el nuevo access token y refresh token
        this.user = response;

        // Actualizamos los tokens en localStorage
        localStorage.setItem('user', JSON.stringify(response));

        // Actualizamos el estado para que las solicitudes futuras usen el nuevo token

        console.log('Token renovado exitosamente');
      } catch (err) {
        console.error('Error al renovar el token:', err);

        // Redirige a la página de login si el refresh token también ha expirado
        window.location.href = '/auth/login1'; // O la ruta que corresponda
      }
    }
  }
});
