//------------------  SCRIPT ------------------------

<script setup>

import {ref} from "vue"
const visible=ref(true);

</script>

//------------------- TEMPLATE -----------------------

<template>

<button @click="visible=!visible;">Hide it!</button>
<h1  v-if="visible">Look at me!</h1>

</template>

//------------------- STYLE --------------------------

<style scoped>


</style>


