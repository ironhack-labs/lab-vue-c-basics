<script setup>
import { computed, ref } from "vue";

const username = ref("Ana");
const course = ref("Vue");
const greeting = computed(
  () =>
    `Hola, ${username.value || "visitante"}. Estás aprendiendo ${course.value || "programación"}.`,
);
const isLoggedIn = ref(false);
const posts = ref([
  {
    id: 1,
    title: "Primeros pasos con Vue",
    description: "Una introducción a los componentes.",
    content:
      "Los componentes permiten dividir una aplicación en piezas reutilizables.",
  },
  {
    id: 2,
    title: "Datos reactivos",
    description: "Actualizar la interfaz con ref.",
    content:
      "Cuando cambia una variable reactiva, Vue actualiza el contenido que depende de ella.",
  },
  {
    id: 3,
    title: "Directivas de Vue",
    description: "Condiciones y listas en las plantillas.",
    content:
      "Usamos v-if para mostrar contenido condicionalmente y v-for para recorrer publicaciones.",
  },
]);
const colors = ["#e8f2ec", "#fff0c2", "#dbeafe", "#fce7f3"];
const colorIndex = ref(0);
function changeColor() {
  colorIndex.value = (colorIndex.value + 1) % colors.length;
}
</script>

<template>
  <section id="operaciones">
    <h2>Operaciones y variables reactivas</h2>
    <p>2 + 2 = {{ 2 + 2 }}</p>
    <label for="username">Nombre</label>
    <input id="username" v-model="username" placeholder="Escribe tu nombre" />
    <label for="course">Curso</label>
    <input id="course" v-model="course" placeholder="Escribe un curso" />
    <p>{{ greeting }}</p>
  </section>

  <section id="sesion">
    <h2>Renderizado condicional</h2>
    <p v-if="isLoggedIn">¡Bienvenido, usuario!</p>
    <p v-else>Necesitas iniciar sesión.</p>
    <button type="button" @click="isLoggedIn = !isLoggedIn">
      {{ isLoggedIn ? "Cerrar sesión" : "Iniciar sesión" }}
    </button>
  </section>

  <section id="publicaciones">
    <h2>Publicaciones</h2>
    <article v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>
        <strong>{{ post.description }}</strong>
      </p>
      <p>{{ post.content }}</p>
    </article>
  </section>

  <section id="colores" :style="{ backgroundColor: colors[colorIndex] }">
    <h2>Cambiar el color de fondo</h2>
    <p>Pulsa el botón para recorrer cuatro colores.</p>
    <button type="button" @click="changeColor">Cambiar color</button>
  </section>
</template>

<style scoped>
#colores {
  padding: 24px;
  border-radius: 12px;
}
</style>
