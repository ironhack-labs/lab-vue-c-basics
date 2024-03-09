<script setup>
import { ref, onMounted } from 'vue'
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <Navbar />
  <button @click="increment">Count is: {{ count }}</button>
  <Footer />
</template>
<style scoped>
button {
  font-weight: bold;
}
</style>