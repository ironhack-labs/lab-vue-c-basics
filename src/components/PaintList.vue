<script setup>
import {ref} from 'vue';
const posts=ref([
  {
    title: "Introducción a Vue 3",
    description: "Una guía básica sobre Vue 3",
    content: "Vue 3 es una mejora importante respecto a Vue 2, incluyendo la Composition API, una mayor performance y más flexibilidad en la creación de componentes."
  },
  {
    title: "Directivas en Vue",
    description: "Conocer las directivas más importantes",
    content: "Las directivas como `v-if`, `v-for` y `v-bind` son fundamentales para trabajar con Vue y nos permiten manejar el DOM de una manera reactiva y declarativa."
  },
  {
    title: "Composición API vs Options API",
    description: "Comparación entre Composition API y Options API",
    content: "La Composition API nos da una forma más flexible de organizar nuestro código comparado con la Options API, y es especialmente útil en aplicaciones más grandes y escalables."
  }
  ,
  {
    title: "Composición API vs Options API",
    description: "Comparación entre Composition API y Options API",
    content: "La Composition API nos da una forma más flexible de organizar nuestro código comparado con la Options API, y es especialmente útil en aplicaciones más grandes y escalables."
  }
]);
</script>

<template>
    <section class="container">
        <div class="posts centered-at-nucleo">
            <h2>Lista de Publicaciones</h2>
            <div class ='posts-list'>
                <div v-for="(post, index) in posts" :key="index" class="post">
                    <h3>{{ post.title }}</h3>
                    <p><strong>Descripción:</strong> {{ post.description }}</p>
                    <p><strong>Contenido:</strong> {{ post.content }}</p>
                </div>
            </div>
            
        </div>
    </section>
</template>

<style scoped>
.posts{
    h2{
        text-align: center;
    }


    width: 90%;
    padding: 10px;
    overflow: scroll;
    .posts-list{
    display: flex;
    flex-direction: column;
    
    .post{
        margin-top: 5px;
    }
}
}

</style>