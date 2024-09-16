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

const hasBlueBackground = ref(false);
const toggleBackgroundColor = () => {
    hasBlueBackground.value = !hasBlueBackground.value;
}

const modifyColor = ref(false);
function changeColor() {
    modifyColor.value = !modifyColor.value;

}

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
            <li v-for="post in posts" :key="post">
                {{ post.title }} <br>
                {{ post.description }} <br>
                {{ post.content }}<br><br>
            </li>
        </ul>
        <div :class="{ 'blue-background': hasBlueBackground }">
            Este div cambiará de color.
        </div>
        <button @click="toggleBackgroundColor">Cambiar Color</button>
        <button :class="modifyColor ? 'btn-color' : ''" @click="changeColor">Click me</button>
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
    justify-content: center;
    align-items: center;
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

.blue-background {
    background-color: lightblue;
}

.btn-color {
    background-color: red;
}
</style>
