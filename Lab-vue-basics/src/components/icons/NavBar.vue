<script setup>
import { ref, reactive } from "vue";
</script>

<template>
  <header>
    <div class="NavBar">
      <nav>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </nav>
    </div>
  </header>
</template>

<style scoped>
body {
  min-height: 70vw;
}
a {
  text-decoration: none;
}
li,
ul {
  list-style: none;
  display: inline-flex;
  flex-direction: column;
  min-width: 4vw;
}
</style>
