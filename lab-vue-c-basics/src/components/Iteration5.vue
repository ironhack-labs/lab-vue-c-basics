<template>
  <div class="container" :class="changeColor ? 'is-red' : 'is-orange'">
    <h1>Toggle Between 2 colors using a ternary operator</h1>
    <button @click="changeColorFunction">Click Me to toggle color</button>
  </div>

  <div class="container">
    <p :class="clickedButton && 'backgroundColor'">This is a footer</p>
    <button @click="click()">CLICK ME!</button>
  </div>

  <div class="container" :style="{ backgroundColor: color }">
    <h1>Change background color randomly with a button</h1>
    <button @click="color = getRandomColor()">Change color</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

//Iteration 1 - ternary operators
const changeColor = ref(true);
function changeColorFunction() {
  changeColor.value = !changeColor.value;
}

//Iteration 2 - Using a && logical
const clickedButton = ref(false);

function click() {
  clickedButton.value = !clickedButton.value;
}

//Iteration 3 - Using a function to generate a random hex code
let color = ref("orange");
const getRandomColor = () => {
  console.log("clicked");
  const hexLetters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
};
</script>

<style scoped>
.container {
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
  color: black;
}

.is-red {
  background-color: red;
}
.is-orange {
  background-color: orange;
}

.backgroundColor {
  background-color: blue;
  color: white;
}
</style>
