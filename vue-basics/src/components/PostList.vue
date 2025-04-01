<script setup>
import { ref } from 'vue';

const posts = ref([
  {
    title: 'Primer post',
    description: 'Una breve introducción',
    content: 'Este es el contenido del primer post.'
  },
  {
    title: 'Segundo post',
    description: 'Un tema interesante',
    content: 'Aquí hablamos de algo muy interesante.'
  },
  {
    title: 'Tercer post',
    description: 'Conclusión final',
    content: 'Terminamos con una reflexión importante.'
  }
])
</script>

<template>
  <div>
    <h1>Lista de Posts</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <h2>{{ post.title }}</h2>
        <h4>{{ post.description }}</h4>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  color: navy;
}
h2 {
  margin: 0.5rem 0;
}
h4 {
  font-weight: normal;
  color: #555;
}
p {
  margin-bottom: 1.5rem;
}
</style>
