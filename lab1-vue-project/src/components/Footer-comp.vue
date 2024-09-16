<script setup>
import {ref} from 'vue'
const footerItems = ref (['Home','About','Services','Contact'])
</script>

<template>
  <nav>
    <ul class="footer">
      <li v-for="element in footerItems" :key="element">{{element}}</li>
    </ul>
  </nav>
</template>

<style scoped>
.footer{
  display:flex;
  flex-direction: row;
  align-content: space-between;
  gap: 50px;
  list-style-type: none;
  padding-left: 200px;
  padding-top: 95%;
  padding-bottom: 50px;
  color:rgb(168, 162, 162)
}
</style>