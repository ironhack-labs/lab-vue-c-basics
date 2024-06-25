<template>
  <div id="app">
    <Navbar />
    <MathOperation />
    <ConditionalDisplay />
    <PostList />
    <ColorChanger />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import MathOperation from './components/MathOperation.vue';
import ConditionalDisplay from './components/ConditionalDisplay.vue';
import PostList from './components/PostList.vue';
import ColorChanger from './components/ColorChanger.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    MathOperation,
    ConditionalDisplay,
    PostList,
    ColorChanger,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
