<script setup>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  import Posts from './components/Posts.vue';
</script>

<template>
  <div id="app">
    <h1>Lab Vue C Basics</h1>
    <Navbar></Navbar>
  <br><br><br>
  <main class="content">
    <Posts />
  </main>
  <br><br><br>
      <Footer></Footer>
    </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Toda la altura de la ventana */
}

main.content {
  flex: 1; /* El contenido central ocupa el espacio disponible */
  padding: 20px;
}

nav, footer {
  padding: 10px;
  background-color: #333;
  color: white;
  text-align: center;
}

nav {
  position: sticky;
  top: 0;
  z-index: 10;
}

footer {
  background-color: #444;
  margin-top: auto;
}

</style>
