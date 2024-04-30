<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    title: 'Título de la Publicación 1',
    description: 'Descripción de la Publicación 1',
    content: '<p>Contenido de la Publicación 1</p>'
  },
  {
    title: 'Título de la Publicación 2',
    description: 'Descripción de la Publicación 2',
    content: '<p>Contenido de la Publicación 2</p>'
  },
  {
    title: 'Título de la Publicación 3',
    description: 'Descripción de la Publicación 3',
    content: '<p>Contenido de la Publicación 3</p>'
  }
])

const isHighlighted = ref(false);
const toggleHighlight = () => {
  isHighlighted.value = !isHighlighted.value;
};

</script>

<template>
  <section>
    <button @click="toggleHighlight">Dale vida</button>
    <div v-for="(post, index) in posts" :key="index" :class="{highlighted: isHighlighted}">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <div v-html="post.content"></div>
    </div>
  </section>
</template>

<style scoped>
  .highlighted {
    background-color: yellow;
  }
</style>
