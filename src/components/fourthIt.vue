<script setup>
import { ref } from 'vue';
const movies = ref([
    {
      title: '2001: A Space Odyssey',
      description: 'Science fiction',
      content: 'The greatest film ever made began with the meeting of two brilliant minds: Stanley Kubrick and sci-fi seer Arthur C Clarke.'
    },
    {
      title: 'The godfather (1972)',
      description: 'Thriller',
      content: 'From the wise guys of Goodfellas to The Sopranos, all crime dynasties that came after The Godfather are descendants of the Corleones: Francis Ford Coppola’s magnum opus is the ultimate patriarch of the Mafia genre.'
    },
    {
      title: 'Citizen Kane (1941)',
      description: 'Drama',
      content: 'Back in the headlines thanks to David Fincher’s brilliantly acerbic making-of drama Mank, Citizen Kane always finds a way to renew itself for a new generation of film lovers.'
    },
    
  ]);

</script>

<template>

<section id="fourthdIt">
    <h1>Movies</h1>
    <div v-for="(movie, index) in movies" :key="index" class="movie">
      <h2>{{ movie.title }}</h2>
      <p>Description: {{ movie.description }}</p>
      <p>Content: {{ movie.content }}</p>
    </div>
</section>

    

</template>

<style scope>

#fourthdIt {
    padding: 20px;
 /*   border: 1px solid orange;*/
}

.movie {
    margin-bottom: 20px;

    background-color: #F2F2F2;
    padding: 10px;
    box-shadow: 7px 7px 7px #EDEDED;
  }

</style>