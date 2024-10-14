<script setup>
const posts = ref([
  {
    title: "First Post",
    description: "This is the first post",
    content: "Content of the first post."
  },
  {
    title: "Second Post",
    description: "This is the second post",
    content: "Content of the second post."
  },
  {
    title: "Third Post",
    description: "This is the third post",
    content: "Content of the third post."
  }
]);
</script>

<template>
 <div v-for="post in posts" :key="post.title" class="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <div>{{ post.content }}</div>
    </div>
</template>

<style scoped>

</style>