<script setup>
import {ref} from 'vue' // ↤ allow 'ref' to update "references" 

// import
import NavBar from './components/NavBar.vue' 
import Footer from './components/Footer.vue'

const printAString = "print a string" 
const ifTrueThenShow = true 
const arrayWithPosts = ["title", "description", "content"]

const cityList = ref([
  {
    name: ' Barcelona ',
    description: 'city',
    content: 'beautiful',
    img: "https://www.spain.info/.content/imagenes/cabeceras-grandes/cataluna/park-guell-barcelona-s-305364611.jpg"
  },
  {
    name: ' NY ',
    description: 'city',
    content: 'apple',
    img: "https://a.cdn-hotels.com/gdcs/production196/d1429/5c2581f0-c31d-11e8-87bb-0242ac11000d.jpg?impolicy=fcrop&w=800&h=533&q=medium"
  },
  {
    name: ' Malaga ',
    description: 'town',
    content: 'beautiful',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg/1200px-M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg"
  }
])

</script>





<template>
  
  <NavBar></NavBar>

  <br/>
  
  <p>main APP.VUE content</p> 
  <p>{{ printAString }}</p>
  <p v-if="ifTrueThenShow">este parágrafo sólo se muestra si : el <span style="color: rgb(49, 132, 214); font-weight: bold;"> if = true </span> </p> 

  <p>Enseñar : lista ← con : <span style="color: gray;"> 'const arrayWithPosts = ["title", "description", "content"]'</span></p>
  <p v-for="element in arrayWithPosts">{{ element }}</p>
  
  <br/> 

  <p>Enseñar "posts" -con: </p>
  <ul>
    <li v-for="city in cityList" :key="city">
      <p>{{ city.name }}</p>
      <p>{{ city.description }}</p>
      <p>{{ city.content }}</p>
      <img :src="city.img" alt="">
    </li>
  </ul>

  <Footer></Footer>

</template>





<style scoped>

  img { max-width: 33vh; }

</style>
