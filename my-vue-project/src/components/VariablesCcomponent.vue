<script setup>
//let counter = 0;
import { ref } from "vue";
const counter = ref(0);
const message = ref("Esto es un mensaje");
const imputPlaceholder = ref("Escribe aqui");

setInterval(() => {
  //counter++;
  //console.log(counter);
  counter.value = counter.value + 1;
}, 1000);
function changeMessage() {
  message.value = "Has hecho click en el botón";
}
function deleteUsername() {
  message.value = "";
}
</script>

<template>
  <h2 class="counter">contador : {{ counter }}</h2>
  <p>{{ message }}</p>
  <button @click="changeMessage">Has click para cambiar el mensaje</button>
  <br /><br />
  <imput type="text" Placeholder="inputPlaceholder"></imput>
  <br /><br />
  <h3>{{ username }}</h3>
  <imput type="text" v-model="username"></imput>
  <button @click="deleteUsername">Borrar usuario</button>
</template>

<style scoped>
.counter {
  color: blue;
}
</style>
