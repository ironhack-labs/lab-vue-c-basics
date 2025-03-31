<script setup>
import FooterVue from "./components/Footer.vue";
import NavBarVue from "./components/NavBar.vue";
import { reactive } from 'vue';
import { ref } from 'vue';

const navAtr = reactive({
  titleOne:'Home',
  titleTwo:'About Us',
  titleThree:'Where We Are',
})

const sumNum = ref(2+2)

const recoverSumVal = () => {
  const result = sumNum.value.toString();
  return result;
}

const showOrNot = ref(true);

const listToShow = ref([
{
  title: "Mirror's Edge",
  description: "parkour videogame",
  content: "parkour gameplay",
},
{
  title: "Beyond: Two Souls",
  description: "decision videogame",
  content: "decision gameplay",
},
{
  title: "Viva Piñata",
  description: "garden videogame",
  content: "garden gameplay",
}]);

const backColour = ref('white')

const toggleColour = (colour) => {
  if (backColour.value !== colour) {
    backColour.value = colour
  } else {
    return backColour.value
  }
}
</script>


<template>
  <div>
    <NavBarVue 
      :titleOne="navAtr.titleOne"
      :titleTwo="navAtr.titleTwo"
      :titleThree="navAtr.titleThree"
    />
    <div class="result">
      {{ recoverSumVal() }}
    </div>

    <div :class="showOrNot" v-show="showOrNot">
      I'm showing if I'm true
    </div>

    <div class="show-list" v-for="(game, i) in listToShow" :key="i">
      <h3>{{ game.title }}</h3>
      <p>{{ game.description }}</p>
      <p>{{ game.content }}</p>
    </div>

    <div :class="backColour" class="change-background">
      <p>I CAN CHANGE!</p>
      <button @click="toggleColour('blue')">Change Me!</button>
    </div>
    <FooterVue>
      <NavBarVue 
        :titleOne="navAtr.titleOne"
        :titleTwo="navAtr.titleTwo"
        :titleThree="navAtr.titleThree"
      />
    </FooterVue>
  </div>
</template>
<style scoped>
.white {
  background-color: white;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
</style>
