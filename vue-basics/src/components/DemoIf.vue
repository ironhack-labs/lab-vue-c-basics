<script setup>
import {ref} from 'vue';
const showParagraph = ref(true);
</script>

<template>
  <div class="true-element">
    <p v-if="showParagraph" class="">Ahora es TRUE y me muestro!!!</p>
  </div>
</template>

<style scoped>
  .true-element{
    color: green;
    font-size: 3rem;
  }
</style>
