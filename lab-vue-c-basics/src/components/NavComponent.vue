<script setup>

import burger from '../images/burger-menu.png'
import logo from '../images/logo-vue.png'


</script>

<template>

<header>
   <a href="#">
    <img :src="logo" alt="img logo" class="logo-vue">
   </a>
   <h1>Vue Bootcamp Ironhack</h1>
    <a href="#">
     <img :src="burger" alt="img menu" class="burger-menu"></a>
</header>



</template>



<style scoped>
header {
  width: 100%;
  height: 38px;
  margin-top: 0px;
  margin-bottom: 100px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  font-size: 35px;
  color: #767776;
  margin-left: 10px;
}

.logo-vue {
  width: 45px;
  height: 45px;
}

.burger-menu {
  width: 22px;
  height: 20px;
}
</style>




