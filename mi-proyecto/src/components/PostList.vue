<template>
    <div>
      <h1>Lista de Publicaciones</h1>
      <!-- Botón para cambiar el color de fondo -->
    <button @click="changeBackgroundColor">Cambiar Color de Fondo</button>

<div :style="{ backgroundColor: backgroundColor }" class="background-box">
  <p>Este es un área cuyo color de fondo cambiará.</p>
</div>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <h2>{{ post.title }}</h2>
          <p><strong>Descripción:</strong> {{ post.description }}</p>
          <p>{{ post.content }}</p>
        </li>
      </ul>
    </div>
    <div>
    <!-- Formulario para agregar un nuevo post -->
    <form @submit.prevent="addPost">
      <div>
        <label for="title">Título:</label>
        <input v-model="newPost.title" required placeholder="Introduce el título" />
      </div>
      <div>
        <label for="description">Descripción:</label>
        <input v-model="newPost.description" required placeholder="Introduce la descripción" />
      </div>
      <div>
        <label for="content">Contenido:</label>
        <textarea v-model="newPost.content" required placeholder="Introduce el contenido"></textarea>
      </div>
      <button type="submit">Publicar</button>
    </form>

    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Crear una lista de publicaciones
  const posts = ref([
    {
      title: 'Publicación 1',
      description: 'Descripción de la publicación 1',
      content: 'Este es el contenido de la primera publicación.'
    },
    {
      title: 'Publicación 2',
      description: 'Descripción de la publicación 2',
      content: 'Este es el contenido de la segunda publicación.'
    },
    {
      title: 'Publicación 3',
      description: 'Descripción de la publicación 3',
      content: 'Este es el contenido de la tercera publicación.'
    }
  ])

  // Crear un objeto para el nuevo post
const newPost = ref({
  title: '',
  description: '',
  content: ''
})
// Función para agregar un nuevo post
const addPost = () => {
  // Validar que todos los campos estén llenos
  if (newPost.value.title && newPost.value.description && newPost.value.content) {
    posts.value.push({ ...newPost.value }) // Agregar el nuevo post a la lista
    newPost.value = { title: '', description: '', content: '' } // Limpiar el formulario
  }
}
// Crear una variable para el color de fondo
const backgroundColor = ref('white')

// Función para cambiar el color de fondo
const changeBackgroundColor = () => {
  // Cambiar el color de fondo a un color aleatorio
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  backgroundColor.value = colors[Math.floor(Math.random() * colors.length)];
}

  </script>
  
  <style scoped>
  /* Estilos opcionales aquí */
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
  }

  form {
  margin-bottom: 20px;
}

input, textarea {
  display: block;
  margin-bottom: 10px;
  width: 100%;
}
  </style>
  