<script setup>
const navBarElements = ['Home', 'About', 'Contact']
</script>

<template>
  <section class="header">
    <nav>
      <ul class="navbar">
        <li v-for="element in navBarElements" :key="element">{{ element }}</li>
      </ul>
    </nav>
  </section>
</template>

<style scoped>
.header {
  position: relative;
  max-width: 100%;
  padding: 10px;
  background-color: rgb(200, 220, 226);
  font-size: 14px;
  color: grey;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
}
.navbar li {
  list-style: none;
  cursor: pointer;
}
.navbar li:hover {
  color: blue;
}
</style>
