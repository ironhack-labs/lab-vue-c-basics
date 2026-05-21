<script setup>
import { ref } from 'vue';
//import { d } from 'vue-router/dist/useApi-D6ckOsFy.js';
const list = ref([{
    title: 'Post 1',
    description: 'This is the description for Post 1',
    content: 'This is the content for Post 1'
}, {
    title: 'Post 2',
    description: 'This is the description for Post 2',
    content: 'This is the content for Post 2'
}, {
    title: 'Post 3',
    description: 'This is the description for Post 3',
    content: 'This is the content for Post 3'
}, {
    title: 'Post 4',
    description: 'This is the description for Post 4',
    content: 'This is the content for Post 4'
}, {
    title: 'Post 5',
    description: 'This is the description for Post 5',
    content: 'This is the content for Post 5'
}
]);

const contentClass = ref('');

const changeBgColor = () => {
    if (contentClass.value === 'contentBackground') {
        contentClass.value = '';
    } else {
        contentClass.value = 'contentBackground';
    }
    
}
</script>

<template>
    <div v-bind:class="contentClass" class="">
        <h1>Content Component</h1>
        <p>This is the content of the page.</p>

        <p>Here's a list of posts:</p>
        <div v-for="(item, index) in list" :key="index" class="post">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <p>{{ item.content }}</p>
        </div>
        <button @click="changeBgColor">Change Background Color</button>
    </div>
</template>

<style scoped>
.post {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
}

.contentBackground {
    background-color: #2007c3;
}
</style>