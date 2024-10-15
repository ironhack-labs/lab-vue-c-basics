<template>
    <div>
      <h2>Resultado de 2 + 2: {{ 2 + 2 }}</h2>
      <h3>{{ getMessage() }}</h3>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const number = ref(2);
  const getMessage = () => `La suma es: ${number.value + number.value}`;
  </script>
  
  <style scoped>
  /* Estilos opcionales */
  </style>
  