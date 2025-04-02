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


</script>



<template>
  <NavBar></NavBar>

  <h1>{{ numbersToSum.firstNumber }} + {{ numbersToSum.secondNumber }} = {{ sum }}</h1>

  <HeroSection v-show="heroClass === 'show'"></HeroSection>

  <div class="button-container">
    <button @click="buttonClicked" class="toggle-unicorns">{{ buttonText }}</button>
  </div>
  
  <Posts></Posts>

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

.button-container {
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
      background-color: var(--purple);
      color: var(--pink);
    }
  }
}




</style>
