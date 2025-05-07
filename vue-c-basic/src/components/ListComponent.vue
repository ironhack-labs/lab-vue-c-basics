<script setup lang="ts">
import { reactive } from 'vue'

const elementsList = reactive([
  {
    title: 'Title 1',
    description: 'Description 1',
    content: 'Some content 1',
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    content: 'Some content 2',
  },
  {
    title: 'Title 3',
    description: 'Description 3',
    content: 'Some content 3',
  },
])
</script>

<template>
  <section>
    <ul class="list">
      <li v-for="element in elementsList">
        <div class="card">
          <h3>{{ element.title }}</h3>
          <h5>{{ element.description }}</h5>
          <p>{{ element.content }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.list {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 2em;
  color: lightblue;
}
</style>
