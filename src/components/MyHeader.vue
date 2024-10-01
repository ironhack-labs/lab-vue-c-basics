

<script setup></script>

<template>
  <header class="container">
    <nav  class="centered-at-nucleo" >
      <div class="nav-logo">
        <img src="" alt="logo" />
      </div>
      <div class="nav-links">
        <a href="">link1</a>
        <a href="">link2</a>
        <a href="">link3</a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.container {
  nav {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-logo {
      width: 100px;
    }
    .nav-links {
      display: flex;
      justify-content: space-between;
      gap: 50px;
    }
  }
}

</style>
