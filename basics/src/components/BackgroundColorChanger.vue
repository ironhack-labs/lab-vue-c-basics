<template>
    <div :style="{ backgroundColor }" class="color-box">
      <button @click="changeColor">Cambiar Color</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const backgroundColor = ref('white');
  
  const changeColor = () => {
    backgroundColor.value = backgroundColor.value === 'white' ? 'lightblue' : 'white';
  };
  </script>
  
  <style scoped>
  .color-box {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  