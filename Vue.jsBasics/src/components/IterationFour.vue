<template>
    <div class="container">
        <h1>Iteration Four</h1>

        <div class="posts">
            <article 
                v-for="post in posts" 
                :key="post.id" 
                class="post-card"
            >
                <h2>{{ post.title }}</h2>
                <p class="description">{{ post.description }}</p>
                <div class="content">
                    {{ post.content }}
                </div>
            </article>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const posts = ref([
        {
            id: 1,
            title: 'Title-1',
            description: 'This description is for Title-1',
            content: 'No Content is available for Title-1.'
        },
        {
            id: 2,
            title: 'Title-2',
            description: 'his description is for Title-2',
            content: 'No Content is available for Title-2'
        },
        {
            id: 3,
            title: 'Title-3',
            description: 'his description is for Title-3',
            content: 'No Content is available for Title-3'
        },
        {
            id: 4,
            title: 'Title-4',
            description: 'his description is for Title-4',
            content: 'No Content is available for Title-4'
        }
    ])
</script>