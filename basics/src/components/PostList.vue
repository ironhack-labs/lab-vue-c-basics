<template>
    <div>
      <h2>Lista de Posts</h2>
      <ul>
        <li v-for="post in posts" :key="post.title">
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <p>{{ post.content }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const posts = ref([
    { title: 'Post 1', description: 'Descripción del Post 1', content: 'Contenido del Post 1' },
    { title: 'Post 2', description: 'Descripción del Post 2', content: 'Contenido del Post 2' },
    { title: 'Post 3', description: 'Descripción del Post 3', content: 'Contenido del Post 3' },
  ]);
  </script>
  
  <style scoped>
  /* Estilos opcionales */
  </style>
  