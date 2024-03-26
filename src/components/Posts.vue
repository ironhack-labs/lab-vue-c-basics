<script setup>

import { ref } from 'vue';

const posts = ref([
  {
    id: 1,
    title: 'First Post',
    description: 'Description of the first post',
    content: 'Content of the first post'
  },
  {
    id: 2,
    title: 'Second Post',
    description: 'Description of the second post',
    content: 'Content of the second post'
  },
  {
    id: 3,
    title: 'Third Post',
    description: 'Description of the third post',
    content: 'Content of the third post'
  }
]);
</script>

<template>
        <div>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>