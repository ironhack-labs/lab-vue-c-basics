<script setup>
import { reactive } from 'vue'

const myPosts = reactive([
    {
        title: 'Vectorify',
        description: 'User Experience Design',
        content: 'Lorem ipsum dolor sit amet'
    },
    {
        title: 'Innovate',
        description: 'Creative Solutions',
        content: 'Lorem ipsum dolor sit amet'
    },
    {
        title: 'Inspire',
        description: 'Motivational Content',
        content: 'Lorem ipsum dolor sit amet'
    }
]);
</script>

<template>
    <ul>
        <!-- Use v-for to iterate over each post in the posts array -->
        <li v-for="post in myPosts" :key="post.title">
            <!-- Display post title, description, and content -->
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
            <p>{{ post.content }}</p>
        </li>
    </ul>
</template>

<style scoped>
*  {
  background-color:lemonchiffon;
}

ul {
    list-style-type: none;
}
</style>
