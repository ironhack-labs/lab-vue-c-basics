<script setup lang="ts">
import { computed, ref } from 'vue'

const first = ref(0)
const second = ref(0)

const isConsist = computed(() => (first.value * second.value) > 0);

const res = computed(() => {
  return first.value * second.value
})
</script>

<template>
  <section>
    <div>
      <label for="first">First number:</label>
      <input id="first" type="number" v-model="first" />
    </div>
    <div>
      <label for="second">Second number:</label>
      <input id="second" type="number" v-model="second" />
    </div>
    <div v-if="isConsist">
      <p>Result:</p><p>{{ res }}</p>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
}
</style>
