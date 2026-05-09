<script setup>
import { ref } from 'vue'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

/* Iteration 2 */
const firstName = ref('Lucas')
const lastName = ref('Jordan')

function fullName() {
  return `${firstName.value} ${lastName.value}`
}

/* Iteration 3 */
const showMessage = ref(true)

/* Iteration 4 */
const posts = ref([
  {
    title: 'First Post',
    description: 'This is the first description',
    content: 'This is the first content'
  },
  {
    title: 'Second Post',
    description: 'This is the second description',
    content: 'This is the second content'
  },
  {
    title: 'Third Post',
    description: 'This is the third description',
    content: 'This is the third content'
  }
])
</script>

<template>
  <Navbar />

  <main>
    <h1>You did it!</h1>

    <!-- Iteration 2 -->
    <h2>Math operation</h2>
    <p>{{ 2 + 2 }}</p>

    <h2>Function result</h2>
    <p>{{ fullName() }}</p>

    <!-- Iteration 3 -->
    <h2>Conditional rendering</h2>

    <p v-if="showMessage">
      This message is visible because showMessage is true
    </p>

    <!-- Iteration 4 -->
    <h2>Posts</h2>

    <div v-for="post in posts" :key="post.title" class="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <p>{{ post.content }}</p>
    </div>
  </main>

  <Footer />
</template>

<style scoped>
main {
  padding: 20px;
}

.post {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 15px;
}
</style>
