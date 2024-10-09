<script setup>
import { ref } from 'vue';
import { reactive, computed } from 'vue'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';
import articles from './components/articles.vue';


const calculation = 2+2;
</script>

<template>

  <header>
    <!-- simple calculation and variable display-->
    <p>The sum is: {{ calculation }}</p>
  </header> <br>

  <Main></Main>
  <articles></articles> <br>
  <Navbar></Navbar>
  <Footer></Footer>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

</style>
