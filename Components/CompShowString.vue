<script setup>
import { reactive } from 'vue'

const listOfMovies = reactive([
  {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    genre: 'Science Fiction',
    rating: 8.8
  },
  {
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    year: 2008,
    genre: 'Action',
    rating: 9.0
  },
  {
    title: 'Interstellar',
    director: 'Christopher Nolan',
    year: 2014,
    genre: 'Science Fiction',
    rating: 8.6
  },
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    year: 1994,
    genre: 'Drama',
    rating: 9.3
  }
])
</script>

<template>
    <div>
      <p>List Of Movies</p>
      <ul>
        <li v-for="(movie, index) in listOfMovies" :key="index">
          <h3>{{ movie.title}}</h3>
          <p>Director:{{ movie.director }}</p>
          <p>Año: {{ movie.year }}</p>
          <p>Género: {{ movie.genre }}</p>
          <p>Rating: {{ movie.rating }}</p>
        </li>
      </ul>
    </div>
  </template>

<style></style>
