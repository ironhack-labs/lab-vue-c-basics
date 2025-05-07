<template>
  <div id="app">
    <NavbarComponent />

    <div>{{ greetingMessage() }}</div>
    <div>2 + 2 = {{ 2 + 2 }}</div>

    <div>
      <div v-if="!longTextActive">
        <p>{{ shortText }}</p>
        <li @click="toggleText">See more</li>
      </div>

      <div v-else>
        <p>{{ longText }}</p>
        <li @click="toggleText">See less</li>
      </div>

<div>
<h3>Blog Posts</h3>
<ul>
  <li v-for="(post, index) in posts" :key="index">
    <h4>{{ post.title }}</h4>
    <p>{{ post.description }}</p>
    <p>{{ post.content }}</p>
  </li>
  </ul>

</div>

    </div>

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

const name = ref("Jennifer");
const surname = ref("Winter");

function greetingMessage() {
  return `Hello ${name.value} ${surname.value}, it's nice to see you here!`;
}

const shortText = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit...");
const longText = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit sed ut perspiciatis unde omnis iste natus error sit voluptatem dolor sit amet, consectetur adipiscing elit....");

const longTextActive = ref(false); // this makes it default to collapsed

function toggleText() {
  longTextActive.value = !longTextActive.value;
}


const posts = [
  {
    title: "Vue 3 Composition API Basics",
    description: "A quick introduction to the Composition API in Vue 3.",
    content: "The Composition API provides a more flexible way to organize logic in Vue components. It uses setup(), refs, and reactive objects to make your code cleaner and more reusable."
  },
  {
    title: "Getting Started with JavaScript",
    description: "Beginner-friendly guide to JavaScript essentials.",
    content: "JavaScript is a programming language used to make web pages interactive. It lets you update content, control multimedia, animate images, and much more."
  },
  {
    title: "Building a To-Do App with Vue",
    description: "Step-by-step tutorial on creating a to-do list using Vue.",
    content: "This project walks you through creating a dynamic to-do app using Vue.js. You'll learn how to use v-for to render lists, handle user input with v-model, and respond to actions using methods and events."
  }
]

</script>

<style scoped>
#app {
  margin: 0;
  padding: 0;
}
</style>
