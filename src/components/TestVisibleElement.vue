<script setup>

import { ref } from 'vue';

// Define a boolean variable using ref
const isVisible = ref(false);

// Function to toggle the value of isVisible - changes the default state to the opposity
const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};

</script>

<template>
<!-- Show this element only if isVisible is true -->
<div v-if="isVisible">This element will only show if isVisible is true</div>

  <!-- Button to toggle the value of isVisible -->
  <button @click="toggleVisibility">Toggle Visibility</button>

</template>

<style scoped>
*  {
  background-color: lavender;
}

</style>
