<script setup>
import{ref} from 'vue';
// Lista de publicaciones con título, descripción y contenido
const posts = ref([
  {
    titulo: 'Publicación 1',
    descripcion: 'Esta es la descripción de la primera publicación.',
    contenido: 'Este es el contenido completo de la primera publicación.',
  },
  {
    titulo: 'Publicación 2',
    descripcion: 'Descripción de la segunda publicación.',
    contenido: 'Contenido detallado de la segunda publicación.',
  },
  {
    titulo: 'Publicación 3',
    descripcion: 'Descripción de la tercera publicación.',
    contenido: 'Contenido detallado de la tercera publicación.',
  },
]);
</script>

<template>
  <section class="lista">
    <div v-for="(post, index) in posts" :key="index" class="post">
      <h2>{{ post.titulo }}</h2>
      <p><strong>Descripción:</strong> {{ post.descripcion }}</p>
      <p><strong>Contenido:</strong> {{ post.contenido }}</p>
      <hr />
    </div>
  </section>
</template>

<style scoped>
.navbar {
    background-color: #b22222;
    color: white;
    padding: 10px;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 100;
  
}
</style>