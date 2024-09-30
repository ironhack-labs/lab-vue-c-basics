<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const name = ref('Usuario')
const age = ref(25)
const showMessage = ref(false)
const isDarkMode = ref(false)

const posts = ref([
  { id: 1, title: 'Introducción a Vue', description: 'Aprende los conceptos básicos de Vue.', content: '...' },
  { id: 2, title: 'Componentes en Vue', description: 'Cómo crear y usar componentes.', content: '...' },
  { id: 3, title: 'Estado en Vue', description: 'Manejo del estado con Composition API.', content: '...' },
])

function getMessage() {
  return `Hola, ${name.value}! Tienes ${age.value} años.`
}

function toggleMessage() {
  showMessage.value = !showMessage.value
}

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
}
</script>

<template>
  <Navbar/>
  <main :class="{ 'dark-mode': isDarkMode }">
    <h2>Operación matemática: {{ 2 + 2 }}</h2>
    <p>{{ getMessage() }}</p>
    <button @click="toggleMessage">Toggle Mensaje</button>
    <p v-if="showMessage">Este mensaje es condicional</p>
    
    <h3>Lista de Publicaciones:</h3>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h4>{{ post.title }}</h4>
        <p>{{ post.description }}</p>
      </li>
    </ul>

    <button @click="toggleDarkMode">Cambiar Modo</button>
  </main>
  <Footer></Footer>
</template>

<style scoped>
main {
  padding: 20px;
  transition: background-color 0.3s;
}

.dark-mode {
  background-color: #333;
  color: white;
}
</style>
