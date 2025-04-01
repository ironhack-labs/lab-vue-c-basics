<script setup>
import NavBar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import DemoIf from '@/components/DemoIf.vue';
import Posts from '@/components/PostList.vue';
import Button from '@/components/Button.vue';
import { ref } from 'vue';
const myString = ref('hello ')
</script>

<template>
  <div class="wrapper">
    <header>
      <NavBar />
    </header>

    <main>
      <div>
        <h2>Result of 2 + 2: {{ 2 + 2 }}</h2>
        <p>{{ myString }}</p>
      </div>
      <div class="show-if-true">
        <DemoIf />
      </div>
      <div class="post-list">
        <Posts />
      </div>
      <div class="one-button">
        <Button />
      </div>
    </main>
    <footer>
      <div class="footer">
        <Footer name="Sophia" />
      </div>
    </footer>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
