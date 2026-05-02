<template>
<div>

    <div v-for="post in posts" :key="post.id">

      <h2>{{ post.title }}</h2>

      <p>{{ post.description }}</p>

      <p>{{ post.content }}</p>

    </div>

  </div>
</template>

<script setup>  
import { ref } from 'vue'

const posts = ref([

  {
    id: 1,

    title: "Post 1",

    description: "Beschreibung 1",

    content: "Inhalt 1"

  },

  {
    id: 2,

    title: "Post 2",

    description: "Beschreibung 2",

    content: "Inhalt 2"

  },

  {
    id: 3,
    title: "Post 3",

    description: "Beschreibung 3",

    content: "Inhalt 3"

  }

])
</script>