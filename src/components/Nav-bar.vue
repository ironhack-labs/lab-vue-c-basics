<script setup>
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
    <section>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        <p>El resultado es el siguiente: {{ 2 + 2 }}</p>
        <p> {{ saludo() }}</p>
        <p v-if="conHambre">Estoy triste, no he comido aún.</p>
        <p v-else>Estoy feliz, ya he comido!</p>

        <ul class="post">
            <li v-for="post in posts" :key="post.title">
                {{ post.title }} <br>
                {{ post.description }} <br>
                {{ post.content }}<br><br>
            </li>
        </ul>
    </section>
</template>

<style scoped>
section {
    background-color: lightcoral;
    padding: 10px;
}

section ul {
    list-style-type: none;
    margin: 20px;
    padding: 0;
    overflow: hidden;
    display: flex;
    gap: 40px;
}

ul a {
    color: white;
    text-align: center;
    text-decoration: none;
}


p {
    text-align: center;
    margin: 10px
}

.post {
    text-align: center;

}

ul li {
    margin: 10px
}
</style>
