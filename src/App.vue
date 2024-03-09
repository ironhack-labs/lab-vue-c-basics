<script setup>
import { reactive, ref } from 'vue';
import FooterComp from './components/FooterComp.vue';
import NavBarComp from './components/NavBarComp.vue';
import BooleanComp from './components/BooleanComp.vue';
import PostComp from './components/PostsComp.vue';
import BackgroundComp from './components/BackgroundComp.vue'

const msgTwo = reactive(["Message One", "Message Two", "Message Three"]);
const showDiv = ref(true);

function showstring() {
    return msgTwo.length < 4 ? msgTwo[0] : "This array length is greater than four";
}

function showDivFunc() {
  showDiv.value = !showDiv.value;
}

</script>

<template>
    <NavBarComp />
    <div class="math-expression">
      <span>{{ 2+2 }}</span>
      <br>
      <span>{{ showstring() }}</span>
    </div>
    <BooleanComp  v-show="showDiv"/>
    <button @click="showDivFunc()" :class="`${showDiv ? 'show' : 'no-show'}`">{{showDiv ? "Hide Div" : "Show Div"}}</button>
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

button.no-show {
  background-color: blue;
  border: none;
  color: aliceblue;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
}

button.show {
  background-color: rgb(255, 132, 0);
  border: none;
  color: aliceblue;
  font-weight: bold;
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
}


@media (min-width: 1024px) {
 
}
</style>

