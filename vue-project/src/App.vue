<script setup>
  // ### Iteration 1 | Create a basic template structure inside a new project
  // Solution
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';

  // ### Iteration 2 | Display the result of a JavaScript operation in a component's HTML
  // Solution
  import { ref, computed } from 'vue';

  const firstName = ref('John');
  const lastName = ref('Doe');

  const fullName = computed(() => {
    return `${firstName.value} ${lastName.value}`;
  });

  // ### Iteration 3 | Show an element only if a particular property is set to `true`
  // Solution
  const showElement = ref(false);

  const toggleVisibility = () => {
    showElement.value = !showElement.value;
  };

  // ### Iteration 4 | Display a list of elements that are stored inside a component
  // Solution
  const posts = ref([
  {
    title: 'Post 1',
    description: 'Description of Post 1',
    content: 'Content of Post 1',
  },
  {
    title: 'Post 2',
    description: 'Description of Post 2',
    content: 'Content of Post 2',
  },
  {
    title: 'Post 3',
    description: 'Description of Post 3',
    content: 'Content of Post 3',
  },
  {
    title: 'Post 4',
    description: 'Description of Post 4',
    content: 'Content of Post 4',
  },
]);

  // ### Iteration 5 | Bonus | Change the background color of an element when pressing a button
  // Solution
  const isHighlighted = ref(false);

  const toggleClass = () => {
    isHighlighted.value = !isHighlighted.value;
  };

</script>

<template>
  <div>
    <NavBar />
    <Footer />
    <h1>{{ fullName }}</h1>

    <button @click="toggleVisibility">Toggle Visibility</button>
    <p v-if="showElement">This element is visible when showElement is true.</p>

    <h1>Posts</h1>
    <div v-for="post in posts" :key="post.title">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <div>{{ post.content }}</div>
    </div>

    <button @click="toggleClass">Toggle Class</button>
    <div :class="{'highlight': isHighlighted}">
      This is a div that can be highlighted.
    </div>
  </div>
</template>

<style scoped>
  .highlight {
  background-color: yellow;
}

</style>

