<script setup>
import { ref } from 'vue'

const changeColor = ref(false)

function newColor() {
  changeColor.value = !changeColor.value
}
</script>

<template>
    <p>Press to change the color of the button</p>
  <button @click="newColor" class="btnColor" :class="{ colorChanged: changeColor }">Press</button>
</template>

<style>
.btnColor {
  display: flex;
  text-decoration: none;
  width: 100px;
  height: 42px;
  font-size: 17px;
  background-color: #ee0634;
  font-weight: 500;
  color: white;
  align-items: center;
  justify-content: center;
  border: none;
}

.colorChanged {
  background-color: rgb(32, 188, 240);
}
</style>
