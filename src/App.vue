<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import { ref } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

// Step 2: Function to generate a string
const generateString = () => {
  return `${firstName.value} ${lastName.value}`
}
</script>

<template>
  <div>
    <p>Result of 2 + 2 is: {{ 2 + 2 }}</p>

    <!-- Step 2: Display String Returned by a Function -->
    <p>{{ generateString() }}</p>

    <NavbarComponent />
    <FooterComponent />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  min-width: 500px;
}
</style>
