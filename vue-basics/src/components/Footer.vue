<script setup>
defineProps({
  name: {
    type: String,   // const name = '';
    required: true,
  },
})
</script>

<template>
  <div class="footer">
    <h1 class="">hola {{ name }}</h1>

  </div>
</template>

<style scoped></style>
