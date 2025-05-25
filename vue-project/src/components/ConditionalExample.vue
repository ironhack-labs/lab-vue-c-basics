<template>
  <button @click="isVisible = !isVisible">Mostrar/Ocultar</button>
  <p v-if="isVisible">¡Este texto solo aparece si isVisible es true!</p>
</template>

<script setup>
import { ref } from 'vue'
const isVisible = ref(true)
</script>