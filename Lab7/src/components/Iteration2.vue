<script setup>
import { ref, computed } from 'vue';
const printString=ref("");

const stringToLowercase = computed(() => {
  return printString.value.toLowerCase();
});
</script>

<template>
    <p>Mathematical Operation 2+2 = {{ 2+2 }}</p>
    <label for="string">String to be printed: </label>
    <input type="text" v-model="printString" id="string" placeholder="Enter a String">
    <p>{{stringToLowercase}}</p>
</template>

<style scoped>

</style>