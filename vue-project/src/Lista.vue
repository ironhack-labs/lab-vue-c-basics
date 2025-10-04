<script setup>
import { ref } from "vue";

const planetas = ref([
  { title: 'Mercurio', description: 'Planeta más cercano al sol', content: 'Vida inexistente' },
  { title: 'Tierra', description: 'Tercer planeta del sistema solar', content: 'Contiene vida' },
  { title: 'Luna', description: 'Satélite', content: 'Orbita alrededor de la Tierra' },
])
</script>


<template>

<ul class="planetas-list">
    <li v-for="(planeta, index) in planetas" :key="index">
    <article class="planetas-card">
        <h2 class="planetas-nombre">{{ planeta.title }}</h2>
        <p>{{ planeta.description }}</p>
        <p>{{ planeta.content }}</p>    
    </article>
              </li>
  </ul>

</template>


<style></style>

