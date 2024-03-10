<script setup>
import { reactive } from 'vue'
const posts = reactive(
  [
    {
      id: 1,
      title: "Healthy Recipes",
      description: "Delicious dishes",
      content: "Try new meals!"
    },
    {
      id: 2,
      title: "Travel Guide",
      description: "Explore the world",
      content: "Adventure awaits!"
    },
    {
      id: 3,
      title: "Tech Updates",
      description: "Latest gadgets",
      content: "Stay informed!"
    },
    {
      id: 4,
      title: "Fitness Tips",
      description: "Workout advice",
      content: "Stay active!"
    }
  ]);

console.log(posts)

</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <h3> {{ post.title }} </h3>
      <h4> {{ post.description }} </h4>
      <p> {{ post.content }}</p>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
}
li {
  background-color: aquamarine;
  margin: 3rem;
  padding: 3rem;
  text-align: center;
}
h3, h4 {
  font-weight: bold;
  margin-bottom: 1rem;
}
h3 {
  color: purple;
  font-size: 2rem;
}
p::before, p::after {
  content: " === "
};

</style>