<script> // INTERACIÓN 1 : Creacón de dos componentes
import navbar from "./components/navbar.vue";
import footerComponent from "./components/footerComponent.vue";
import interation from "./components/interation.vue";
export default {
  components: {
    navbar,
    footerComponent,
    interation,
  },

}
</script>

<template>
  <div>
    <header>
      <h1>VUE BASICS</h1>
      <navbar />
    </header>
    <interation />
    <footerComponent />
  </div>
</template>


<style>

</style>