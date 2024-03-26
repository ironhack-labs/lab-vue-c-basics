<script setup>

import { ref } from 'vue'

const result = ref(0)

function sum() {
    result.value = 2 + 2
    return result.value
}
</script>

<template>
      <p> Result: {{ sum() }}</p>
</template>

<style scoped>

</style>