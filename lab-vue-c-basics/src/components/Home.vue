<script setup>
import { ref } from 'vue'

const userName = ref('Ionela')
</script>

<template>
  <div class="container">
    <h1 style="text-align: center;">Welcome {{ userName }} to Vue Basics!</h1>
    <h3>🎯 Testing basics operations like:</h3>
    <p>🥽 The result of 2 + 2 is: {{ 2 + 2 }}</p>
    <p>🥽 Another example is 6 * 60 equals to {{ 6 * 10 }}</p>
    <p>🥽 126 / 4 = {{ 126 / 4 }}</p>
  </div>
</template>

<style scoped>
.container {
    text-align: justify;
    background-color: #afafaf;
    color: black;
    padding: 20px;
    color: white;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
</style>