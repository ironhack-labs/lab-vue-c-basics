<template>
    <div>
        <ul class="navBar">
            <li v-for="nav in navItems" :key="nav" class="nav-item">
                {{ nav }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const navItems = reactive(['Home', 'Projects', 'About', 'Contact Us']);
</script>

<style scoped>
.navBar {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 20px auto;
    list-style-type: none;
    background-color: #ffffff;
    border-radius: 8px;
}

.nav-item {
    display: inline-block;
    padding: 14px 20px;
    margin: 5px;
    color: white;
    background-color: #444;
    text-align: center;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.nav-item:hover {
    background-color: #555;
    cursor: pointer;
}
</style>