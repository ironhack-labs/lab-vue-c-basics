<script setup>
import { ref } from "vue";

const isTrue = true;
const postList = ref ([
    { title: "The Power of Now", 
    description: "Taking control of your life",
    content: "Self Help book by Eckhart Tolle"},

    { title: "Atomic Habits",
    description: "Tiny Changes, Remarkable Results",
    content: "Self Help book by James Clear"},

    { title: "Deep Work",
    description: "Rules for Focused Success in a Distracted World",
    content: "Self Help book by Cal Newport"}
])
</script>

<template>

    <h1> This is the footer</h1>
    <h3>Challenge 3:</h3>
    <p v-if = "isTrue === true">
        <h1> The statement is true</h1> 
    </p>
    <p v-else>
        <h1> The statement is false</h1>
    </p>

    <h3> Challenge 4:</h3>
    <ul>
        <li v-for = "post in postList">
            <h2> {{ post.title }} </h2>
            <h3> {{ post.description }} </h3>
            <p> {{ post.content }} </p>
            </li>
    </ul>

</template>

<style></style>
