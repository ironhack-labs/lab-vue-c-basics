<script setup>

import { ref, reactive } from 'vue';

const lista = reactive({
  name: 'Lista de ingredientes',
  ingredientes: [
    'arroz',
    'Huevos',
    'Tomates',
    'Leche',
    'Carne',
    'Pasta',
    'Verduras',
    'Brocoli',
  ]
})

const mensajeIngredientes = () => {
  return lista.ingredientes.map((ingrediente, index) => {
    return `${index + 1} - ${ingrediente}`
  })
}

const awesome = ref(false);
const toggleAwesome = () => {
  awesome.value = !awesome.value;
}

</script>

<template>
    <section>

        <h2>Esta es la sección de suma = {{ 2 +2 }}</h2>

        <h2>Esta es la sección de listas</h2>
        <h3>{{ lista.name }}</h3>
        <!-- <h3>{{ mensajeIngredientes()  }}</h3> -->

        <ul>
            <li v-for="(ingrediente, index) in lista.ingredientes" :key="index">
                {{ index + 1 }} - {{ ingrediente }}
            </li>
        </ul>

        <h2 v-if="awesome" class="awesome">You are Awesome</h2>
        <h2 v-else="awesome" class="awesome">You are NOT Awesome</h2>
        <button @click="toggleAwesome">Show me really what you are</button>


    </section>
</template>



<style lang="css" scoped>

section{
    margin-top: 20px;
    padding: 20px;

}

.awesome{
    color: #ff0000;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
}

</style>