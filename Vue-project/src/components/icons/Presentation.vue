<script setup>
import { ref, computed } from 'vue'

const firstName = ref('Naruto')
const lastName = ref('Uzumaki')
const age = ref(16)

const presentation = computed(() => {
  return `${firstName.value} ${lastName.value} a ${age.value} ans`
})
</script>

<template>
  <p>2 + 2 = {{ 2 + 2 }}</p>
  <p>{{ presentation }}</p>
</template>