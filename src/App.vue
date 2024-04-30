<script setup>

import Navbar from './components/Nav-bar.vue'
import Footer from './components/Footer-section.vue'
import { ref } from 'vue'

const name = ref('Thais')

const saludo = () => {
    return `Hola, soy ${name.value}!`;
}

const conHambre = ref(true)

const posts = ref([
    { title: 'Titulo 1', description: 'Descripción 1', content: 'Contenido 1' },
    { title: 'Titulo 2', description: 'Descripción 2', content: 'Contenido 2' },
    { title: 'Titulo 3', description: 'Descripción 3', content: 'Contenido 3' }
]);

</script>

<template>
    <Navbar></Navbar>
    <p>El resultado es el siguiente: {{ 2 + 2 }}</p>
    <p> {{ saludo() }}</p>
    <p v-if="conHambre">Estoy triste, no he comido aún.</p>
    <p v-else>Estoy feliz, ya he comido!</p>

    <ul>
        <li v-for="post in posts" :key="post.title">
            {{ post.title }} <br>
            {{ post.description }} <br>
            {{ post.content }}<br><br>
        </li>
    </ul>

    <Footer></Footer>
</template>

<style scoped>
p {
    text-align: center;
    margin: 10px
}

ul {
    text-align: center;

}

ul li {
    margin: 10px
}
</style>
