<script setup>
import Navbar from './components/Navbar.vue';
import fullnameContainer from './components/Iteration-2.vue';
import songContainer from './components/Iteration-3.vue';
import postContainer from './components/Iteration-4.vue';
import colorChanger from './components/Iteration-5.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="app">
    <Navbar />
    <fullnameContainer/>
    <songContainer/>
    <postContainer/>
    <colorChanger/>
    <Footer />
  </div>
</template>

<style scoped></style>