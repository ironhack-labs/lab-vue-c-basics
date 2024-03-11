<script setup>
    import { ref } from 'vue'
    const displayLogo = ref(true)

</script>

<template>
    <nav>
        <img v-if="displayLogo" src="../assets/logo.svg">
        <ul>
            <li>Item menu 1</li>
            <li>Item menu 2</li>
            <li>Item menu 3</li>
            <li>Item menu 4</li>
        </ul>
    </nav>

</template>

<style scoped>
    nav img {
        max-height: 60px;
    }

</style>