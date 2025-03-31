<template>
    <nav class="navbar">
        <ul class="navbar-list">
            <li class="navbar-item"><a href="#home">Home</a></li>
            <li class="navbar-item"><a href="#about">About</a></li>
            <li class="navbar-item"><a href="#services">Services</a></li>
            <li class="navbar-item"><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style scoped>
.navbar {
    background-color: #333;
    padding: 1rem;
}

.navbar-list {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
}

.navbar-item a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
}

.navbar-item a:hover {
    text-decoration: underline;
}
</style>