<script setup>
</script>

<template>
<div class="footer">
        <div>
            <img class="logo" src="@/assets/images/Ironhack_logo.svg">
            <img class="menu" src="@/assets/images/Burger_menu.svg">
        </div>
    </div>
</template>

<style scoped>
    
.footer{
    max-width: 1400px;
    height: 38px;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: var(--vt-c-indigo);
}
.footer div{
    display: flex;
    justify-content: space-between;
}
.logo{
    width: 35px;
    height: 38px;
    top: 20px;
    left: 30px;
    
}
</style>