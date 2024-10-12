<script setup>

import { ref } from 'vue';

const listOfPosts = ref([ 
{title: 'Where the Crawdads Sing', description: 'Drama', content: 'Book'},
{title: 'Lessons in Chemistry', description: 'Novel', content: 'Book'},
{title: 'City of Girls', description: 'Novel', content: 'Book'}
]);
</script>

<template>
    <div>
        <ul>
            <li v-for="(item, index) in listOfPosts" :key="index">
                {{ item.title }} / {{ item.description }} / {{ item.content }}
            </li>
        </ul>
    </div>

</template>

<style scoped>
</style>