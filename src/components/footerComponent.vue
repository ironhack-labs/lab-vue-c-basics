<template>
    <footer>
        <img class="img__NavLogo" :src="siteLogo">
        <li class="li__navMenu">
            <ul>Projects</ul>
            <ul>Social</ul>
            <ul>Docs</ul>
        </li>
    </footer>
</template>

<script setup>
    const siteLogo = "/src/assets/logo.svg"
</script>

<style scoped>
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 5%;

    }
    img {
        width: 70px;
        margin: 30px;
    }
    li {
        display: flex;
        width: 100%;
        justify-content:space-evenly;
        color: white;
        font-weight: 400;
        margin-top: 30px;
    }
    ul {
        padding: 0px;
    }
</style>