<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Posts from './components/Posts.vue';
import Sum from './components/Sum.vue';
import ToggleTrue from './components/ToggleTrue.vue';
import ToggleColor from './components/ToggleColor.vue';

</script>

<template>
  <header>
    <NavBar />
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
    <Posts />
    <Sum />
    <ToggleTrue />
    <ToggleColor />
  </main>
  <Footer />
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

main {
  display: flex;
  flex-direction: row;
  gap: 100px;
  }

</style>
