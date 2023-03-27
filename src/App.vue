<script setup>
import headerSect from './components/headerSect.vue';
import footerSect from './components/footerSect.vue';
</script>

<template>
<header>
    <headerSect />
</header>

<footer>
    <footerSect />
</footer>
</template>

<style scoped>
    header {
        position: sticky;
    }
</style>
