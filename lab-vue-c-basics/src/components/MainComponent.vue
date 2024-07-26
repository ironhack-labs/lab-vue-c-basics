<script setup>
import { ref } from 'vue'

// Iteración 2
const someFunction = (inputNumber) => {
  const randomNumberLimit = 10
  const randomNumber = Math.floor(Math.random() * randomNumberLimit * 2) - randomNumberLimit
  return inputNumber + randomNumber
}
const calculation = someFunction(2)

// Iteración 3
const togglingVar = ref(false)
const toggleVar = () => (togglingVar.value = !togglingVar.value)
setInterval(toggleVar, 1000)

// Iteración 4
const postsList = ref([
  {
    id: 'b39aff78-04d8-5547-90cc-59213ee5fefd',
    title: 'kind track melted',
    description: 'trace daughter machinery roar clear',
    content:
      'nails struck light lake on addition grass wonderful farmer little cabin wife stay mother phrase whispered my him layers lack forest mission frame spider orange evidence itself involved gun freedom building off milk stepped collect oldest park remember transportation headed provide beside frequently thousand lonely how nuts tool'
  },
  {
    id: '6b693d68-7c57-579e-83f6-f3a6530bbac0',
    title: 'fruit mine throughout',
    description: 'go corner gift greater flower',
    content:
      'victory below down who popular ready might such hospital stepped stop program balloon especially break frighten lonely garden flew generally better behavior allow other sitting rocky giant term understanding lower mouse blood sang twelve fox temperature hair score liquid fog gather protection audience shorter gate crowd pupil earth'
  },
  {
    id: '7f2019fa-a183-59da-addb-d4c8b81f6b30',
    title: 'that stove prize',
    description: 'thought walk wide furniture about',
    content:
      'badly sleep happy effort method type other car gentle mirror band lunch across leg problem cage weight beautiful made supply collect nails observe heard continued next number went course group public topic death some well studying flame voice coast together thirty mind contain write long yesterday tail mine'
  },
  {
    id: 'd8d373e1-ca90-5df3-b87f-36db7a33b867',
    title: 'view pale similar',
    description: 'system let plus having state',
    content:
      'closer beautiful fast vegetable knowledge fair sunlight wear greatly base her built lose highest gradually medicine slave quiet recent impossible when collect plates move gulf living effect safety found eye two we whom social tall constantly act tightly cookies plant mood brush using wherever guess return arrive pay'
  },
  {
    id: 'ef1a3011-8f04-5dea-a4e9-a3baf2726488',
    title: 'board bread replied',
    description: 'dust continent at story finger',
    content:
      'birthday sight continent score team straight because border halfway station beautiful colony sense cage corn football route powder faster mighty captain attack dinner children effect spent label lonely ship harder log throat busy felt press single sight function plastic train tribe middle affect happily even copper dried wave'
  },
  {
    id: 'af691c9d-c8a4-5319-b190-2f8658541142',
    title: 'elephant tomorrow topic',
    description: 'pool evening cell grow nodded',
    content:
      'stronger boat block correctly driven quick manner judge pay music couple visitor instead store business court different steep dried window poem ground myself that gave using suit sudden coffee search carefully afternoon pink cookies catch bigger son report service whispered telephone community snow hide nature rabbit cell town'
  }
])

// Iteración 5
const getRandomColor = () => {
  const randomHue = Math.floor(Math.random() * 360)
  return `hsl(${randomHue} 100% 50%)`
}
let backgroundColor = ref(getRandomColor())
const changeColor = () => (backgroundColor.value = getRandomColor())
</script>

<template>
  <main>
    <h2>Iteración 2</h2>
    <p class="iteration-explanation">
      Mostrar el resultado de una operación de JavaScript en el HTML de un componente
    </p>
    <blockquote>{{ calculation }}</blockquote>

    <hr />

    <h2>Iteración 3</h2>
    <p class="iteration-explanation">
      Mostrar un elemento solo si una propiedad particular está establecida en true
    </p>
    <p>
      La variable <code>togglingVar</code> es <code v-if="togglingVar">true</code><code v-else>false</code>.
    </p>

    <hr />

    <h2>Iteración 4</h2>
    <p class="iteration-explanation">
      Mostrar una lista de elementos que se almacenan dentro de un componente
    </p>
    <ul class="posts">
      <li v-for="post in postsList" :key="post.id">
        <article class="post">
          <h3>{{ post.title }}</h3>
          <p class="post-description">{{ post.description }}</p>
          <p>{{ post.content }}</p>
        </article>
      </li>
    </ul>

    <hr />

    <h2>Iteración 5</h2>
    <p class="iteration-explanation">
      Cambiar el color de fondo de un elemento al presionar un botón
    </p>

    <div>
      <div :style="{ backgroundColor: backgroundColor }" class="color-box">Colorines</div>
      <button @click="changeColor">Cambia el color</button>
    </div>
  </main>
</template>

<style>
main {
  background-color: aliceblue;
  border: var(--border);
}

.iteration-explanation,
.post-description {
  font-style: italic;
  margin-bottom: 1rem;
  color: gray;
}

hr {
  margin: 2rem 0;
  border: none;
  border-top: var(--border);
}

code {
  background-color: #eee;
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  font-weight: 600;
}

.posts {
  list-style: none;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.post {
  border: var(--border);
  padding: 1rem;
  margin: 1rem;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.color-box {
  width: 200px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  border-radius: 6px;
  margin-block: 1rem;
  transition: background-color 0.3s;
}
</style>