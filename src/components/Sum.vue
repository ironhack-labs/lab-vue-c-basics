<script setup>
import { reactive, computed } from 'vue';
// ITERATION 2 SIMPLE SUM
const numbersToSum = reactive ({
  firstNumber: 3,
  secondNumber: 2,
})

const sum = computed(() => {
  return (numbersToSum.firstNumber + numbersToSum.secondNumber).toString()
})
</script>


<template>
    <h1>{{ numbersToSum.firstNumber }} + {{ numbersToSum.secondNumber }} = {{ sum }}</h1>
</template>


<style scoped>
h1 {
    color: var(--mauve);
    font-family: "Abril Fatface", serif;
    font-weight: 400;
    text-align: center;
    margin-top: 30px;
}
</style>