<template>
    <div>
        <h1>Iterations</h1>
        <h2>Iteration 1</h2>
        <h2>Iteration 2</h2>
        <p>La suma 2 + 2 es {{ 2+2 }}!</p>
        <p>{{ infoComputed }}.</p>
        <h2>Iteration 3</h2>
        <p v-if="info.age > 18">I am an adult!</p>
        <p v-else>You are a minor.</p>
        <p v-if="isFemale">I am a female human.</p>
        <h2>Iteration 4</h2>
        <p>Recently, I read the following books:</p>
        <ul>
            <li v-for="(book, index) in books" :key="index">
                {{ book.title }} by {{ book.author }} ({{ book.year }})
            </li>
        </ul>
        <h2>Iteration 5</h2>
        <button @click="changeColor">Change color</button>
        <div class="color-box" :style="{ backgroundColor: color }">
            The color of the box is {{ color }}.
        </div>
    </div>
</template>

<script setup>
//iteration 2
import { reactive, computed } from 'vue'

const info = reactive({
    name: 'Aina',
    age: '27',
    country: 'Spain',
    hobbies: ['reading', 'volei', 'hiking'],
})

const infoComputed = computed(() => {
    return `My name is ${info.name}, I am ${info.age} years old and I live in ${info.country}`
})

// iteration 3 
import { ref } from 'vue'
const isFemale = ref(true)

// iteration 4
const books = ref([
    { title: 'A little life', author: 'Hanya', year: 2022 },
    { title: 'The vegeterian', author: 'Han', year: 2024 },
    { title: 'Brujeria', author: 'Lucas', year: 2025 },
])

// iteration 5
const color = ref('lightgreen')

function changeColor() {
  // Cycle through a few colors
  const colors = ['lightgreen', 'black', 'lightgreen', 'khaki', 'pink']
  const randomIndex = Math.floor(Math.random() * colors.length)
  color.value = colors[randomIndex]
}

</script>

<style scoped>
.color-box {
  width: 300px;
  height: 150px;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 2px solid #ccc;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}
</style>