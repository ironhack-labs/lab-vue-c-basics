<template>
 <div :style="{ backgroundColor: isRed ? 'red' : 'white' }">

    <button @click="changeColor">

      change color

    </button>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const isRed = ref(false)

function changeColor() {

  isRed.value = !isRed.value

}
</script>