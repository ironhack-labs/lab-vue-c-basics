<script setup>
import { ref } from "vue";

const username = ref("Álvaro");
const age = ref(32);
const isVisible = ref(true);

const posts = ref([
  {
    title: "Post 1",
    description: "Descripción 1",
    content: "Contenido del post 1",
  },
  {
    title: "Post 2",
    description: "Descripción 2",
    content: "Contenido del post 2",
  },
  {
    title: "Post 3",
    description: "Descripción 3",
    content: "Contenido del post 3",
  },
]);

const greeting = () => `Hola ${username.value}, tienes ${age.value} años`;

const messageButton = () =>
  isVisible.value ? "Ocultar" : "Mostrar";

const toggle = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <section class="container">

    <!-- Saludo -->
    <p class="greeting">{{ greeting() }}</p>

    <!-- Toggle -->
    <button @click="toggle" class="btn">
      {{ messageButton() }}
    </button>

    <p v-if="isVisible" class="visible">Ahora me ves 👀</p>
    <p v-else class="hidden">No me ves 🙈</p>

    <!-- Posts -->
    <div class="posts">
      <div v-for="post in posts" :key="post.title" class="post-card">
        <h2>{{ post.title }}</h2>
        <p class="desc">{{ post.description }}</p>
        <p class="content">{{ post.content }}</p>
      </div>
    </div>

  </section>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Greeting */
.greeting {
  font-size: 18px;
  margin-bottom: 10px;
}

/* Button */
.btn {
  padding: 10px 15px;
  margin-bottom: 15px;
  cursor: pointer;
}

/* Visibility text */
.visible {
  color: green;
}

.hidden {
  color: red;
}

/* Posts */
.posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.post-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.post-card:hover {
  transform: translateY(-3px);
}

.desc {
  font-weight: bold;
  margin-bottom: 5px;
}

.content {
  opacity: 0.8;
}
</style>
