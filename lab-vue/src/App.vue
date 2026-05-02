<script setup>
import { ref } from "vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

const nombre = ref("Mariangeles");
const edad = ref(30);

const mensaje = () => {
  return `Hola, soy ${nombre.value} y tengo ${edad.value} años`;
};

const mostrarTexto = ref(true);

const posts = ref([
  {
    title: "Post 1",
    description: "Descripción del post 1",
    content: "Contenido del post 1",
  },
  {
    title: "Post 2",
    description: "Descripción del post 2",
    content: "Contenido del post 2",
  },
  {
    title: "Post 3",
    description: "Descripción del post 3",
    content: "Contenido del post 3",
  },
]);

const activo = ref(false);

const toggleColor = () => {
  activo.value = !activo.value;
};
</script>

<template>
  <Navbar />

  <h1>Mi primera app Vue</h1>

  <p>{{ 2 + 2 }}</p>

  <p>{{ mensaje() }}</p>

  <p v-if="mostrarTexto">Este texto solo aparece si es true</p>

  <button @click="mostrarTexto = !mostrarTexto">Mostrar / Ocultar</button>

  <div v-for="(post, index) in posts" :key="index">
    <h2>{{ post.title }}</h2>
    <p>{{ post.description }}</p>
    <p>{{ post.content }}</p>
  </div>

  <div :class="{ activo: activo }">
    <h2>Caja con color dinámico</h2>
  </div>

  <button @click="toggleColor">Cambiar color</button>

  <Footer />
</template>

<style scoped>
.activo {
  background-color: lightgreen;
  padding: 20px;
}
</style>
