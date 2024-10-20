
//------------------  SCRIPT ------------------------

<script setup>

import { ref, computed } from 'vue';

const nums = ref({
  num: [
    '2',
    '3'
  ]
})

const sumNums = computed(() => {
  return Number(nums.value.num[0]) + Number(nums.value.num[1]);
})



</script>

//------------------- TEMPLATE -----------------------

<template>

<h1>The Sum is: {{ sumNums }}</h1>


</template>

//------------------- STYLE --------------------------

<style scoped>


</style>