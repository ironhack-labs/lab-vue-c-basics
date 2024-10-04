<script setup>
import Navbar from './components/Navbar.vue'   /* 1. Importa Navbar */ 
import Footer from './components/Footer.vue'   /* 2. Importa Footer */
import { ref, computed } from 'vue'

/* -- Iteración 2.2 */
// Variables reactivas 
const nombre = ref('Gerard')
const apellido = ref('Borràs')

// Función para generar el saludo completo 
const obtenerSaludo = () => {
  return `Hola, mi nombre es ${nombre.value} ${apellido.value}.`

/* Iteración 3 */ 

// Variable booleana reactiva
const mostrarMensaje = ref(false)

// Función para alternar la visibilidad del mensaje
const alternarMensaje = () => {
  mostrarMensaje.value = !mostrarMensaje.value
}
}
// Iteracción 4 Lista de publicaciones 
const publicaciones = ref([
  {
    id: 1,
    titulo: 'Primera Publicación',
    descripcion: 'Descripción de la primera publicación.',
    contenido: 'Contenido detallado de la primera publicación.'
  },
  {
    id: 2,
    titulo: 'Segunda Publicación',
    descripcion: 'Descripción de la segunda publicación.',
    contenido: 'Contenido detallado de la segunda publicación.'
  },
  {
    id: 3,
    titulo: 'Tercera Publicación',
    descripcion: 'Descripción de la tercera publicación.',
    contenido: 'Contenido detallado de la tercera publicación.'
  }
])

// Iteración 5 
// Función para cambiar el color de fondo
const cambiarColorFondo = (publicacion) => {
  // Genera un color aleatorio
  const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16)
  publicacion.fondo = colorAleatorio
}
</script>

<template>
<div id="app-container">
  <Navbar></Navbar>
  <main class="content">
      <h2>Iteración 2</h2><br>
      <h3>Sección 2.1</h3>
      <p>El Resultado de 2 + 2: {{ 2 + 2 }}</p><br> <!-- Iteración 2.1 -->
      <h3>Sección 2.2</h3>
      <p>{{ obtenerSaludo() }}</p><br> <!-- Uso de la función para mostrar la cadena -->
      <h3>Iteracción 3</h3><br>
      <!-- Botón para alternar la visibilidad del mensaje -->
    <button @click="alternarMensaje">Mostrar/Ocultar Mensaje</button>
    
  <!-- Elemento condicional -->
    <p v-if="mostrarMensaje">Este mensaje se muestra solo si 'mostrarMensaje' es true.</p>
     <!-- Lista de publicaciones -->
      <h2>Iteracción 4</h2><br>
     <div v-for="publicacion in publicaciones" :key="publicacion.id" class="publicacion" :style="{ backgroundColor: publicacion.fondo }">
      <h3>{{ publicacion.titulo }}</h3>
      <p><strong>{{ publicacion.descripcion }}</strong></p>
      <p>{{ publicacion.contenido }}</p>
      <button @click="cambiarColorFondo(publicacion)">Cambiar Color de Fondo</button>
    </div>
  </main>

<Footer></Footer>
</div>
</template>

<style scoped>
#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Para que ocupe toda la altura de la ventana */
}


/* Área de contenido principal que expande para llenar el espacio disponible */
.content {
  flex: 1;
  padding: 20px;
  background-color: #ce7272; /* Color de fondo para distinguir el área de contenido */
}
button {
  margin: 1rem 0;
  padding: 0.5rem 1rem;
}

.publicacion {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>
