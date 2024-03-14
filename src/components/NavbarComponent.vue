<script setup>
import { reactive } from 'vue'

const posts = reactive([
  {
    id: 0,
    title: 'Post 1',
    description: 'Description of Post 1',
    content: 'Content of Post 1'
  },
  {
    id: 1,
    title: 'Post 2',
    description: 'Description of Post 2',
    content: 'Content of Post 2'
  },
  {
    id: 2,
    title: 'Post 3',
    description: 'Description of Post 3',
    content: 'Content of Post 3'
  }
])
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <p>{{ post.content }}</p>
    </li>
  </ul>
</template>

<style scoped></style>
