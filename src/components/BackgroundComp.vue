<script setup>
import { ref } from "vue";

const yellowBG = ref(false);

function changeClass() {
    yellowBG.value = !yellowBG.value;
}

</script>

<template>
  <div :class="`${yellowBG === true ? 'yellow-bg' : ''}`">When you click the button below the background of this div will change.</div>
  <button @click="changeClass()">Change Background</button>
</template>

<style scoped>
div {
    margin: 20px auto;
    background-color: azure;
    padding: 10px;
    border: 1px solid gainsboro;
}

div.yellow-bg {
    background-color: gold;
}

button {
  background-color: blue;
  border: none;
  color: aliceblue;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
}

</style>