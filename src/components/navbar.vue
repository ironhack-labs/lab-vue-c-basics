<template>
    <header>
        <section class="header-container">
            <div class="logo-container"><img src="/src/images/ironhack_logo.png"></div>
            <div class="menu-container"><img src="/src/images/menu_logo.png"></div>
        </section>
    </header>
</template>

<style scope>

.header-container {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    border: 1px solid green;
}

.logo-container,
.logo-container img {
    width: 35px;
    height: 38px;
}

.menu-container,
.menu-container img {
    width: 22px;
    height: 20px;
}
</style>