<template>
    <div id="change-color">
      <!-- Bind class dynamically using :class directive -->
      <div :class="{ 'myDiv': true, 'plumBackground': isPlum }">You can change my color dynamically if you press the button below</div>
      <!-- Button to toggle class -->
      <button @click="toggleColor">Change Color</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const isPlum = ref(false);
  
  const toggleColor = () => {
    isPlum.value = !isPlum.value; // Toggle the value
  };
  </script>
  
  <style scoped>
  .myDiv {
    width: 300px;
    height: 100px;
    background-color: pink;
    transition: background-color 0.3s ease;
    /* Optional: adds a smooth transition effect */
  }
  
  .plumBackground {
    background-color: plum !important;
    /* !important is used to ensure this style takes precedence */
  }
  </style>
  