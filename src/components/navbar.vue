<script setup>
import HelloWorld from './HelloWorld.vue'
import { ref, reactive } from 'vue'

const showElement = ref(true);

const posts = reactive([
    {
        title: 'This is the first title',
        description: 'This is a description',
        content: 'This is some amazing'
    },
    {
        title: 'Wow, its a second title',
        description: 'This is a description',
        content: 'This is some amazing'
    }
    , {
        title: 'I can\'t wait to see the third one',
        description: 'This is a description',
        content: 'This is some amazing'
    }])

</script>

<template>
    <header>
        <img v-if="showElement" alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <HelloWorld msg="You did it!" />
        </div>

        <div>
            <ul v-for="post in posts">
                <li>{{ post.title }}</li>
                <li>{{ post.description }}</li>
                <li>{{ post.content }}</li>
            </ul>
        </div>
    </header>
</template>

<style scoped>
ul {
    border: 1px solid white;
    margin: 20px;
}
</style>