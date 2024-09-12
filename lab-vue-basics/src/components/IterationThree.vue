<script setup>
import {ref} from 'vue'
const day = ref(true);
const night = ref(false)
</script>

<template>
 <section>
    <h1 v-if="day">Now is {{day}}</h1>
    <p v-if='night'>But, if it is {{night}}, I'm invisible</p>
    <p v-show='!night'>Hi I'm v-show {{night}}</p>
 </section>
</template>

<style scoped>
</style>