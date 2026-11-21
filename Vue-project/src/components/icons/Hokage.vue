<script setup>
import { ref } from 'vue'

const isHokage = ref(true)
</script>

<template>
  <h2>Naruto Uzumaki</h2>
  <p v-if="isHokage">Naruto est devenu Hokage du village de Konoha.</p>
  <p v-show="isHokage">Il est le héro du village de Konoha.</p>
  <button v-on:click="isHokage = !isHokage">
    Devenir Hokage
  </button>
</template>