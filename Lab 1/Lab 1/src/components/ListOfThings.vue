<script setup>
import { ref } from 'vue';

const posts = ref([
  {
    title: 'gato',
    description: 'mamífero',
    content: 'miau'
  },
  {
    title: 'perro',
    description: 'mamífero',
    content: 'guau'
  },
  {
    title: 'cabra',
    description: 'mamífero',
    content: 'beeeh'
  }
]);
</script>

<template>
    <div>
        <ul>
            <li v-for="post in posts">
                <h3>{{ post.title }}</h3>
                <p><strong>Descripción:</strong> {{ post.description }}</p>
                <p><strong>Contenido:</strong> {{ post.content }}</p>
                <br>
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>