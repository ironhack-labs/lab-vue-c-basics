<template>
  <div>
    <Navbar />

    <main style="padding: 20px; max-width: 800px; margin: 0 auto;">
      
      <section style="margin-bottom: 30px;">
        <h3>Iteration 2: Operations & Computed Properties</h3>
        <p>Simple math (2 + 2) = <strong>{{ 2 + 2 }}</strong></p>
        <p>Greeting from function: <strong>{{ getGreeting }}</strong></p>
      </section>

      <section style="margin-bottom: 30px;">
        <h3>Iteration 3: Conditional Rendering</h3>
        <button @click="toggleVisibility">Toggle Element</button>
        <p v-if="isVisible" style="background-color: #e0f7fa; padding: 10px; margin-top: 10px; border-radius: 4px;">
          🎉 Ta-da! You can see me because the property is true!
        </p>
        <p v-else style="color: gray; font-style: italic;">Element is hidden right now.</p>
      </section>

      <section style="margin-bottom: 30px;">
        <h3>Iteration 4: List of Posts</h3>
        <div v-for="(post, index) in posts" :key="index" style="border: 1px solid #ddd; padding: 15px; margin-bottom: 10px; border-radius: 5px;">
          <h4>{{ post.title }}</h4>
          <p style="font-weight: bold; color: #555;">{{ post.description }}</p>
          <p>{{ post.content }}</p>
        </div>
      </section>

      <section style="margin-bottom: 30px;">
        <h3>Iteration 5 (Bonus): Dynamic Background Color</h3>
        <div :style="{ backgroundColor: boxColor }" style="padding: 20px; text-align: center; border-radius: 5px; transition: background-color 0.3s; border: 1px solid #ccc;">
          <p>Click the button below to change my color!</p>
          <button @click="changeColor">Change Background Color</button>
        </div>
      </section>

    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// Iteration 1: Komponenten importieren
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

// Iteration 2: Reaktivität für String/Computed
const username = ref('Süeda');
const getGreeting = computed(() => {
  return `Hello ${username.value}, welcome to your Vue basics dashboard!`;
});

// Iteration 3: Variable für v-if
const isVisible = ref(true);
const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};

// Iteration 4: Liste von Posts (mindestens 3 Stück)
const posts = ref([
  {
    title: 'Getting Started with Vue.js',
    description: 'A beginner guide to learning the core concepts of Vue.',
    content: 'Vue is a progressive framework for building user interfaces. It is designed from the ground up to be incrementally adoptable.'
  },
  {
    title: 'The Magic of Composition API',
    description: 'Why the new script setup is a game changer.',
    content: 'Composition API provides a clean way to organize reactive variables and functions together, making the code highly reusable.'
  },
  {
    title: 'Mastering Frontend Frameworks',
    description: 'Tips and tricks for junior web developers.',
    content: 'Consistency is key. Building small labs like this one helps solidify your understanding of reactive state and components.'
  }
]);

// Iteration 5 (Bonus): Hintergrundfarbe ändern
const boxColor = ref('#ffffff');
const colors = ['#ffebeb', '#e6f4ea', '#fef7e0', '#f1f3f4', '#e8f0fe'];
let colorIndex = 0;

const changeColor = () => {
  colorIndex = (colorIndex + 1) % colors.length;
  boxColor.value = colors[colorIndex];
};
</script>

<style>
/* Globale Minimal-Styles für die Buttons */
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
button:hover {
  background-color: #0056b3;
}
</style>