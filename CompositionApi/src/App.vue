<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Lista from './components/lista.vue';
import { ref } from 'vue';
import ColorFondo from './components/colorFondo.vue';

const nombre = ref('Carlos');
const ciudad = ref('Barcelona');
const dia = ref(true);



function imprimirTexto() {
  return `¡Hola, ${nombre.value}! ¿Sigues viviendo en  ${ciudad.value}?`;
}
</script>

<template>
  <div id="app">
    <Navbar></Navbar>
    <h2>Iteración  2</h2>
    <h3>Parte 1</h3>
    <p>La suma de 2 + 2 es: {{ 2 + 2 }}</p>
    <h3>Parte 2</h3>
    <p>{{ imprimirTexto() }}</p>
    <br>
    <h2>Iteración  3</h2>
    <p v-if="dia">Es de día</p>
    <br>
    <h2>Iteración 4</h2>
    <Lista>
    </Lista>
    <br>
    <h2>Iteración 5</h2>
    <ColorFondo></ColorFondo>
  </div>
  <div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
#app{
  color: black;
  background-color: aquamarine;
}
</style>
