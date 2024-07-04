<template>
    <div class="postContainer">
        <ul>
            <li v-for="post in listOfPosts" :key="post.title" class="post-item">
                <h2>{{ post.title }}</h2>
                <p class="post-description">{{ post.description }}</p>
                <p class="post-content">{{ post.content }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let listOfPosts = ref([
    { title: 'First Post', description: 'This is the description for the first post.', content: 'Content of the first post goes here.' },
    { title: 'Second Post', description: 'This is the description for the second post.', content: 'Content of the second post goes here.' },
    { title: 'Third Post', description: 'This is the description for the third post.', content: 'Content of the third post goes here.' }
]);
</script>

<style scoped>
.postContainer {
    font-family: Arial, sans-serif;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 500px;
    margin: 0 auto;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

ul {
    padding: 0;
    margin: 0;
}

.post-item {
    list-style-type: none;
    padding: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
}

.post-item:last-child {
    border-bottom: none;
}

.post-item h2 {
    font-size: 24px;
    color: #333;
}

.post-description {
    font-size: 14px;
    color: #666;
    margin: 10px 0;
}

.post-content {
    font-size: 16px;
    color: #444;
}
</style>