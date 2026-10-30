<script setup>
import { computed, ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

// iteración 2
const product = ref('Teclado')
const price = ref(45)
const quantity = ref(2)

const summary = computed(
  () => `${quantity.value} x ${product.value} = ${quantity.value * price.value} €`,
)

function addUnit() {
  quantity.value++
}

function removeUnit() {
  if (quantity.value > 1) {
    quantity.value--
  }
}

// iteración 3
const showMessage = ref(true)

// iteración 4
const posts = ref([
  {
    id: 1,
    title: 'Primer post',
    description: 'Una descripción corta',
    content: 'Este post se pinta con v-for desde el array de posts.',
  },
  {
    id: 2,
    title: 'Segundo post',
    description: 'Otra descripción',
    content: 'Todos los posts salen del mismo ref y la lista se actualiza sola.',
  },
  {
    id: 3,
    title: 'Tercer post',
    description: 'Última descripción',
    content: 'Con Vue no hace falta escribir el bucle a mano en el HTML.',
  },
])

// bonus
const color = ref('white')

function changeColor() {
  color.value = color.value === 'white' ? 'lightgreen' : 'white'
}
</script>

<template>
  <Navbar />

  <main>
    <section class="card">
      <h1>LAB Vue.js Basics</h1>
      <p>Ejercicios del laboratorio con Vue 3 y la Composition API.</p>
    </section>

    <section id="operaciones" class="card">
      <h2>Iteración 2: operaciones en el HTML</h2>
      <p>2 + 2 = {{ 2 + 2 }}</p>
      <p>{{ summary }}</p>
      <div class="controls">
        <button @click="removeUnit">-</button>
        <span>Cantidad: {{ quantity }}</span>
        <button @click="addUnit">+</button>
      </div>
    </section>

    <section id="condicional" class="card">
      <h2>Iteración 3: mostrar un elemento si es true</h2>
      <button @click="showMessage = !showMessage">
        {{ showMessage ? 'Ocultar mensaje' : 'Mostrar mensaje' }}
      </button>
      <p v-if="showMessage">Este párrafo solo se ve cuando la variable vale true.</p>
    </section>

    <section id="posts" class="card">
      <h2>Iteración 4: lista de posts con v-for</h2>
      <article v-for="post in posts" :key="post.id" class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
        <p>{{ post.content }}</p>
      </article>
    </section>

    <section id="bonus" class="card">
      <h2>Bonus: cambiar el color de fondo</h2>
      <div class="color-box" :style="{ backgroundColor: color }">
        <p>Pulsa el botón para cambiar mi color de fondo.</p>
      </div>
      <button @click="changeColor">Cambiar color</button>
    </section>
  </main>

  <Footer />
</template>