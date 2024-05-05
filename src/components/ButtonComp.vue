<script setup>
    import { ref, provide } from 'vue'
    const isLogoVisible = ref(false)

    function showButtonText(isLogoVisible) {
        return isLogoVisible ? 'Hide logo' : 'Show logo'
    }
</script>

<template>
    <button @click="isLogoVisible=!isLogoVisible" :class="{'green-bg': !isLogoVisible, 'red-bg': isLogoVisible}">{{ showButtonText(isLogoVisible) }}<img v-show="isLogoVisible" src="../assets/logo.svg"></button>
</template>

<style scoped>
    .green-bg {
        background-color: #88d888;
        border: none;
    }

    .red-bg {
        background-color: hsl(0, 49%, 65%);
        border: none;
    }
</style>