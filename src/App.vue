<script setup>
import { reactive } from 'vue';
import FooterComp from './components/FooterComp.vue';
import NavBarComp from './components/NavBarComp.vue';
import BooleanComp from './components/BooleanComp.vue';
import PostComp from './components/PostsComp.vue';
import BackgroundComp from './components/BackgroundComp.vue'

const msgTwo = reactive(["Message One", "Message Two", "Message Three"]);

function showstring() {
    return msgTwo.length < 4 ? msgTwo[0] : "This array length is greater than four";
}

</script>

<template>
    <NavBarComp />
    <div class="math-expression">
      <span>{{ 2+2 }}</span>
      <br>
      <span>{{ showstring() }}</span>
    </div>
    <BooleanComp />
    <PostComp />
    <BackgroundComp />
    <FooterComp />
</template>

<style scoped>

.math-expression {
  border: 1px solid black;
  text-align: center;
  margin: 20px auto;
  padding: 15px;
  background-color: aliceblue;
}

@media (min-width: 1024px) {
 
}
</style>

