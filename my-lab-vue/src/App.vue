<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

// import { ref } from "vue";
// const calculation = ref(2 + 2);

import { ref } from 'vue';

const name = ref("Valeria");

const message = () => {
    return "Hello " + name.value + "!";
}

const changeName = () => {
  name.value = "Maria"; // Change the name to "Maria"
}
const location = ref(true); 

</script>

<template>
    <div class="message">
  <!-- <p>{{ calculation }}</p> -->
  <p>{{ 2 + 2 }}</p>
    <p> {{ message() }} </p>
    <button @click="changeName" style="font-weight: 700;">Change Name</button>
    <br>
    <p v-if="location">You are in Barcelona!</p>
    <p v-else>You are in Munich.</p>
    <Navbar></Navbar>
    <Footer></Footer>
    </div>
</template>

<style scoped>
.message{
    background-color: aquamarine;
    text-align: center;
    border: 5px solid rgb(53, 1, 1);
    padding: 100px;
}

</style>
