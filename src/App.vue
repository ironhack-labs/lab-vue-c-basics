<template>
  <Navbar />

  <main>
    <h1>{{ 2 + 2 }}</h1>

    <p>{{ getMessage() }}</p>

    <p v-if="isVisible">This text is visible!</p>

    <button @click="toggleColor">Change Background</button>

    <div :style="{ backgroundColor: bgColor, padding: '10px', marginTop: '10px' }">Color box</div>

    <div v-for="post in posts" :key="post.title">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <p>{{ post.content }}</p>
    </div>
  </main>

  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

function getMessage() {
  return 'Hello from a function!'
}

const isVisible = ref(true)

const posts = ref([
  {
    title: 'Post 1',
    description: 'This is the first post',
    content: 'Content of post 1',
  },
  {
    title: 'Post 2',
    description: 'This is the second post',
    content: 'Content of post 2',
  },
  {
    title: 'Post 3',
    description: 'This is the third post',
    content: 'Content of post 3',
  },
])

const bgColor = ref('lightgray')

function toggleColor() {
  if (bgColor.value === 'lightgray') {
    bgColor.value = 'lightgreen'
  } else {
    bgColor.value = 'lightgray'
  }
}
</script>

<style>
main {
  padding: 20px;
}
</style>
