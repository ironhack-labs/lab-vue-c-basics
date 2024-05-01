<script setup>

</script>

<template>
  <nav>
    
      <img src='/src/assets/images/vuejs.png'>
      <ul>
        <li></li>
        <li></li>
      </ul>

  </nav>
</template>

<style scoped>

  nav {

    background-color:#283234;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;

  }

  nav ul {

    background-image: url('/src/assets/images/Vector.svg');
    background-repeat: no-repeat;
    background-size: cover;
    list-style: none;
    background-size: 30px;
    width: 30px;
    min-width: 30px;
    min-height: 30px;
    

  }

  nav img {

    width: 70px;
    height: 70px;


  }

  #nav-wrapper {
    max-width: 1440px;
  }

</style>
