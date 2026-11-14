<script septup>
import { ref } from "vue";
const isLoggedIn = ref(false);
function login() {
  isLoggedIn.value = true;
}
function logout() {
  isLoggedIn.value = false;
}
</script>

<template>
  <p>Bienvenido usuario!</p>
  <p v-if="isLoggedIn">Bienvenido usuario!</p>
  <p v-else>Necesitas hacer login</p>

  <button v-if="!isLoggedIn" @click="login">login</button>
  <button @click="logout">Log out</button>
</template>

<style scoped></style>
