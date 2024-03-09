<script setup>
import { ref } from 'vue'
const sum = ref(0)
function _calcular() {
  sum.value = 2 + 2
  console.log(`El resultado de la suma 2 + 2 es: ${sum.value}`)
}
</script>

<template>
  <div class="sum-box">
    <p class="result">{{ sum }}</p>
    <button class="button" @click="_calcular()">Calcular 2 + 2</button>
  </div>
</template>

<style scoped>
.sum-box {
  width: 250px;
  height: 250px;
  border: 2px solid var(--vt-c-green);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
}

.result {
  margin-top: 20px;
  font-size: 24px;
}

.button {
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: var(--bgcolor-button);
  color: var(--vt-c-white);
  cursor: pointer;
}
</style>
