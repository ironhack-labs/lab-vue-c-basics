<script setup>
import { ref } from 'vue'
defineProps({
  showElement: Boolean
})

const showElement = ref(true)
const toggleVisibility = () => {
  showElement.value = !showElement.value
}
</script>

<template>
  <button @click="toggleVisibility">Toggle Visibility</button>
  <p v-if="showElement">This element is visible when showElement is true.</p>
</template>
<style scoped></style>
