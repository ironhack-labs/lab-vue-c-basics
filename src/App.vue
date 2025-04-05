<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { ref, reactive } from "vue";

const text = ref(2 + 2);

const author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});

const hasPublishedBooks = author.books.length > 0;

const posts = ref([
  {
    title: "Getting Started with Vue 3",
    description:
      "A beginner-friendly guide to setting up your first Vue 3 project.",
    content:
      "Vue 3 introduces Composition API, improved TypeScript support, and better performance. This post walks you through creating your first project using Vite, setting up components, and understanding reactivity...",
  },
  {
    title: "Understanding Reactivity in JavaScript",
    description:
      "Learn how reactivity powers modern frameworks like Vue and React.",
    content:
      "Reactivity is the ability of an application to automatically update the UI when data changes. This post explores reactive patterns in JavaScript, how proxies work, and why reactivity makes development more dynamic...",
  },
  {
    title: "CSS Tips for Clean and Modern UI",
    description: "Simple CSS tricks to make your interfaces stand out.",
    content:
      "From using Flexbox and Grid to utility-first classes, this post covers several CSS tips to write cleaner code and build responsive, modern UIs. Learn about spacing, typography, and subtle transitions to improve UX...",
  },
]);

const h1Color = ref("#000000");

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function changeColor() {
  h1Color.value = getRandomColor();
}
</script>

<template>
  <Navbar />

  <h1 :style="{ color: h1Color }">Welcome to LAB | Vue.js Basics</h1>
  <button @click="changeColor">Magic button!</button>

  <div>
    <span>2+2: {{ text }}</span>
  </div>
  <div>
    <h2>Author: {{ author.name }}</h2>
    <p>Has published books: {{ hasPublishedBooks ? "Yes" : "No" }}</p>
    <p v-if="hasPublishedBooks">Books:</p>
    <p v-else>No books published yet.</p>
    <ul>
      <li v-for="(book, index) in author.books" :key="index">
        {{ book }}
      </li>
    </ul>
    <h2>Posts:</h2>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>

  <Footer />
</template>

<style scoped>
</style>
