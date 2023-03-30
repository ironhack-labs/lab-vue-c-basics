<script setup>
import headerSect from './components/headerSect.vue';
import footerSect from './components/footerSect.vue';
import hero from './components/hero.vue';
import { ref } from 'vue';


let footerShow = ref(true)
const newColor = ref(`background-color: blue;`)


function newStyleColorFx() {
  newColor.value = `background-color: ` + '#'+Math.floor(Math.random()*16777215).toString(16) + `;`
  console.log(newColor.value)
}

function hideElement() {
    console.log(footerShow.value)
    footerShow.value = !footerShow.value
    console.log(footerShow.value)
}
</script>

<template>
    <header>
        <headerSect />
    </header>
    <button @click="newStyleColorFx" :style="newColor">GENERATE A NEW COLOR</button>

    <hero @open-project="hideElement">
    </hero>

    <footer v-if="footerShow">
        <footerSect />
    </footer>
</template>

<style scoped>
header {
    position: sticky;
}

footer {
    position: -webkit-sticky;
}
</style>
