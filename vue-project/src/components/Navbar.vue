<template>
  <nav class="navbar">
    <h2>My Vue App</h2>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Articles</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<script setup>
// Hier ist aktuell keine Logik notwendig
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
}
.navbar ul {
  display: flex;
  list-style: none;
  gap: 15px;
}
.navbar a {
  color: white;
  text-decoration: none;
}
</style>