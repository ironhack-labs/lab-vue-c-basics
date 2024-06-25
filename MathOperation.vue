<template>
    <div>
      <p>The result of 2 + 2 is: {{ 2 + 2 }}</p>
      <p>{{ greetUser }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const userName = ref('Alice');
  
  function greetUser() {
    return `Hello, ${userName.value}! Welcome to Vue.js`;
  }
  </script>
  