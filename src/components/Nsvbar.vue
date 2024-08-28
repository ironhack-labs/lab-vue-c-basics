<script setup>
</script>

<template>
 <div class="container">
    <div class="app-logo">
        <h4>Logo</h4>
    </div>
    <div class="menu-links">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
        </ul>
    </div>
 </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
.menu-links ul {
    display: flex;
    gap: 10px;
    list-style: none;
}
</style>
