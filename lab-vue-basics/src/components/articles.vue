<script setup>

import { ref } from "vue";

// Array of Objects as a dataset to work with
var posts = ref([
    {
        title: "This is title 1",
        description: "This is description 1",
        content: "This is content 1",
    },
    {
        title: "This is title 2",
        description: "This is description 2",
        content: "This is content 2",
    },
    {
        title: "This is title 3",
        description: "This is description 3",
        content: "This is content 3",
    },
])

const isActive = ref(false);

//Toggles the background color of the component
function toggleBackground() {
  isActive.value = !isActive.value;
}

// Expose the properties and methods to the template
defineExpose({
  isActive,
  toggleBackground,
});

</script>
<template>
    <!--Lists the objects in the array and changes background color on button click-->
    <div :class="{ active: isActive }" class="backgroundToggle">
         <li v-for="(title, description, content) in posts">
         {{ title }} {{ description }} {{ content }}
        </li>
    </div>

    <br>

    <div>
    <!--Button to change the background color of the class "backgroundToggle"-->
    <button @click="toggleBackground">Toggle to blue!</button>
    </div>

</template>

<style scoped>

    .active{
    background-color: #4ca7e3;
    }

</style>