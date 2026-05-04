<script setup>
import { ref } from "vue";

const isDarkMode = ref(false);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;

  if (isDarkMode.value) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
};
</script>

<template>
  <div>
    <h1>Modo {{ isDarkMode ? "Oscuro 🌙" : "Claro ☀️" }}</h1>

    <button @click="toggleTheme">
      Cambiar a {{ isDarkMode ? "Claro ☀️" : "Oscuro 🌙" }}
    </button>
  </div>
</template>

<style>
body.light {
    margin: 0;
  background-color: #f5f5f5;
  color: #222;
}

body.dark {
    margin: 0;
  background-color: #1e1e1e;
  color: #fff;
}

button {
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;
}
</style>
