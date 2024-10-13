<script setup>

import NavBar from "./components/NavBar.vue";
import Footer from './components/Footer.vue';
import { reactive, ref } from 'vue';

let showElement = ref(true);
let message = ref("Hide Element");

function showHideElement(){
  showElement = !showElement;
  if (showElement){
    message.value = "Hide Element";
  }
  else{
    message.value = "Show Element";
  }
}

let arrayData = [
  {
    title: "Film",
    description: "somthing about Movie",
    content: "Something interesting"
  },
  {
    title: "Serie",
    description: "A nice history",
    content: "Lot of Seasons"
  },
  {
    title: "Anime",
    description: "Dragon Ball is the best",
    content: "Surprise"
  },
  {
    title: "Book",
    description: "Something to read",
    content: "Lot of Pages to read"
  }
];

let bgColor = ref("grey");

function changeBGColor() {
  console.log(bgColor.value);
  bgColor.value = bgColor.value;
}

let number1 = ref(3), number2 = ref(4);

function sumTwoNumbers(number1, number2) {
  console.log(number1+number2);
  return number1 + number2;
}

let result = ref(sumTwoNumbers(number1.value, number2.value));

</script>

<template>
  <NavBar></NavBar>
  <div class="container" v-bind:style="{ 'background-color': bgColor }">
    <div class="sum-operation small-container">
      <input type="number" v-model="number1">
      <input type="number" v-model="number2">
      <button v-on:click="result = sumTwoNumbers(number1, number2)">Sum Numbers</button>
      <p>Result: {{ result }}</p>
    </div>
    <div class="small-container">
      <p v-if="showElement">Element to Hide</p>
      <button v-on:click="showHideElement()">{{ message }}</button>
    </div>
    <div class="small-container">
      <h1>List of Elements</h1>
      <p v-for="item in arrayData">{{ item.title }} - {{ item.description }} - {{ item.content }} </p>
    </div>
    <div class="small-container">
      <p>Background Color </p><input type="text" placeholder="Background Color" v-model="bgColor" />
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>
.container {
  background: #334;
}

.small-container {
  width: 600px;
  background-color: yellowgreen;
  padding: 20px;
  margin: 20px;
}

.sum-operation {
  height: 200px;
  background-color: yellow;
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
