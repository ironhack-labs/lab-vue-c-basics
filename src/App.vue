<script setup>
import { ref, reactive, computed } from 'vue';
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

const numbersToSum = reactive ({
  firstNumber: 3,
  secondNumber: 2,
})

const sum = computed(() => {
  return (numbersToSum.firstNumber + numbersToSum.secondNumber).toString()
})

</script>



<template>
  <NavBar></NavBar>

  <h1>Sum of {{ numbersToSum.firstNumber }} + {{ numbersToSum.secondNumber }} is {{ sum }}</h1>

  <Footer></Footer>
</template>



<style scoped>
h1 {
    color: var(--mauve);
    font-family: "Abril Fatface", serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    margin-top: 30px;
}


</style>
