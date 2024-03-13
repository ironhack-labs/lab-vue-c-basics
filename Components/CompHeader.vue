<script setup>
import { ref } from 'vue'

const displayImg = ref(true)
</script>

<template>
  <header id="#">
    <div class="container-header">
      <img v-if="displayImg" src="../src/assets/logo.svg" />  <!--Iteration 3 -->
      <div class="header-back">
        <div class="icon-container"></div>
        <nav class="nav-bar">
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
        </nav>
        <a class="btn-primario" href="">Contact Us</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
header img {
  max-height: 70px;
}

header {
  padding: 0;
  align-items: end;
  height: 100px;
  max-width: 1100px;
  margin: 0 auto;
  background-color: #e5e5e5;
  display: flex;
}

.header-back {
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-right: 25px;
}

.container-header {
  background-color: #e5e5e5;
  width: 100%;
  max-width: 1440px;
}

.nav-bar a {
  font-size: 17px;
  color: rgba(107, 112, 141, 1);
  font-weight: 500;
  text-decoration: none;
}

.nav-bar {
  gap: 60px;
  display: flex;
  height: 60px;
  align-items: center;
  padding-left: 70px;
}

.btn-primario {
  display: flex;
  text-decoration: none;
  width: 100px;
  height: 42px;
  font-size: 17px;
  background-color: #072ac8;
  font-weight: 500;
  color: white;
  align-items: center;
  justify-content: center;
  border: none;
}
</style>
