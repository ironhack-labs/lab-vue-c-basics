<script setup>
import headerSect from './components/headerSect.vue';
import footerSect from './components/footerSect.vue';
import hero from './components/hero.vue';
</script>

<template>
<header>
    <headerSect />
</header>

<hero />

<footer>
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
