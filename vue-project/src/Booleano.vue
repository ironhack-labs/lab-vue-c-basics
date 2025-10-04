<script setup>
import { ref } from 'vue';

const Mostrar = ref(false);
</script>

<template>

<button @click="Mostrar = !Mostrar">Mostrar / Ocultar</button>

<p v-if="Mostrar">Ahora me ves </p>

</template>

<style>

</style>