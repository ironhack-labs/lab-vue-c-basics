<template>
    <div>
      <div :style="{ backgroundColor: colorFondo }">Este fondo cambia de color</div>
  
      <button @click="cambiarColor">Cambiar Color</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const colorFondo = ref('blue');
  
  const cambiarColor = () => {
    colorFondo.value = colorFondo.value === 'blue' ? 'green' : 'blue';
  }
  </script>
  