
<template>
    <div>
        <ul>
            <li v-for="nav in navItems" :key="nav">
                {{ nav }}
            </li>
        </ul>
    </div>
</template>


<script setup>
import { reactive } from 'vue';


const navItems = reactive(['Home', 'Projects', 'About', 'Contact Us'])

</script>


<style scoped>

    ul {
        width: 100%;
        margin: 20px auto;
    }

    li {
        display: inline;
        width: 80%;
        height: 100px;
        background: #ddd;
        color: blue;
        padding: 10px;
        margin: 5px;
    }

</style>