<script setup>
import { ref } from 'vue'
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';
import Lista from './Lista.vue';
import Boton from './Boton.vue';
import Booleano from './Booleano.vue';

const nombre = ref('Polux')
const libros = ref(4)
function nombrelibros () {
  return (`${nombre.value} es un personaje que aparece en ${libros.value} libros`)
}

</script>

<template>

  
  <Navbar />
  <Booleano />

  <h1>Vue Project 1</h1>
  <p>{{ nombrelibros() }}</p>

  <h3>Resultado de una operacion</h3>  
  <p>3 + 3 = {{  3 + 3 }}</p>

  <Lista />


  <Boton />
  <Footer />
  
</template>

<style scoped></style>
