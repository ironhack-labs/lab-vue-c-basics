<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import MTG from './components/MTG.vue';
import Math from './components/Math.vue';
import {ref} from 'vue'


const cambiaColor = ref(false); 
const claseDinamica = ref('')
const toogleCambiaColor = () => {
  cambiaColor.value = !cambiaColor.value;
  if(cambiaColor.value) claseDinamica.value = "backgroundColor";
  else claseDinamica.value = "";
};


</script>

<template>
  <div :class="claseDinamica">
  <Navbar></Navbar>
  <MTG></MTG>
  
  <section>
    <Math></Math>
  </section>
  
  <button @click="toogleCambiaColor">Cambiar Color</button>  

  <Footer></Footer>
</div>
</template>

<style scoped>
.backgroundColor {
  background-color: blue;
  width: 100vw;
  height: 100vh;
}

</style>