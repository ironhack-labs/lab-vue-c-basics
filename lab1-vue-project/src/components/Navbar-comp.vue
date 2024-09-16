<script setup>
import { ref, reactive } from 'vue'
const navbarItems = ref(['Home', 'About', 'Services', 'Contact'])

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
})
const isShown = ref(true)
const cityList = ref([
  {
    name: ' Barcelona ',
    description: 'city',
    content: 'beautiful',
    img: 'https://www.spain.info/.content/imagenes/cabeceras-grandes/cataluna/park-guell-barcelona-s-305364611.jpg'
  },
  {
    name: ' NY ',
    description: 'city',
    content: 'beautiful',
    img: 'https://a.cdn-hotels.com/gdcs/production196/d1429/5c2581f0-c31d-11e8-87bb-0242ac11000d.jpg?impolicy=fcrop&w=800&h=533&q=medium'
  },
  {
    name: ' Malaga ',
    description: 'city',
    content: 'beautiful',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg/1200px-M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg'
  }
])
function show() {
  return author.name + ' Scinto '
}
const styleObject = ref("red")
</script>

<template>
  <section>
    <nav>
      <ul class="navbar">
        <li v-for="element in navbarItems" :key="element">{{ element }}</li>
      </ul>
    </nav>
  </section>

  <section>
    <p>Sum:{{ 2 + 2 }}</p>
    <p>{{ show() }}</p>
  </section>

  <section>
    <p v-show="isShown"> Hidden Paragraph </p>
    <button @click ="color"> Change color </button>
    <ul>
      <li v-for="city in cityList" :key="city">
        <p>{{ city.name }}</p>
        <p>{{ city.description }}</p>
        <p>{{ city.content }}</p>
        <img :src="city.img" alt="" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  align-content: space-between;
  gap: 50px;
  list-style-type: none;
  padding-left: 200px;
  padding-top: 50px;
}

.red{
  background-color: red;
  padding: 10px;
}
</style>
