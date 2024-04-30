<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'
</script>

<template>
  <section>
    <Nav></Nav>
    <Main></Main>
    <Footer></Footer>
  </section>
</template>

<style scoped>
*, html, body{
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
</style>
