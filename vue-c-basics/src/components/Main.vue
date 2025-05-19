<template>
  <section>
    <div>
      <h2>Iteration 2a:</h2>
      <p>2 + 2 = {{ 2 + 2 }}</p>
    </div>
    <div>
      <h2>Iteration 2.2b:</h2>
      <p>{{ getSomeText() }}</p>
    </div>
    <div>
      <h2>Iteration 3:</h2>
      <p>The text below visibility is {{ visible }}</p>
      <p v-if="visible">This text could be visible or not</p>
    </div>
    <div>
      <h2>Iteration 4:</h2>
      <ul>
        <li v-for="post in postsList" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <p>{{ post.content }}</p>
        </li>
      </ul>
    </div>
    <div>
      <h2>Iteration 5:</h2>
      <div :style="{ backgroundColor: colorbox }" class="box"></div>
      <button @click="colorbox = 'red'">Toogle the color</button>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const someText = ref('some text')
const getSomeText = () => `Here you can see "${someText.value}".`

const visible = ref(true)

const postsList = reactive([
  {
    id: 1,
    title: 'Post Title 1',
    description: 'Post Description 1',
    content: 'Post Content 1',
  },
  {
    id: 2,
    title: 'Post Title 2',
    description: 'Post Description 2',
    content: 'Post Content 2',
  },
  {
    id: 3,
    title: 'Post Title 3',
    description: 'Post Description 3',
    content: 'Post Content 3',
  },
])

const colorbox = ref('green')
</script>

<style scoped>
h2 {
  margin-top: 50px;
}

li {
  margin-top: 10px;
  list-style: none;
}

.box {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px;
}
</style>
