<script setup>
import { ref, reactive } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
})

function show() {
  return author.name + ' Cassini'
}

const isShown = ref(false)

const cityList = ref([
  {
    name: 'Barcelona',
    description: 'city',
    content: 'beautiful',
    img: 'https://www.spain.info/.content/imagenes/cabeceras-grandes/cataluna/park-guell-barcelona-s-305364611.jpg'
  },
  {
    name: 'Malaga',
    description: 'city',
    content: 'beautiful',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg/1200px-M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg'
  },
  {
    name: 'NY',
    description: 'city',
    content: 'beautiful',
    img: 'https://a.cdn-hotels.com/gdcs/production196/d1429/5c2581f0-c31d-11e8-87bb-0242ac11000d.jpg?impolicy=fcrop&w=800&h=533&q=medium'
  }
])
</script>

<template>
  <h1>Soy el NavBar</h1>

  <p>Suma: {{ 2 + 2 }}</p>

  <p>{{ show() }}</p>

  <p v-show="isShown">Este parrafo se oculta</p>

  <ul>
    <li v-for="city in cityList" :key="city">
      <p>{{ city.name }}</p>
      <p>{{ city.description }}</p>
      <p>{{ city.content }}</p>
      <img :src="city.img" alt="" />
    </li>
  </ul>
</template>

<style scoped></style>
