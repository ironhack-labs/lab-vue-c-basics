<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    title: 'Post 1',
    description: 'First post',
    content: 'Content of post 1'
  },
  {
    title: 'Post 2',
    description: 'Second post',
    content: 'Content of post 2'
  },
  {
    title: 'Post 3',
    description: 'Third post',
    content: 'Content of post 3'
  }
])
</script>

<template>
  <section>
    <h2>Posts List</h2>

    <div v-for="(post, index) in posts" :key="index">
      <h3>{{ post.title }}</h3>
      <p><strong>{{ post.description }}</strong></p>
      <p>{{ post.content }}</p>
      <hr />
    </div>
  </section>
</template>

