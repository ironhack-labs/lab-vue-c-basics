<script setup>
import { ref } from 'vue';
</script>

<template>
  <nav class="navbar">
    <h1>Vue Basics</h1>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
}  
.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-links li {
  margin-right: 1rem;
}
.nav-links a {
  color: #fff;
  text-decoration: none;
}
</style>