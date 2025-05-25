<script setup>
import { ref } from 'vue';

const posts = ref([
  { title: 'SOPA DE CEBOLLA', description: 'Tipico plato Frances', content: 'Se come con queso' },
  { title: 'TARTIFLETTE', description: 'Tipico plato de las montañas', content: 'Lleva lardon' },
  { title: 'Creme Brule', description: 'El mejor postre', content: 'Una delicia' }
]);
</script>

<template>
    <section>
         <h2>Lista de Posts</h2>
  <ul>
    <li v-for="post in posts" :key="post.title">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <p>{{ post.content }}</p>
    </li>
  </ul>
    </section>

</template>

<style scoped></style>