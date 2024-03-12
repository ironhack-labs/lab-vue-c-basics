<script setup>
import Navbar from "./components/navbar.vue"
import TheFooter from "./components/footer.vue"

import { reactive } from 'vue'

const numbers = reactive({
  a: 2,
  b: 2
});

function suma() {
  return numbers.a + numbers.b;
}

</script>

<template>
  <Navbar />
  <main>
    <div>
      Result: {{ suma() }}
    </div>
  </main>
  <TheFooter />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
