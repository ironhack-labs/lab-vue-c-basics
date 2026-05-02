<template>
  <p v-if="isVisible">

    visible

  </p>
</template>

<script setup>
import { ref } from 'vue'

const isVisible = ref(true)

</script>