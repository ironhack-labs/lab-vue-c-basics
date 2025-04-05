<script setup>

</script>
<template>
    <nav>
        <div class="nav-wrapper">
            <div class="logo">
                <img src="@/assets/logo.svg" alt="Logo" />
            </div>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
</template>



<style scoped>

.logo{
    max-width: 30px;
    width: 100%;
}

.nav-wrapper{
    background-color: #333;
    justify-content: space-evenly;
    align-items: center;
    padding: 8px;
}

.nav-wrapper, .nav-links{
    display: flex;
}

.nav-links{
    gap: 20px;
    li{
        list-style: none;
    }
}

</style>