<script setup>
import { ref, computed, onMounted } from 'vue'

const now = ref(new Date())

const hour = computed(() => now.value.getHours())
const minutes = computed(() => now.value.getMinutes())

const greeting = computed(() => {
  if (hour.value < 12) return `Buenos días User! ☀️`
  else if (hour.value < 19) return `Buenas tardes User! 🌇`
  else return `Buenas noches User! 🌙`
})

onMounted(() => {
  setInterval(() => {
    now.value = new Date()
  }, 1000 * 60) 
})
</script>


<template>
  <section class="iteration2">
    <h2>Iteration 2 - Computed Property</h2>

    <p>El resultado de 2 + 2 es: {{ 2 + 2 }}</p>

    <p>{{ greeting }}</p>
    <p>Hora actual: {{ hour }}:{{ minutes.toString().padStart(2, '0') }}</p>
  </section>
</template>



<style scoped>
.iteration2 {
  padding: 2rem;
  text-align: center;
  color: #333;
  font-family: "Poppins", sans-serif;
}
h2 {
  color: #251e0e;
  margin-bottom: 1rem;
}
p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}
</style>
