<script setup>
import { ref } from 'vue';
import Header from './components/headerComponent.vue';
import Footer from './components/footerComponent.vue';
import Hero from './components/heroComponent.vue';
import HeaderComponent from './components/headerComponent.vue';


let footerShow = ref(true)
const newColor = ref(`background-color: blue;`)


function newStyleColorEffect() {
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
    <Header>
        <HeaderComponent />
    </Header>
    <button @click="newStyleColorEffect" :style="newColor">Generate new color</button>

    <Hero @open-project="hideElement">
    </Hero>

    <Footer v-if="footerShow">
        <footerSect />
    </Footer>
</template>

<style scoped>
header {
    position: sticky;
}

footer {
    position: -webkit-sticky;
}
</style>
