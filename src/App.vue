<template>
  <!--Iteration 1: Navigationsleiste-->
  <Navbar></Navbar>
  <div>
    <p>
      <!--Iteration 2: insert mathematical operation-->
      {{ 1 + 1 }}
    </p>
  </div>

  <div>
    <!--Iteration 2: printing String-->
    <p>{{ string1 }}</p>
  </div>

  <!--Iteration 3: -->
  <div>
    <p v-if="isVisible">Iteration 3</p>
  </div>

  <!--Iteration 4: Liste von Elementen anzeigen-->
  <div v-for="post in posts" :key="post.id">
    <h2>{{ post.title }}</h2>
    <h4>
      {{ post.description }}
    </h4>
    <p>{{ post.content }}</p>
    <hr />
  </div>

  <!--Iteration 5 (Bonus)-->
  <div>
    <h3 :class="[bgColour]">Iteration 5</h3>
    <button @click="toggleColor">Farbe wechseln</button>
  </div>

  <!--Iteration 1: Footer-->
  <Footer></Footer>
</template>

<script setup>
import { ref, computed } from "vue";

//Iteration 1:
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

//Iteration 2:
const name = ref("Peter");
const city = ref("Bonn");
const string1 = computed(() => {
  return `Ich bin ${name.value} und wohne in ${city.value}`;
});

//Iteration 3: Boole'sche Variable
const isVisible = ref(true);

//Iteration 4:
const posts = ref([
  {
    id: 1,
    title: "Post 1",
    description: "Erster Beitrag",
    content: "Das ist der Inhalt des ersten Posts.",
  },
  {
    id: 2,
    title: "Post 2",
    description: "Zweiter Beitrag",
    content: "Inhalt des zweiten Posts.",
  },
  {
    id: 3,
    title: "Post 3",
    description: "Dritter Beitrag",
    content: "Das ist der Inhalt von Post 3.",
  },
]);

//Iteration 5 (Bonus):
const bgColour = ref("orange-bg");

function toggleColor() {
  if (bgColour.value === "green-bg") {
    bgColour.value = "orange-bg";
  } else if (bgColour.value === "orange-bg") {
    bgColour.value = "green-bg";
  }
}
</script>

<style>
/*Iteration 5 (Bonus): Klassen definieren*/
.green-bg {
  background-color: rgb(100, 237, 150);
}

.orange-bg {
  background-color: rgb(254, 124, 44);
}
</style>
