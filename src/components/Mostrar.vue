<script setup>
import { ref } from 'vue';

const mostrar = ref(true);
</script>

<template>
  <section>
      <button @click="mostrar = !mostrar">MOSTRAME</button>
        <p v-if="mostrar">¡Este mensaje solo aparece si mostrar es true!</p>
   
  </section>
</template>

<style scoped></style>