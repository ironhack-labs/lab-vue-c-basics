<script setup>
import { ref } from 'vue'
//  Component imports (Iteration 1 & 4)
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import PostsList from './components/PostsList.vue' // only if you created Iteration 4

// Iteration 2
const name = ref('Student')
const age = ref(20)

function getMessage() {
  return `Hello ${name.value}, you are ${age.value} years old.`
}

// Iteration 3
const isVisible = ref(true)

// Iteration 5
const isBlue = ref(false)

function toggleColor() {
  isBlue.value = !isBlue.value
}
</script>

<template>
  <!-- Iteration 1 -->
  <Navbar />

  <main>

    <!-- Iteration 2 -->
    <section>
      <h2>JavaScript in Templates</h2>
      <p>{{ 2 + 2 }}</p>
      <p>{{ getMessage() }}</p>
    </section>

    <hr />

    <!-- Iteration 3 -->
    <section>
      <h2>Conditional Rendering</h2>

      <button @click="isVisible = !isVisible">
        Toggle
      </button>

      <p v-if="isVisible">
        This is conditional text
      </p>
    </section>

    <hr />

    <!-- Iteration 4 (ONLY if you created PostsList.vue) -->
    <PostsList />

    <hr />

    <!-- Iteration 5 -->
    <section>
      <h2>Change Background Color</h2>

      <button @click="toggleColor">
        Change color
      </button>

      <div :class="{ blue: isBlue, red: !isBlue }" class="box">
        Color box
      </div>
    </section>

  </main>

  <!-- Iteration 1 -->
  <Footer />
</template>

<style>
.box {
  padding: 20px;
  margin-top: 10px;
  color: white;
}

.blue {
  background: steelblue;
}

.red {
  background: tomato;
}
section {
  margin-bottom: 30px;
}
</style> 
