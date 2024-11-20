<script setup>
import { ref } from 'vue';
const randomPosts=[
    {id:1,title: "First", description:"word",content:"Hello"},
    {id:2,title: "Second", description:"word",content:"These"},
    {id:3,title: "Third", description:"word",content:"are"},
    {id:4,title: "Fourth", description:"word",content:"Posts"},

]
</script>

<template>
    <p v-for="item in randomPosts":key="item.id">
        {{ item.title }} {{ item.description }} {{item.content  }}
    </p>
</template>

<style scoped>

</style>