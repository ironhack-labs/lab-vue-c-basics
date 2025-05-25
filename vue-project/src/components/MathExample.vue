
<template>
  <div>
    <p>2 + 2 = {{ 2 + 2 }}</p>
    <p>{{ customMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('Ironhacker')
function getGreeting() {
  return `¡Hola, ${name.value}!`
}
const customMessage = getGreeting()
</script>