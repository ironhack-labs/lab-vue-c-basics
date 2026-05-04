<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { ref, computed } from "vue";

/* =========================
   ITERATION 2
========================= */
const name = ref("Nelson");
const course = ref("Vue.js");

const message = computed(() => {
  return `Hello ${name.value}, welcome to ${course.value} lab`;
});

/* =========================
   ITERATION 3
========================= */
const showMessage = ref(true);

/* =========================
   ITERATION 4
========================= */
const posts = ref([
  {
    title: "First Post",
    description: "Learning Vue basics",
    content: "Vue makes frontend easy and reactive."
  },
  {
    title: "Second Post",
    description: "Working with components",
    content: "Components help you reuse code."
  },
  {
    title: "Third Post",
    description: "Understanding directives",
    content: "v-if and v-for are very powerful."
  }
]);

/* =========================
   ITERATION 5 (BONUS)
========================= */
const isBlue = ref(false);

function toggleColor() {
  isBlue.value = !isBlue.value;
}
</script>

<template>
  <Navbar />

  <main>
    <h1>Vue Lab</h1>

    <!-- ITERATION 2 -->
    <p>{{ 2 + 2 }}</p>
    <p>{{ message }}</p>

    <!-- ITERATION 3 -->
    <p v-if="showMessage">
      This message only appears when showMessage is true
    </p>

    <!-- ITERATION 4 -->
    <div v-for="(post, index) in posts" :key="index">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <small>{{ post.content }}</small>
      <hr />
    </div>

    <!-- ITERATION 5 BONUS -->
    <div :class="{ blue: isBlue, red: !isBlue }" class="box">
      <p>Click the button to change background color</p>

      <button @click="toggleColor">
        Change Color
      </button>
    </div>
  </main>

  <Footer />
</template>

<style scoped>
main {
  padding: 20px;
}

/* BONUS STYLES */
.box {
  margin-top: 20px;
  padding: 20px;
}

.blue {
  background-color: lightblue;
}

.red {
  background-color: lightcoral;
}
</style>