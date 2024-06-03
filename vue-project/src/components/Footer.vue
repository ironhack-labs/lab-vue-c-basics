<script setup>
import { ref } from "vue";

const posts = ref([
  {
    title: "Post 1",
    description: "Description 1",
    content: "Content 1",
  },
  {
    title: "Post 2",
    description: "Description 2",
    content: "Content 2",
  },
  {
    title: "Post 3",
    description: "Description 3",
    content: "Content 3",
  },
]);
</script>

<template>
  <div class="container">
    <div v-for="(posts, index) in posts" :key="index">
      <h1>{{ posts.title }}</h1>
      <p>{{ posts.description }}</p>
      <p>{{ posts.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.container div {
  max-width: 150px;
  margin: 50px;
}
</style>
