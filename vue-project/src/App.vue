<script setup>
import navbarSection from "./components/Navbar.vue";
import mainSection from "./components/Main.vue";
import footerSection from "./components/Footer.vue";
</script>

<template>
  <header>
    <navbarSection />
  </header>

  <main>
    <mainSection />
  </main>

  <footer>
    <footerSection />
  </footer>
</template>

<style scoped>
header,
main,
footer {
  margin-bottom: 75px;
  width: 100%;
}
</style>
