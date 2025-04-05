<script setup>
import { ref, computed } from 'vue';

// ITERATION 5 RAINBOW BUTTON
const isRainbow = ref(false);
const rainbowButtonText = ref('Show me the rainbow!');

const buttonClass = computed(() => {
  return {
    'rainbow-button': isRainbow.value,
    'normal-button': !isRainbow.value
  }
})

const toggleRainbow = () => {
  if(rainbowButtonText.value === 'Show me the rainbow!') {
    rainbowButtonText.value = "It's time to bring me back to Earth";
    isRainbow.value = true;
  } else {
    rainbowButtonText.value = 'Show me the rainbow!';
    isRainbow.value = false;
  }

  console.log(rainbowButtonText.value);
}
</script>


<template>
    <div class="rainbow-button-container">
        <button @click="toggleRainbow" class="normal-button" :class="buttonClass">{{ rainbowButtonText }}</button>
    </div>

    <div class="gradient"></div>
</template>




<style scoped>
.rainbow-button-container {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .normal-button {
    color: var(--mauve);
    font-family: "Abril Fatface", serif;
    font-weight: 400;
    text-align: center;
    padding: 10px 30px;
    border-radius: 50px;
    border: none;
    font-size: 15px;

    &:hover {
      background-color: var(--pink);
      color: var(--blue);
    }
  }

  .rainbow-button {
    background-image: linear-gradient(35deg, var(--purple), var(--mauve),var(--pink),  var(--light-blue), var(--blue));
    color: var(--blue);
    width: 100%;
    height: 150px;
    border-radius: 0;

    &:hover {
      color: white;
    }
  }
}
</style>