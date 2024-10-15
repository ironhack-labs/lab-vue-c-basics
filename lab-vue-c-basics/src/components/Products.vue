<script setup>
import { ref } from 'vue'

const posts = ref([
    { title: 'Post 1', description: 'Description 1', content: 'Content 1'},
    { title: 'Post 2', description: 'Description 2', content: 'Content 2'},
    { title: 'Post 3', description: 'Description 3', content: 'Content 3'},
])

const bgColor = ref('grey')

function changeColor(){
  bgColor.value = bgColor.value === 'grey' ? 'lightblue' : 'grey'
}
</script>

<template>
  <div class="container">
    <h1> Our Products </h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
  <div :style="{backgroundColor: bgColor}">
    <p style="text-align: center; text-transform: capitalize;">Click here to see some changes! 👀✨</p>
    <button class="btn" @click="changeColor"> Magic </button>
  </div>
</template>

<style scoped>
.container {
    text-align: justify;
    background-color: #505050;
    color: black;
    padding: 20px;
    color: white;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
ul {
    list-style-type: none;
    padding: 0;
    margin: 20px;
    display: flex;
    justify-content: space-evenly;
}
.btn{
    background-color: #333;
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 2px;
}

.btn:hover{
    background-color: #555;
}
</style>