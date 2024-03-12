<template>
  <div>
    <p v-if="mostrarMensaje">¡Este mensaje solo se muestra si la condicion es verdadera!</p>
    <button @click="toggleMensaje">Toggle Mensaje</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const mostrarMensaje = ref(true);

const toggleMensaje = () => {
  mostrarMensaje.value = !mostrarMensaje.value;
}
</script>
