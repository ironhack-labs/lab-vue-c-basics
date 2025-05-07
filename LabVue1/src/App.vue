<script setup>
import { ref } from 'vue'

const name = ref('Ana')
const age = ref(65)

function greetingMessage() {
  return `Hola, mi nombre es ${name.value} y tengo ${age.value} años.`
}

const showMessage = ref(true)

const posts = ref([
  {
    titulo: 'Introducción a Vue',
    descripcion: 'Guía básica',
    contenido: 'Vue.js es un framework progresivo para construir interfaces de usuario...'
  },
  {
    titulo: 'Uso de directivas en Vue',
    descripcion: 'V-if, v-for y más',
    contenido: 'Las directivas en Vue son atributos especiales que comienzan con "v-"...'
  },
  {
    titulo: 'Reactividad en Vue',
    descripcion: 'Los datos reactivos',
    contenido: 'Vue usa ref() y reactive() para hacer que los datos respondan a cambios automáticamente...'
  }
])
</script>

<template>
  <div>
    2 + 2 = {{ 2 + 2 }}
    <p>{{ greetingMessage() }}</p>
  </div>
  <div>
    <button @click="showMessage = !showMessage">
      Mensaje
    </button>
    <p v-if="showMessage">
      Mensaje renderizado
    </p>
  </div>
  <div>
    <h1>Publicaciones del Blog</h1>
    <div class="blog-posts">
      <div v-for="(post, index) in posts" :key="index" class="post">
      <h2>{{ post.titulo }}</h2>
      <h4>{{ post.descripcion }}</h4>
      <p>{{ post.contenido }}</p>
    </div>
    </div>
  </div>
</template>

<style scoped>

.blog-posts {
  display: flex;
  justify-content: space-between;
}

.post {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
