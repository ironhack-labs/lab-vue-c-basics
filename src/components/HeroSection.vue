<script setup>
import { ref } from 'vue';

const heroClass = ref(false);
const buttonText = ref('Any Unicorn?');

const buttonClicked = () => {
  if (heroClass.value === false) {
    heroClass.value = true;
    buttonText.value = 'Hide Unicorns';
  } else {
    heroClass.value = false;
    buttonText.value = 'Any Unicorn?';
  }
  
  console.log(heroClass.value);
}
</script>


<template>
    <div class="hero-section" v-show="heroClass === true"></div>

    <div class="unicorn-button-container">
        <button @click="buttonClicked" class="toggle-unicorns">{{ buttonText }}</button>
    </div>
</template>



<style scoped>
.hero-section {
    width: 100%;
    height: 200px;
    background-image: url('@/assets/unicorn-logo.png');
    background-size: 10% ;
    background-repeat: round;
    margin-top: 30px;
}

.unicorn-button-container {
  margin-top: 30px;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .toggle-unicorns {
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
}
</style>