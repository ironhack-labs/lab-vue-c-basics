<!-- App.vue -->
<template>
  <div id="app">
    <Navbar />
    <div class="space">
      <p>The result of 2 + 2 is: {{ 2 + 2 }}</p>
      <p>{{ getGreetingMessage() }}</p>

      <br/>
      <p v-if="isVisible">This element is conditionally visible based on the boolean value!</p>
      <button @click="isVisible = !isVisible">
      Toggle Element Visibility
    </button>
    <br/>
    <br/>
    <div v-for="(post, index) in posts" :key="index" class="post">
      <h2>{{ post.title }}</h2>
      <p><strong>Description:</strong> {{ post.description }}</p>
      <p>{{ post.content }}</p>
    </div>
    <br/>
    <br/>
    <button @click="toggleHighlight">Toggle Highlight</button>
    
    <!-- Bind a class based on the isHighlighted value -->
    <div :class="{ highlighted: isHighlighted }" class="box">
      This box's background color will change dynamically!
    </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from './components/Nsvbar.vue';
import Footer from './components/Footer.vue';


const isVisible = ref(true);
const name = ref('Alice');
const timeOfDay = ref('morning');

const getGreetingMessage = () => {
  return `Good ${timeOfDay.value}, ${name.value}!`;
};

const posts = ref([
  {
    title: 'First Post',
    description: 'This is the description for the first post.',
    content: 'This is the content of the first post.',
  },
  {
    title: 'Second Post',
    description: 'This is the description for the second post.',
    content: 'This is the content of the second post.',
  },
  {
    title: 'Third Post',
    description: 'This is the description for the third post.',
    content: 'This is the content of the third post.',
  },
]);

const isHighlighted = ref(false);

// Method to toggle the CSS class
const toggleHighlight = () => {
  isHighlighted.value = !isHighlighted.value;
};
</script>

<style>
#app {
  height: 100vh;
  width: 100%;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
}
.space {
  margin-top: 50px;
  text-align: center;
}
.highlighted {
  background-color: yellow;
}
</style>
