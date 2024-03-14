<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />

    <!-- Mostrar el resultado de una operación matemática -->
    <div>
      Resultado de 2 + 2: {{ 2 + 2 }}
    </div>

    <!-- Llamar a la función generateString() -->
    <div>
      Cadena generada: {{ generateString() }}
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  methods: {
    generateString() {
      return '¡Hola, mundo!';
    }
  }
}
</script>

<style scoped>

</style>