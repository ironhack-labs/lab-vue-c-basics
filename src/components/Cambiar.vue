<script setup>
import { ref } from 'vue';

const esRojo = ref(false);

const cambiarColor = () => {
  esRojo.value = !esRojo.value;
};

</script>

<template>
  <section>
     <button @click="cambiarColor">Cambiar Color</button>
  <div :class="{ fondoRojo: esRojo }">
    <p>¡Haz clic en el botón para cambiar el fondo!</p>
  </div>

  </section>
</template>

<style scoped>
.fondoRojo {
  background-color: red;
  color: white;
  padding: 20px;
}</style>