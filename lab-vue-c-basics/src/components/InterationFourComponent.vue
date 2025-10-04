<script setup>
import { ref } from "vue";

const books = ref([
  {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    price: 12.99,
    image:
      "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    price: 18.5,
    image:
      "https://www.rae.es/sites/default/files/portada_cien_anos_de_soledad_0.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    price: 14.95,
    image:
      "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
  },
]);
</script>

<template>
  <section class="iteration4">
    <h2>Iteration 4 - Lista de libros con v-for</h2>

    <div class="books">
      <article v-for="(book, index) in books" :key="index" class="book-card">
        <img :src="book.image" :alt="book.title" class="book-image" />
        <div class="book-info">
          <h3 class="book-title">{{ book.title }}</h3>
          <p class="book-author">Autor: {{ book.author }}</p>
          <p class="book-price">Precio: {{ book.price }} €</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style>
.iteration4 {
  padding: 2rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #333;
  padding-bottom: 10%;
}

.books {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.book-card {
  background-color: #ebeae8;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.book-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.book-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.book-info {
  padding: 1rem;
}

.book-title {
  font-size: 1.2rem;
  color: #3d3b36;
  margin-bottom: 0.5rem;
}

.book-author {
  font-style: italic;
  color: #666;
  margin-bottom: 0.5rem;
}

.book-price {
  font-weight: 600;
  color: #549ab6;
}
</style>
