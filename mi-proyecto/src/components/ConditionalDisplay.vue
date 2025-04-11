<template>
    <div>
      <button @click="toggleVisibility">CLick aqui si el resultado es correcto</button>
      <p v-if="isVisible">Si, es correcto</p>
      <h1 v-if="isVisible">Bienvenido a mi proyecto</h1>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Definir una variable booleana
  const isVisible = ref(false)
  
  // Función para alternar la visibilidad
  const toggleVisibility = () => {
    isVisible.value = !isVisible.value
  }
  </script>
  
  <style>
  /* Estilos opcionales aquí */
  </style>
  