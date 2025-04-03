<script setup>
import { ref, reactive, computed } from 'vue';
import NavBar from "@/components/NavBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import Footer from "@/components/Footer.vue";
import Posts from "@/components/Posts.vue";

const numbersToSum = reactive ({
  firstNumber: 3,
  secondNumber: 2,
})

const sum = computed(() => {
  return (numbersToSum.firstNumber + numbersToSum.secondNumber).toString()
})

const heroClass = ref('');
const buttonText = ref('Any Unicorn?');

const buttonClicked = () => {
  if (heroClass.value === '') {
    heroClass.value = 'show';
    buttonText.value = 'Hide Unicorns';
  } else {
    heroClass.value = '';
    buttonText.value = 'Any Unicorn?';
  }
  
  console.log(heroClass.value);
}


// RAINBOW BUTTON
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
  <NavBar></NavBar>

  <h1>{{ numbersToSum.firstNumber }} + {{ numbersToSum.secondNumber }} = {{ sum }}</h1>

  <HeroSection v-show="heroClass === 'show'"></HeroSection>

  <div class="unicorn-button-container">
    <button @click="buttonClicked" class="toggle-unicorns">{{ buttonText }}</button>
  </div>
  
  <Posts></Posts>

  <div class="rainbow-button-container">
    <button @click="toggleRainbow" class="normal-button" :class="buttonClass">{{ rainbowButtonText }}</button>
  </div>

  <div class="gradient"></div>

  <Footer></Footer>
</template>



<style scoped>
h1 {
    color: var(--mauve);
    font-family: "Abril Fatface", serif;
    font-weight: 400;
    text-align: center;
    margin-top: 30px;
}

.unicorn-button-container {
  margin-top: 30px;
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
    height: 100px;
    border-radius: 0;

    &:hover {
      color: white;
    }
  }
}
</style>
