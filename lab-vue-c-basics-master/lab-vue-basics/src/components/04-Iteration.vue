<template>
    <div class="comps">
            <ul>
                <li v-for="post in listOfPosts" :key="post"> 
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.description }}</p>
                    <p>{{ post.content }}</p>
                </li>
            </ul>
        </div>

</template>


<script setup>
import { ref } from 'vue';


let listOfPosts = ref([
    { title: 'First Post', description: 'This is the description for the first post.', content: 'Content of the first post goes here.' },
    { title: 'Second Post', description: 'This is the description for the second post.', content: 'Content of the second post goes here.'},
    { title: 'Third Post', description: 'This is the description for the third post.', content: 'Content of the third post goes here.'}
])


</script>

<style scoped>
    li {
        list-style-type: none;
    }
</style>