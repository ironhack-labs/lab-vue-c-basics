<script setup>
import { ref } from 'vue'
import NavBar from './NavBar.vue'

const address = ref('Random Street 314, Randomland')
</script>

<template>
    <div class="footer">
        <address>
            {{ address }}
        </address>
        <div class="slot">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>