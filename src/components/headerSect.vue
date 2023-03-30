<template>
    <nav>
        <img class="img__NavLogo" :src="siteLogo">
        <li class="li__navMenu">
            <ul>Projects</ul>
            <ul>Social</ul>
            <ul>Docs</ul>
        </li>
    </nav>
</template>

<script setup>
const siteLogo = "/src/assets/logo.svg"
</script>

<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
        padding: 20px 5%;
        background-color: #011E32;
    }
    img {
        width: 70px;
    }
    li {
        display: flex;
        color: white;
        font-weight: 500;
    }
</style>