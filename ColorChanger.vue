<template>
    <div :style="{ backgroundColor: bgColor }" class="color-box">
      <button @click="changeColor">Change Color</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const bgColor = ref('lightblue');
  
  function changeColor() {
    bgColor.value = bgColor.value === 'lightblue' ? 'lightcoral' : 'lightblue';
  }
  </script>
  
  <style>
  .color-box {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  