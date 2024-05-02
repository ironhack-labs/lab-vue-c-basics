<script setup>
import NavComponent from './components/NavComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import FirstComponent from './components/FirstComponent.vue'
</script>

<template>
  <main>
      <NavComponent></NavComponent>
      <FirstComponent></FirstComponent>
      <FooterComponent></FooterComponent>
  </main>
</template>

<style scoped>

#app {

}

main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  padding: 0;

}

@media (min-width: 1024px) {

}
</style>
