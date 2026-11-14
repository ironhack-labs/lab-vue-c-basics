<script setup>
const names = ["ana", "Beatriz", "Carlos", "David", "Elena"];
</script>

<template>
  <ul>
    <li v-for="name in names">
      {{ name }}
    </li>
  </ul>
</template>
