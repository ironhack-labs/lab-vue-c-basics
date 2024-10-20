
//------------------  SCRIPT ------------------------

<script setup>
import { ref } from "vue";

const items =  ref([
  { id: 1, name: 'Cappuccino', description: 'freaking Cappucino', content: 'guess what, its cappucino'},
  { id: 2, name: 'Espresso', description: 'freaking Espresso', content: 'guess what, its Espresso'},
  { id: 3, name: 'Latte', description: 'freaking Latte', content: 'kriegst ne Latte'},
]);


</script>

//------------------- TEMPLATE -----------------------

<template>
    <ul>
 <li v-for="item in items" :key="item.id">
{{ item.name }}<br>
{{ item.description }}<br>
{{ item.content }}<br><br>
 </li>
 </ul>
</template>

//------------------- STYLE --------------------------

<style scoped>


</style>