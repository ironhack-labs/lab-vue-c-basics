<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import TestVisibleElement from './components/TestVisibleElement.vue'
import ListOfElements from './components/ListOfElements.vue'
import ChangeColorDynamically from './components/ChangeColorDynamically.vue'

import { ref, computed } from 'vue';

const reactiveVarOne = ref(5); // Define reactive variables using ref
const reactiveVarTwo = ref(3);

const computedString = computed(() => {
  // Perform some operation with reactive variables
  return `My reactive variables are ${reactiveVarOne.value} and ${reactiveVarTwo.value}. The sum of which equals: ${reactiveVarOne.value + reactiveVarTwo.value}`
})

</script>

<template>

  <header>
    <Navbar />
  </header>

  <main>
    <!-- ITERATION 2 -->
    <p>The result of the mathematical operation 2 + 2 is {{ 2 + 2 }}</p>
    <div>
      <!-- Call a function to return a computed string -->
      {{ computedString }}
    </div>

    <!-- ITERATION 3 -->
    <TestVisibleElement />
       <!-- ITERATION 4 -->
    <ListOfElements />
       <!-- BONUS ITERATION 5 -->
    <ChangeColorDynamically />
    
</main>
  <footer>
    <Footer />
  </footer>

</template>

<style scoped></style>
