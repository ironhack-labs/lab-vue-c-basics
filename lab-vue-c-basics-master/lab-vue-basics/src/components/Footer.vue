
<template>
    <div>
        <ul>
            <li v-for="footer in footerItems" :key="footer">
                {{ footer }}
            </li>
        </ul>
        <p>&copy; 2024 My Company. All rights reserved.</p>
    </div>
</template>


<script setup>
import { reactive } from 'vue';

const footerItems = reactive(['Team', 'Press', 'Services', 'Projects', 'About Us', 'Privacy Policy'])

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