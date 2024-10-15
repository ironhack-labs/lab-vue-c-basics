<template>
    <div>
      <button @click="toggleDisplay">Toggle Display</button>
      <p v-if="isVisible">¡Soy visible!</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isVisible = ref(false);
  const toggleDisplay = () => {
    isVisible.value = !isVisible.value;
  };
  </script>
  
  <style scoped>
  /* Estilos opcionales */
  </style>
  