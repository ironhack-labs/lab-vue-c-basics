<script setup>
import { ref } from 'vue'

const items = ref([
  { id: 1, title: "Item 1", description: "Description of Item 1" , content: "Lorem ipsum #1"},
  { id: 2, title: "Item 2", description: "Description of Item 2", content: "Lorem ipsum #2" },
  { id: 3, title: "Item 3", description: "Description of Item 3", content: "Lorem ipsum #3" },
])

</script>


<template>
    <h1>List of items </h1>
    <div class="list-of-items">
        <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.title }}: {{ item.description }} {{ item.content }}
      </li>
    </ul>
    </div>
</template>

<style scoped>
</style>