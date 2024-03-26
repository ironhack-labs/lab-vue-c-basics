<template>
    <div>
      <button @click="toggleClass">Toggle Background</button>
      <div :class="{ 'highlight': isHighlighted }" class="container">Container</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isHighlighted = ref(false);
  
  function toggleClass() {
    isHighlighted.value = !isHighlighted.value;
  }
  </script>
  
  <style>
  .highlight {
    background-color: green;
    color: white;
  }

  .container {
    margin: 20px;
    border: 1px solid black;
    padding: 10px;
  }
  </style>