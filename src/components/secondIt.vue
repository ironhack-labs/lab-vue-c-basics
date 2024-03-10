<script setup>
import { ref } from 'vue'

const sum = ref(0)

function _getString(){
    sum.value = 2 + 2
}

</script>

<template>

<h1> {{ sum }}</h1>
<button @click="_getString">Get String</button>

</template>

<style scope>

</style>