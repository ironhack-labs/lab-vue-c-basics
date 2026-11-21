<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    title: 'Naruto Uzumaki',
    description: 'Le ninja qui abrite Kurama, le démon à neuf queues.',
    content: 'Naruto rêve de devenir Hokage.'
  },
  {
    id: 2,
    title: 'Sasuke Uchiwa',
    description: 'Le rival de Naruto.',
    content: 'Sasuke appartient au clan Uchiha. Il maîtrise le Sharingan.'
  },
  {
    id: 3,
    title: 'Sakura Haruno',
    description: 'La future femme de Sasuke.',
    content: 'Sakura est une ninja médicale. Elle possède une force surhumaine.'
  },
  {
    id: 4,
    title: 'Kakashi Hatake',
    description: 'Le professeur de l\'équipe 7.',
    content: 'Kakashi est surnommé le ninja copieur grâce à son Sharingan.'
  }
])
</script>

<template>
  <div v-for="post in posts" :key="post.id">
    <h2>{{ post.title }}</h2>
    <h4>{{ post.description }}</h4>
    <p>{{ post.content }}</p>
  </div>
</template>