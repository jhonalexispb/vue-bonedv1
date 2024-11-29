<template>
  <div>
    <h1>Líneas Farmacéuticas</h1>

    <!-- Verifica si los datos se están cargando -->
    <div v-if="store.loading">Cargando...</div>
    <div v-if="store.error">{{ store.error }}</div>

    <!-- Mostrar las líneas farmacéuticas -->
    <ul v-if="store.lineas.length > 0">
      <li v-for="linea in store.lineas" :key="linea.id">
        <span :style="{ color: linea.color }">
          {{ linea.nombre }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="js">
import { onMounted } from 'vue';
import { useLineasFarmaceuticasStore } from '@/stores/lineasFarmaceuticas';

// Usar el store
const store = useLineasFarmaceuticasStore();

// Fetch de datos cuando el componente se monte
onMounted(() => {
  store.fetchLineas();
});
</script>

<style scoped>
/* Puedes agregar aquí tus estilos personalizados */
</style>
