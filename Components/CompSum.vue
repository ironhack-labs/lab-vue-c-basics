<script setup>
import { ref, reactive } from 'vue'

const OpeSum = ref(2 + 2)

const listOfMovies = reactive([
  {
    category: 'drama',
    listOfdrama: [
      'Forrest Gump',
      'The Godfather',
      'Dead Poets Society',
      'Good Will Hunting',
      'A Beautiful Mind'
    ]
  }
])

function printString(movies) {
    return movies[0].listOfdrama.length;
}
</script>

<template>
  <p>El resultado de la Suma es : {{ OpeSum }}</p>
  <p>En la lista hay : {{ printString(listOfMovies) }} peliculas de Drama</p>
</template>

<style></style>
