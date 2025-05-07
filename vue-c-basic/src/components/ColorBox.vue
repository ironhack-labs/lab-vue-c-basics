<script setup lang="ts">
import { ref } from 'vue'

const colorbox = ref('white')
</script>

<template>
  <section>
    <div :style="{ backgroundColor: colorbox }" class="box"></div>
    <button @click="colorbox = 'green'">Click me!</button>
  </section>
</template>

<style scoped>
.box {
  width: 70px;
  height: 70px;
}
</style>
