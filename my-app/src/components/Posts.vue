<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    title: 'Getting Started with Vue',
    description: 'A quick intro to the Vue framework.',
    content: 'Vue is a progressive JavaScript framework used for building user interfaces.'
  },
  {
    id: 2,
    title: 'The Composition API',
    description: 'Why the Composition API matters.',
    content: 'The Composition API offers better logic reuse and stronger TypeScript support.'
  },
  {
    id: 3,
    title: 'Reactivity in Vue',
    description: 'Understanding how reactivity works under the hood.',
    content: 'Vue tracks dependencies between reactive state and re-renders components when needed.'
  }
])
</script>

<template>
  <section class="posts">
    <h2>Latest Posts</h2>
    <article v-for="post in posts" :key="post.id" class="post">
      <h3>{{ post.title }}</h3>
      <p class="description">{{ post.description }}</p>
      <p>{{ post.content }}</p>
    </article>
  </section>
</template>

<style scoped>
.posts {
  max-width: 700px;
  margin: 2rem auto;
  padding: 0 1rem;
}
.post {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;
  background-color: #fafafa;
}
.description {
  font-style: italic;
  color: #555;
}
</style>
