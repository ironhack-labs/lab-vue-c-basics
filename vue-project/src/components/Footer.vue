<template>
    <div class="footer">
        <ul class="footer-nav">
            <li v-for="footer in footerItems" :key="footer" class="footer-item">
                {{ footer }}
            </li>
        </ul>
        <div class="footer-divider"></div>
        <p class="copyright">&copy; 2024 My Company. All rights reserved.</p>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const footerItems = reactive(['Team', 'Press', 'Services', 'Projects', 'About Us', 'Privacy Policy']);
</script>

<style scoped>
.footer {
    text-align: center;
    margin: 10px;
    padding: 20px;
    background-color: #f0f0f0;
    border-top: 1px solid #ccc;
}

.footer-nav {
    list-style-type: none;
    padding: 0;
    margin: 10px 5px;
}

.footer-item {
    display: inline-block;
    margin: 5px 10px;
    padding: 8px 16px;
    background-color: #ddd;
    color: #333;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.footer-item:hover {
    background-color: #ccc;
    cursor: pointer;
}

.footer-divider {
    height: 1px;
    background-color: #ccc;
    margin: 10px 0;
}

.copyright {
    font-size: 14px;
    color: #666;
}
</style>