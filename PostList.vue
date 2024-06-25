<template>
    <div>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <p>{{ post.content }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const posts = ref([
    { id: 1, title: 'Post 1', description: 'Description 1', content: 'Content 1' },
    { id: 2, title: 'Post 2', description: 'Description 2', content: 'Content 2' },
    { id: 3, title: 'Post 3', description: 'Description 3', content: 'Content 3' },
  ]);
  </script>
  