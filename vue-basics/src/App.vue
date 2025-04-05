<script setup>
import Desafio from './components/Desafio.vue';
import Footer from './components/Footer.vue';
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar />

  </header>

  <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <Desafio />
  </div>

  <section>
    <Footer />
  </section>


</template>

<style scoped>

header{
  margin: auto;
}

</style>
