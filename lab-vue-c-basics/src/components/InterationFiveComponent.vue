<script setup>
import { ref, computed } from 'vue'

const currentClass = ref('color1')

const message = computed(() => {
  return currentClass.value === 'color1'
    ? 'Warm color'
    : 'Cold color'
})

function toggleColor() {
  currentClass.value = currentClass.value === 'color1' ? 'color2' : 'color1'
}
</script>

<template>
  <section class="iteration5">
    <h2>Iteration 5 - Change color dynamically with classes</h2>

    <div :class="['color-box', currentClass]">
      <p>{{ message }}</p>
    </div>

    <button @click="toggleColor">
      Cambiar color
    </button>
  </section>
</template>

<style scoped>
.iteration5 {
  padding: 2rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
  padding-bottom: 10%;
}


.color-box {
  width: 250px;
  height: 150px;
  margin: 1.5rem auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  transition: background-color 0.6s ease, transform 0.3s ease;
}

.color1 {
  background-color: #BD9339; 
}

.color2 {
  background-color: #4979e0; 
}

button {
  background-color: #42a8b6;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s ease, background-color 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  background-color: #2da0af;
}
</style>
