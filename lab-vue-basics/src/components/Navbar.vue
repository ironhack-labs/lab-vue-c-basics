<script setup>
import {ref, resolveDirective} from 'vue'

const saludo = ref({
  primera: 'saludos',
  segunda: 'terricola'
});

const isSaludo = ref(true);

function mostrar() {
  return saludo.value.primera + " " + saludo.value.segunda
}
</script>

<template>
  <section>
    <h1>Saludos desde el Navbar</h1>
    <p>{{mostrar()}}</p>
    <p v-show="isSaludo">Este párrafo se oculta</p>
  </section>
</template>

<style scoped>
</style>

