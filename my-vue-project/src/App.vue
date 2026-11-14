<script setup>
import HeaderComponet from "./components/HeaderComponet.vue";
import FooterComponent from "./components/FooterComponent.vue";
import LabBasics from "./components/LabBasics.vue";
</script>

<template>
  <HeaderComponet />
  <main id="inicio">
    <h1>Bienvenidos a Vue!</h1>
    <LabBasics />
  </main>
  <FooterComponent />
</template>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  color: #20352d;
}
main {
  max-width: 900px;
  margin: auto;
  padding: 24px;
}
section {
  margin-bottom: 32px;
}
button,
input {
  font: inherit;
  padding: 8px 12px;
}
button {
  cursor: pointer;
}
input {
  display: block;
  margin: 8px 0;
}
a {
  color: inherit;
}
</style>
