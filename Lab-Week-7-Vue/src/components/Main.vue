<script setup>
import { ref } from "vue";

const name = ref("");

const generateMessage = () => {
  return `Hello, ${name.value}`;
};

const isOpen = true;

const bookLibrary = [
  {
    id: 1,
    title: "Pike Island: A Thriller",
    description: "Political Thrillers",
    content:
      "From the bestselling author of Just Stay Away comes a haunting thriller about a rising politician whose shadowy past threatens to end his career—and his future shot at the presidency.",
  },
  {
    id: 2,
    title: "A Very Bad Thing",
    description: "Crime Thrillers",
    content:
      "From New York Times bestselling author J.T. Ellison comes a taut thriller about one author at the pinnacle of her career, whose past threatens to destroy everything she has—and everyone she knows.",
  },
  {
    id: 3,
    title: "Drop Dead Sisters (The Finch Sisters Book 1)",
    description: "Sisters Fiction",
    content:
      "Three sisters reunite on a family vacation and rekindle their relationship the only way they know how—by covering each other’s tracks in a real-life murder mystery not even they can figure out.",
  },
];

const bgColor = ref("white");
const toggleColor = () => {
  bgColor.value = bgColor.value === "white" ? "lightblue" : "white";
};
</script>

<template>
  <div>
    <div :style="{ backgroundColor: bgColor }" class="color-box">
      <button @click="toggleColor">Change Background Color</button>
    </div>
    <h1>Main</h1>
    The result of 2 + 2 is: {{ 2 + 2 }}
    <p>{{ generateMessage() }}</p>
    <p v-if="isOpen">Welcome to my World</p>
    <p v-else>I'll be back</p>
    <h2>Best Seller of the month</h2>
    <ul>
      <li v-for="book in bookLibrary" :key="book.id">
        <h3>{{ book.title }}</h3>
        <i>{{ book.description }}</i>
        <p>{{ book.content }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.color-box {
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
}
</style>
