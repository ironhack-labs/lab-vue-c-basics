<script setup>
defineProps({ backgroundColor: String })
</script>

<template>
    <h1 :style="{ 'background-color': backgroundColor }">navbar component</h1>
</template>

<style scoped>
h1 {
    background-color: red;
    text-align: center;
    margin-bottom: 1rem;
    padding: 1rem;
    color: white;
}
</style>