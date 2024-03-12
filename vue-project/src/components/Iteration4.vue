<template>
    <div>
      <div v-for="publicacion in publicaciones" :key="publicacion.id">
        <h3>{{ publicacion.titulo }}</h3>
        <p>{{ publicacion.descripcion }}</p>
        <div>{{ publicacion.contenido }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const publicaciones = ref([
    { id: 1, titulo: 'Título 1', descripcion: 'Descripción 1', contenido: 'Contenido 1' },
    { id: 2, titulo: 'Título 2', descripcion: 'Descripción 2', contenido: 'Contenido 2' },
    { id: 3, titulo: 'Título 3', descripcion: 'Descripción 3', contenido: 'Contenido 3' }
  ]);
  </script>
  