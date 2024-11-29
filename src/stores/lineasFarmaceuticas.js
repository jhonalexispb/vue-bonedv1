// src/stores/lineasFarmaceuticas.js
import { defineStore } from 'pinia';
import axiosServices from '@/utils/axios';

export const useLineasFarmaceuticasStore = defineStore('lineasFarmaceuticas', {
  state: () => ({
    lineas: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchLineas() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axiosServices.get('lineas_farmaceuticas/'); // Usamos axiosServices
        this.lineas = response.data;
      } catch (err) {
        console.error('Error en la solicitud:', err);
        this.error = 'Hubo un error al cargar los datos';
      } finally {
        this.loading = false;
      }
    }
  }
});
