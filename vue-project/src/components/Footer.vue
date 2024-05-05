<script setup>
import { ref, reactive } from 'vue'

const author = reactive({
    name: 'John Doe',
    books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
})
const cityList = ref([
    {
        name: 'Barcelona',
        Description: 'city',
        content: 'Beautiful',
        img:"https://www.spain.info/.content/imagenes/cabeceras-grandes/cataluna/park-guell-barcelona-s-305364611.jpg"
    },
    {
        name: 'NY',
        Description: 'city2',
        content: 'Beautiful2',
        img:"https://a.cdn-hotels.com/gdcs/production196/d1429/5c2581f0-c31d-11e8-87bb-0242ac11000d.jpg?impolicy=fcrop&w=800&h=533&q=medium"
    },
    {
        name: 'Malaga',
        Description: 'city3',
        content: 'Beautiful3',
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg/1200px-M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg"
    }
])

const isShow = ref(true)
function show() {
    return author.name + ' Acosta'
}

</script>

<template>
    <div :class="cambiaColor? 'backgroundColor' : '' "></div> <!--true la clase es cambiaColor sino es vacio-->
    <h1>soy el Footer</h1>
    <br/><br/><br/><br/>
    <p>suma: {{ 2 + 2 }}</p>
    <br /><br /><br /><br />
    <p>{{ show() }}</p>
    <br/><br/><br/><br/>
    <p v-show="isShow">Este parrafo se oculta si esta declarada como false</p>
    <br/><br/><br/><br/>
    <ul>
        <li v-for="city in cityList" :key="city">
            <p>Nombre: {{ city.name }}</p>
            <p>Descripcion: {{ city.Description }} </p>
            <p>Contenido: {{ city.content }}</p>
            <img :src="city.img" alt="">
            <br/>
        </li>
    </ul>
    <br><br>
</template>
<style scoped>
</style>
