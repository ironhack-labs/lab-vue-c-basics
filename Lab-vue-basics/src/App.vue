<script setup>
import NavBar from "./components/icons/NavBar.vue";
import FootBar from "./components/icons/Footer.vue";
import Project from "./components/icons/Project.vue";
import Funct from "./components/icons/Functions.vue";
import Loop from "./components/icons/Loops.vue";
import BS from "./components/icons/BackgroundSelector.vue";
</script>

<template>
  <div>
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="./assets/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <NavBar />
      </div>
    </header>
    <div>
      <Project />
    </div>
    <div>
      <Funct />
    </div>
    <div>
      <Loop />
    </div>
    <div>
      <BS />
    </div>
    <footer>
      <div>
        <FootBar />
      </div>
    </footer>
  </div>
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
