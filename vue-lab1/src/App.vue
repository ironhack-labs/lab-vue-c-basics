<script setup>
import { ref, computed } from 'vue'

const number1 = 5
const number2 = 3
const sum = number1 + number2

const firstName = ref('Nidhin')
const lastName = ref('Stalin')
const getFullName = computed(() => `${firstName.value} ${lastName.value}`)

const isVisible = ref(true)

const posts = ref([
  {
    title: 'First Post',
    description: 'Introduction to Vue ',
    content: 'This post explains the fundamentals of Vue.js and how reactivity works.'
  },
  {
    title: 'Second Post',
    description: 'Understanding Directives',
    content: 'Here we learn about Vue directives like v-if, v-for, and v-bind.'
  },
  {
    title: 'Third Post',
    description: 'Working with Components',
    content: 'This section covers how to create and reuse components effectively.'
  }
])

const isHighlighted = ref(false)
function toggleHighlight() {
  isHighlighted.value = !isHighlighted.value
}
</script>

<template>
  <div id="app" :style="{ backgroundColor: isHighlighted ? '#fff7ed' : '#f9fafb' }">
    <header>
      <h1>My Vue App</h1>
    </header>

    <main>
      <section>
        <h2>Iteration 2: JS Operation Result</h2>
        <p>Sum of {{ number1 }} + {{ number2 }} = <strong>{{ sum }}</strong></p>
        <p>Full name: <strong>{{ getFullName }}</strong></p>
      </section>

      <section>
        <h2>Iteration 3: Conditional Rendering</h2>
        <button @click="isVisible = !isVisible">Toggle Secret Message</button>
        <p v-if="isVisible">🎉 Vue makes conditional rendering super easy!</p>
      </section>

      <section>
        <h2>Iteration 4: List of Posts</h2>
        <ul>
          <li v-for="(post, index) in posts" :key="index">
            <h3>{{ post.title }}</h3>
            <p><strong>{{ post.description }}</strong></p>
            <p>{{ post.content }}</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Iteration 5: Change Background</h2>
        <button @click="toggleHighlight">
          {{ isHighlighted ? 'Reset Background' : 'Highlight Background' }}
        </button>
      </section>
    </main>

    <footer>
      <p>© 2025 My Vue App</p>
    </footer>
  </div>
</template>

<style scoped>
header {
  background-color: #dbeafe;
  padding: 15px;
  text-align: center;
  font-weight: bold;
}
main {
  padding: 20px;
  text-align: center;
}
section {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 20px auto;
  width: 80%;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}
button {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #2563eb;
}
footer {
  background-color: #f3f4f6;
  padding: 10px;
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
}
</style>
