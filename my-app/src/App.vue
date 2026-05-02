<script setup>
import { ref, computed } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Posts from './components/Posts.vue'

const firstName = ref('Janni')
const lastName = ref('Wolf')

const fullGreeting = computed(() => {
  return `Hello, ${firstName.value} ${lastName.value}!`
})

const showSecret = ref(true)

const isHighlighted = ref(false)
function toggleHighlight() {
  isHighlighted.value = !isHighlighted.value
}
</script>

<template>
  <Navbar />

  <main :class="{ highlighted: isHighlighted }">
    <section class="iteration">
      <h2>Iteration 2 | JS in the template</h2>
      <p>2 + 2 = {{ 2 + 2 }}</p>
      <p>{{ fullGreeting }}</p>
    </section>

    <section class="iteration">
      <h2>Iteration 3 | Conditional rendering</h2>
      <p v-if="showSecret">You can see this paragraph because showSecret is true.</p>
    </section>

    <Posts />

    <section class="iteration">
      <h2>Iteration 5 | Toggle background</h2>
      <button @click="toggleHighlight">
        {{ isHighlighted ? 'Reset background' : 'Change background' }}
      </button>
    </section>
  </main>

  <Footer />
</template>

<style scoped>
main {
  min-height: 60vh;
  padding: 1rem 2rem;
  transition: background-color 0.3s ease;
}
main.highlighted {
  background-color: #ffe066;
}
.iteration {
  max-width: 700px;
  margin: 1.5rem auto;
}
button {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  background-color: #42b883;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}
button:hover {
  background-color: #369f6b;
}
</style>
