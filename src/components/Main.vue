<script setup>
import {ref} from 'vue'

const nombre =ref('');
const mensajePersonalizado=() =>{
    return `Hola ${nombre.value}, bienvenido!!!!!`
}
const mostrarMensaje = ref(true)
const posts = ref([
  {
    title: 'Primer elemento del array',
    description: 'Descripción del primer elemento del array',
    content: 'Contenido del primer elemento del array.'
  },
  {
    title: 'Segundo elemento del array',
    description: 'Descripción del segundo elemento del array',
    content: 'Contenido del segundo elemento del array.'
  },
  {
    title: 'Tercer elemento del array',
    description: 'Descripción del tercer elemento del array',
    content: 'Contenido del tercer elemento del array.'
  }
])
const fondoAzul = ref(false)
function cambiarFondo() {
  fondoAzul.value = !fondoAzul.value
}
</script>
<template>
    <main  :style="{ backgroundColor: fondoAzul ? '#90caf9' : '#fff' }">
        <button @click="cambiarFondo">
          Cambiar color de fondo
        </button>
        <p>El resultado de 2 + 2 es: {{ 2 + 2 }}</p>
   <p>  {{ mensajePersonalizado() }}</p>
 <p v-if="mostrarMensaje">¡Este mensaje solo se muestra si mostrarMensaje es true!</p>
        <p v-else>¡Este mensaje se muestra si mostrarMensaje es false!</p>
        <h2>Elemento del array</h2>
        <ul>
          <li v-for="(post, index) in posts" :key="index">
            <h3>{{ post.title }}</h3>
            <p><strong>{{ post.description }}</strong></p>
            <p>{{ post.content }}</p>
          </li>
        </ul>
</main>
</template>