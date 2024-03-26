<script setup>
import { ref } from 'vue'

const showElement = ref(true);

function toggleElement() {
  showElement.value = !showElement.value;
}

</script>

<template>
  <div>
    <button @click="toggleElement">Toggle on True</button>
<span>
      <p v-if="showElement">showElement: True</p>
      <p v-else>showElement: False</p>
    </span>  </div>
</template>

<style scoped>

</style>