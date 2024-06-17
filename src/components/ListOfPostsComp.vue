<script setup>
    import { reactive } from 'vue'

    const listOfPosts = reactive([
        {title: 'My post 1',
        description: 'Description of my first post',
        content: 'list of tags to include in the content of my first post'},
        {title: 'My post 2',
        description: 'Description of my second post',
        content: 'list of tags to include in the content of my second post'},
        {title: 'My post 3',
        description: 'Description of my third post',
        content: 'list of tags to include in the content of my third post'},
        {title: 'My post 4',
        description: 'Description of my last post',
        content: 'list of tags to include in the content of my last post'}
     ])
</script>

<template>
    <p>Iteration 4: show list of posts dynamically</p>
    <ul>
        <li v-for="value in listOfPosts">
            {{ `${value.title}: ${value.description}. The content of this post is: ${value.content}` }}
        </li>
    </ul>

</template>