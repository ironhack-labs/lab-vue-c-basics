<template>
  <div id="app">
    <p>2 + 2 = {{ 2 + 2 }}</p>
    <p>{{ getMessage() }}</p>
    <p v-if="show">Hola de nuevo, {{ name }}</p>
    <div v-for="(post, index) in posts" :key="index">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <p>{{ post.content }}</p>
    </div>
    <div :class="{ 'bg-blue': isBlue}" class="box">
      <button @click="toggleColor">
        {{ isBlue ? 'Remove color' : 'Add color' }}
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const name = ref('Ramiro');
  const getMessage = () => `Hola, ${name.value}`;
  const show = ref(true);
  const posts = ref([
  {
    title: 'Post 1',
    description: 'Post 1 description',
    content: 'Complete content of post 1'
  },
  {
    title: 'Post 2',
    description: 'Post 2 description',
    content: 'Complete content of post 2'
  },
  {
    title: 'Post 3',
    description: 'Post 3 description',
    content: 'Complete content of post 3'
  }
  ])
  const isBlue = ref(false)
  const toggleColor = () => isBlue.value = !isBlue.value
</script>

<style scoped>
.box{
  width: 9rem;
  height: auto;
  padding: 1rem;
}

.bg-blue {
  background-color: blue;
  color: black;
}
</style>
