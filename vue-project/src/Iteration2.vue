<template>
  <div>
    <p>{{ x }} + {{ y }} = {{ sum() }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const x = ref(2)
const y = ref(2)

function sum() {
  return x.value + y.value
}
</script>