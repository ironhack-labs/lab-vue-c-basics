<template>
  <div id="app">
    <Navbar />
    <MathDisplay />
    <ConditionalDisplay />
    <PostList />
    <BackgroundColorChanger />
    <router-view />
    <Footer />
  </div>
</template>


<script setup>
import Navbar from './components/NavBarComponent.vue';
import Footer from './components/FooterComponent.vue';
import MathDisplay from './components/MathDisplay.vue';
import ConditionalDisplay from './components/ConditionalDisplay.vue';
import PostList from './components/PostList.vue';
import BackgroundColorChanger from './components/BackgroundColorChanger.vue';
</script>

<style>

</style>

