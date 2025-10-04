<script setup>
import { ref } from "vue";

const showMessage = ref(true);

function toggleMessage() {
  showMessage.value = !showMessage.value;
}
</script>

<template>
  <section class="iteration3">
    <h2>Interation 3 - Conditionals using v-if or v-show</h2>

    <button @click="toggleMessage">
      {{ showMessage ? "Ocultar mensaje" : "Mostrar mensaje" }}
    </button>

    <p v-if="showMessage" class="message">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, alias.
      Ipsam labore dolorum placeat itaque nam esse minima dolor vel facere,
      consequuntur unde culpa aliquam. Eius earum explicabo alias qui?
    </p>
  </section>
</template>

<style>
.iteration3 {
  text-align: center;
  padding: 2rem;
  font-family: "Poppins", sans-serif;
}

button {
  background-color: #42a8b6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 1rem;
}
button:hover {
  background-color: #2da0af;
  transform: scale(1.05);
}

.message {
  background-color: #f3e8c5;
  padding: 1rem;
  border-radius: 5px;
  color: #333;
}
</style>
