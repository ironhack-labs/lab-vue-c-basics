<script setup>
import { ref } from 'vue';

const nombre = ref('Juämpy');

const obtenerSaludo = () => {
  return `Hola, ${nombre.value}, que tal?`;
};
</script>

<template>
  <section>
    <p>{{ mensaje }}</p>
  </section>
</template>

<style scoped></style>