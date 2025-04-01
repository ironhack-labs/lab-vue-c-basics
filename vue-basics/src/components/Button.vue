<script setup>
import { ref } from 'vue';

const fondoAzul = ref(false);

function cambiarColorFondo() {
  fondoAzul.value = !fondoAzul.value;
};
</script>

<template>
  <div :style="{ backgroundColor: fondoAzul ? 'lightblue' : 'lightcoral' }" class="contenedor">
    <h2>Haz clic para cambiar el fondo</h2>
    <button @click="cambiarColorFondo">Cambiar color</button>
  </div>
</template>

<style scoped>
.contenedor {
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
};
button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
};
</style>
