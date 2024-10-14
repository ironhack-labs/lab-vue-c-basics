<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';
import Posts from './components/Posts.vue';

const num1 = ref(5);
const num2 = ref(10);

function operationResult() {
  return `The result of ${num1.value} + ${num2.value} is ${num1.value + num2.value}`;
}


const showMessage = ref(true);

function toggleMessage() {
  showMessage.value = !showMessage.value;
}




const posts = ref([
  {
    title: "First Post",
    description: "This is the first post",
    content: "Content of the first post."
  },
  {
    title: "Second Post",
    description: "This is the second post",
    content: "Content of the second post."
  },
  {
    title: "Third Post",
    description: "This is the third post",
    content: "Content of the third post."
  }
]);


const bgColor = ref('lightblue');

function changeColor() {
  bgColor.value = bgColor.value === 'lightblue' ? 'lightcoral' : 'lightblue';
}

</script>

<template>

  <div>
    <p> 2 + 2 = {{ 2 + 2 }} </p>
    <p>{{ operationResult() }}</p>
  </div>


  <div>
    <p v-if="showMessage">This message is visible!</p>
    <button @click="toggleMessage">Toggle Message</button>
  </div>

    <div v-for="post in posts" :key="post.title" class="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <div>{{ post.content }}</div>
    </div>

    <div>
    <div :style="{ backgroundColor: bgColor }" class="color-box">
      <p>The background color is: {{ bgColor }}</p>
    </div>
    <button @click="changeColor">Change Color</button>
  </div>
  
</template>

<style scoped>

.color-box {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
