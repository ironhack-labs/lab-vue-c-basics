<script >
import Navbar from './components/NavBar.vue'
import Footer from './components/AppFooter.vue'
import MathMessage from './components/MathMessage.vue'
import InteractiveDemo from './components/InteractiveDemo.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    MathMessage,
    InteractiveDemo
  }
}
</script>

<template>
  <div id="app">
    <Navbar />
    <main>
      <h1>Bienvenido a mi app Vue</h1>
      <MathMessage/>
      <InteractiveDemo/>
    </main>
    <Footer />
  </div>
</template>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
