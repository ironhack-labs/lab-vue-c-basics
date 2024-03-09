<script setup>
import { ref } from 'vue'
const booleanText = ref(true)
function changeBoolean() {
  booleanText.value = !booleanText.value
}
</script>

<template>
  <div class="boolean-box">
    <p class="boolean-text" v-if="booleanText">Ahora estoy, ahora no estoy</p>
    <button class="button" @click="changeBoolean">Aparezco/Desaparezco</button>
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
  justify-content: space-between;
  margin: 10px;
}
.boolean-text {
  margin: 20px 10px;
  font-size: 20px;
  text-align: center;
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
