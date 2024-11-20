<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import { ref } from 'vue';

const cambiaColor = ref(false)
const btnCambiaColor = ()=>{
    cambiaColor.value = !cambiaColor.value
};
</script>

<template>
    <div :class="cambiaColor? 'backgroundColor' : '' ">
    <NavBar/>

    <Footer/>
    <button @click="btnCambiaColor">Cambia de color</button>
</div>
</template>

<style scoped>
.backgroundColor{
    background-color: aquamarine;
    
}
</style>
