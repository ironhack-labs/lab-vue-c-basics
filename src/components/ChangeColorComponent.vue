<script setup>
import { ref } from 'vue'
const isColored = ref(false)
function changeBoolean() {
  isColored.value = !isColored.value;
}
</script>

<template>
  <div :class="{'backgroud-colored': isColored}" class="boolean-box">
    <button class="button" @click="changeBoolean()">Cambiar BgColor</button>
  </div>
</template>
<style scoped>
.boolean-box {
  width: 250px;
  height: 250px;
  border: 2px solid var(--vt-c-green);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: var(--vt-c-white);
}
.backgroud-colored{
    background-color: red;
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