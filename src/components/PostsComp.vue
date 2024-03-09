<script setup>
import { reactive } from "vue";

const posts = reactive([{
    title: "Title 1",
    description:"This is the description for title 1",
    content: "lorem ipsen for title 1"
},{
    title: "Title 2",
    description:"This is the description for title 2",
    content: "lorem ipsen for title 2"
},{
    title: "Title 3",
    description:"This is the description for title 3",
    content: "lorem ipsen for title 3"
}]);

</script>

<template>
  <div class="post-container" v-for="(post, index) in posts" :key="index">
    <h2>{{ post.title }}</h2>
    <h4><em>{{post.description}}</em></h4>
    <p>{{ post.content }}</p>
  </div>
</template>

<style scoped>
div {
    margin: 20px auto;
    border: 2px solid gainsboro;
    padding: 20px 15px;
}

h2 {
    font-weight: bold;
}

h4 {
    text-decoration: underline;
    font-size: 11px;
}
</style>