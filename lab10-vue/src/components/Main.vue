<script setup>
import { ref, reactive } from 'vue'

const number1 = ref(0)
const number2 = ref(0)
const result = ref(0)

const person = ref({
  name: 'Diega',
  age: 20,
  country: 'Uruguay'
})

function showFullName() {
  return person.value.name + ' Chiola'
}

const showPerson = ref(false)

const posts = reactive([
  {
    title: 'Breaking Bad',
    description:
      "Breaking Bad follows protagonist Walter White, a chemistry teacher who turns to cooking methamphetamine after being diagnosed with terminal cancer, in order to secure his family's financial future before he dies.",
    content: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5']
  },
  {
    title: 'Game of Thrones',
    description:
      'Game of Thrones is a fantasy drama television series set in the fictional continents of Westeros and Essos, it follows various noble families as they vie for control of the Iron Throne and Seven Kingdoms.',
    content: [
      'Season 1',
      'Season 2',
      'Season 3',
      'Season 4',
      'Season 5',
      'Season 6',
      'Season 7',
      'Season 8'
    ]
  },
  {
    title: 'Stranger Things',
    description:
      'Stranger Things is set in the 1980s in the fictional town of Hawkins, Indiana, the first season focuses on the investigation into the disappearance of a young boy amid supernatural events occurring around the town.',
    content: ['Season 1', 'Season 2', 'Season 3', 'Season 4 (upcoming)']
  }
])

const isColorChanged = ref(false)

function toggleColor() {
  isColorChanged.value = !isColorChanged.value
}
function sum() {
  result.value = number1.value + number2.value
}
function toggleShow() {
  showPerson.value = !showPerson.value
}
</script>

<template>
  <section class="main">
    <div>
      <h3>Welcome to sum</h3>
      <p>Select first number:</p>
      <input type="number" name="number1" v-model="number1" />
      <p>Select Second number:</p>
      <input type="number" name="number2" v-model="number2" />
      <br />
      <br />
      <button @click="() => sum()">Submit</button>
      <p>The result of the sum is: {{ result }}</p>
      <br />
      <p>Sum :{{ 2 + 2 }}</p>
      <br />
    </div>

    <div>
      <h3>Show element</h3>
      <button @click="toggleShow">Who am I?</button>
      <p v-if="showPerson">
        I am {{ person.name }} , I have {{ person.age }} and I'm from {{ person.country }}
      </p>
      <p v-if="showPerson">FullName : {{ showFullName() }} </p>
    </div>

    <div :class="{ changeColor: isColorChanged }">
      <h3>Series:</h3>
      <ul>
        <li v-for="post in posts" :key="post">
          <h4>{{ post.title }}</h4>
          <p>{{ post.description }}</p>
          <p>{{ post.content }}</p>
        </li>
      </ul>
    </div>
    <div>
      <h3>Bonus</h3>
      <button @click="toggleColor">Change color</button>
    </div>
  </section>
</template>

<style scoped>
.main {
  background-color: rgb(246, 246, 246);
}

.changeColor {
  background-color: antiquewhite;
  color: blue;
}
</style>
