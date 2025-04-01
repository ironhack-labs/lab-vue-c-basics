<script setup>
</script>


<template>
    <nav class="navbar">
        <a href="#"><img class="logo" src="@/assets/unicorn.png"></a>
        <div class="navbar-links">
            <a href="#">HOME</a>
            <a href="#">MISSION</a>
            <a href="#">CONTACT US</a>
            <a href="#">MENU</a>
        </div>
    </nav>

</template>




<style scoped>

.navbar {
    width: 100%;
    height: auto;
    background-color: var(--light-blue);
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;

    .logo {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 40px;
        width: 40px;
    }

    .navbar-links {
        width: 60%;
        min-width: 250px;
        height: auto;
        display: flex;
        justify-content: space-between;

        a {
            font-family: 'Poppins', serif;;
            text-decoration: none;
            color: var(--blue);
            font-size: 14px;

            &:hover {
                color: var(--purple);
            }
        }
    }
}
</style>