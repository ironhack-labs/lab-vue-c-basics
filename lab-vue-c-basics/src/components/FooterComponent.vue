<script setup>

import { ref } from 'vue'
const publicaciones = ref([
  {
    id: 1,
    titulo: 'Introducción a Vue',
    descripcion: 'Una breve introducción al framework Vue.js',
    contenido: 'Vue es un framework para construir interfaces de usuario'
  },
  {
    id: 2,
    titulo: 'Ironhack',
    descripcion: 'Ironhack es un bootcamp de programación',
    contenido: 'Ironhack ofrece cursos intensivos en desarrollo web y UX/UI...'
  },
  {
    id: 3,
    titulo: 'Reactividad en Vue',
    descripcion: 'Cómo funciona el sistema reactivo de Vue',
    contenido: 'Vue utiliza proxies y refs para manejar la reactividad de datos...'
  }
])
const seleccionada = ref(null)

</script>

<template>

<h2>Lista de publicaciones</h2>

<div v-for="publicacion in publicaciones" :key="publicacion.id" class="publicacion":class="{ activa: seleccionada === publicacion.id }"
@click="seleccionada = publicacion.id">
    
  <h3>{{ publicacion.titulo }}</h3>
  <p>{{ publicacion.descripcion }}</p>
  <p>{{ publicacion.contenido }}</p>

</div>


</template>

<style scoped>


.publicacion.activa {
  background-color: #d3d3d3;
}
h2 {
  text-align: center;
  margin-top: 50px;
    font-size: 35px;
font-weight: bold;
}

.publicacion {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 80%;
  margin: 20px auto;
  text-align: center;
}

.publicacion h3 {
  font-size: 24px;
  margin-bottom: 10px;
}
 

</style>