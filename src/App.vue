<script setup>
import { ref } from 'vue'
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import Conditional from "@/components/Conditional.vue"

// reactive state
const greeting = ref("Hello, ")
const name = "My Name is Foo"


function greet() {
  return `${greeting.value + name}`
}

</script>

<template>
  <Navbar />
  <h1>{{ greet() }}</h1><br>
  <p>This is the mathematical operation 2 + 2 = {{ 2 + 2 }}</p>
  <br>
  <hr>
  <Conditional/>
  <Footer />
</template>
<style scoped>
button {
  font-weight: bold;
}
</style>