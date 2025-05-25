<template>
  <div :style="{ backgroundColor: bgColor }" class="color-box">
    <p>¡Haz clic para cambiar el color!</p>
    <button @click="changeColor">Cambiar color</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const bgColor = ref('lightblue')

function changeColor() {
const colors = [
    'lightblue',
    'lightgreen',
    'lightcoral',
    'lightyellow',
    'lightpink',
    'lightgray',
    'lightsalmon',
    'lightseagreen'
]
const currentIndex = colors.indexOf(bgColor.value)
bgColor.value = colors[(currentIndex + 1) % colors.length]
}
</script>

<style scoped>
.color-box {
  padding: 20px;
  margin: 10px 0;
  transition: background 0.3s;
}
</style>