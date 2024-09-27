<script setup>
import { ref } from 'vue'

// ITERATION 2
const variable1 = ref('Hello')
const variable2 = ref('Vue')

function customMessage() {
  return `${variable1.value} and ${variable2.value}!`
}

// ITERATION 3
const showElement = ref(true)
function toggleVisibility() {
  showElement.value = !showElement.value
}

// ITERATION 4
const posts = ref([
  {
    title: "Post 1",
    description: "lorem 1",
    content: "Ipsum dolor sit amet 1"
  },
  {
    title: "Post 2",
    description: "lorem 2",
    content: "Ipsum dolor sit amet 2"
  },
  {
    title: "Post 3",
    description: "lorem 3",
    content: "Ipsum dolor sit amet 3"
  }
])

// ITERATION 5
const colors = ['red', 'blue', 'forestgreen', 'pink', 'purple', 'orange']
const textColor = ref('black')

function changeColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  textColor.value = colors[randomIndex];
}

const props = defineProps({
  msg: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <!-- Iteration 2 | Display the result of a JavaScript operation in a component's HTML -->
    <p>2 + 2 is {{ 2 + 2 }}</p>
    <p>{{ customMessage() }}</p>
    <!-- Iteration 3 | Show an element only if a particular property is set to true -->
    <p v-if="showElement">This element is conditionally rendered!</p>
    <button @click="toggleVisibility">Toggle Element</button>
    <!-- Iteration 4 | Display a list of elements that are stored inside a component -->
    <div v-for="post in posts" :key="post.title" class="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <article>{{ post.content }}</article>
    </div>
    <!-- Iteration 5-->
    <p :style="{ color: textColor }">This text changes color when you click the button.</p>
    <button @click="changeColor">Change Color</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
.post {
  margin-bottom: 20px;
}
</style>
