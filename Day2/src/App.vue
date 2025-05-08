<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { ref, computed } from 'vue'

const num1 = ref(2)
const num2 = ref(4)
const fullmessage = computed(
  () => `The result of ${num1.value} + ${num2.value} is ${num1.value + num2.value}`,
)

const showMessage = ref(true)

const posts = ref([
  { title: 'Post 1', description: 'Description post 1', content: 'Content post 1' },

  {
    title: 'Post 2',
    description: 'Description post 2',
    content: 'Content post 2',
  },
  {
    title: 'Post 3',
    description: 'Description post 3',
    content: 'Content post 3',
  },
])

const isGreen = ref(false)
function toggleColor() {
  isGreen.value = !isGreen.value
}
</script>

<template>
  <Navbar />
  <main class="container">
    <h1>Vue Basics Lab Day2</h1>

    <section class="operations">
      <p>Mathematical operation</p>
      <p>Result of: {{ 2 + 2 }}</p>
      <p>{{ fullmessage }}</p>
    </section>

    <section class="conditional">
      <h2>Conditional:</h2>
      <p v-if="showMessage">Show this text if showMessage is true</p>
    </section>

    <section class="posts">
      <h2>Posts list:</h2>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <h3>
            {{ post.title }}
          </h3>
          <p>{{ post.description }}</p>
          <small> {{ post.content }}</small>
        </li>
      </ul>
    </section>

    <section class="button-color">
      <h2>Color dinámico:</h2>
      <div :style="{ backgroundColor: isGreen ? 'Green' : 'lightgreen' }" class="color-box">
        <p>Click to change color</p>
        <button @click="toggleColor">Change color</button>
      </div>
    </section>
  </main>

  <Footer />
</template>

<style scoped>
.container {
  padding: 3rem;
  font-family: Avenir, Helvetica, sans-serif;
}
.operations {
  padding: 1rem;
}

.conditional {
  padding: 1rem;
}

.posts {
  padding: 1rem;
}

.color-box {
  padding: 1rem;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}
</style>
