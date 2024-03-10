<script setup>
const condition = true
</script>

<template>
    <h1 v-show="condition">The condition is True</h1>
    <h1 v-show="!condition">The condition is False</h1>
</template>