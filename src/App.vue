<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Navbar from './components/Navbar.vue';
import TheFooter from './components/TheFooter.vue';

import { reactive, ref } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const dog = reactive({
  name: 'Tobby',
  color: 'brown'
})

const ppl = ref(["Alex", "Joan", "Marc", "Ignasi", "Albert"]);

function getCurrentAuthorName(objAuthor) {
  return `The author's name is ${objAuthor.name}`
}

function onClick(){
  const body = document.getElementById("app");
  body.setAttribute("style", "background-color:red");
}

</script>

<template>
  <Navbar></Navbar>

  <div>2 + 2 = {{ 2+2 }}</div>
  <div>{{ getCurrentAuthorName(author) }}</div>
  <div v-if="dog.color === 'brown'">The dog is brown.</div>
  <div>
    List of persons
    <ul>
      <li v-for="p in ppl">{{ p }}</li>
    </ul>
  </div>
  <div><a href="#" class="btn" @click="onClick">Change color</a></div>

  <TheFooter></TheFooter>

</template>

<style scoped>

.btn {
  background-color: red;
  padding: 10px 20px;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
