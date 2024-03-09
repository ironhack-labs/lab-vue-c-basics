<script setup>
import { reactive } from 'vue'
const posts = reactive(
  [
    {
      id: 1,
      title: "Healthy Recipes",
      description: "Delicious dishes",
      content: "Try new meals!"
    },
    {
      id: 2,
      title: "Travel Guide",
      description: "Explore the world",
      content: "Adventure awaits!"
    },
    {
      id: 3,
      title: "Tech Updates",
      description: "Latest gadgets",
      content: "Stay informed!"
    },
    {
      id: 4,
      title: "Fitness Tips",
      description: "Workout advice",
      content: "Stay active!"
    }
  ]);

console.log(posts)

</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
  </ul>
</template>