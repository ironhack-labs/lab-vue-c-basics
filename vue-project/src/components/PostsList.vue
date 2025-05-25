
<template>
  <ul>
    <li v-for="post in posts" :key="post.title">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <div>{{ post.content }}</div>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
const posts = ref([
  { title: 'Post 1', description: 'Desc 1', content: 'Contenido 1' },
  { title: 'Post 2', description: 'Desc 2', content: 'Contenido 2' },
  { title: 'Post 3', description: 'Desc 3', content: 'Contenido 3' }
])
</script>