<template>
    <div>
      <button @click="showMessage = !showMessage">Toggle Message</button>
      <p v-if="showMessage">This message is conditionally displayed!</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const showMessage = ref(false);
  </script>
  