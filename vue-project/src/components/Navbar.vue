<script setup>

import { ref } from 'vue';

const posts= ref([
    {
        title: "How to learn VUE",
        description: "best practices for learning",
        content: "directives, components and two way data binding"
    },
    {
        title: "JS Conditionals and Loops",
        description:"Use the if..else statement",
        content: "Identify when it’s better to use switch over if..else"
    },
    {
        title: "Web page structure",
        description: "HTML and CSS",
        content: "Understand margin, padding and border properties, and the differences between them",
    }
]);

</script>

<template>
    <div>
    <div v-for="(post, index) in posts" :key="index">
        <h2>{{ post.title }}</h2>
        <p>Description: {{ post.description }}</p>
        <p>Content: {{ post.content }}</p>
    </div>
</div>
  
</template>

<style scoped >

</style>

