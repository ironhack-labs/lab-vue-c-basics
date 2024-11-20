<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';


import { ref, computed } from "vue";

const first = ref("Ana");
const last = ref("Banana");
const firstName = computed(() => first.value);
const lastName = computed(() => last.value);
</script>

<template>
<div id="app">
  <Navbar></Navbar>
<!--Insert a mathematical operation inside your HTML-->
  <h1>{{ 2 + 2 }}</h1> <br>
  <h3>{{ firstName + " " + lastName }}</h3>
  <Footer></Footer>
</div>
</template>

<style scoped>

</style>