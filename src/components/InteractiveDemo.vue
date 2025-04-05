
  
  <script setup>
  import { ref } from 'vue'
  
  const isVisible = ref(true)


    const posts = ref([
  {
    title: 'Vue Basics',
    description: 'Introducción a Vue',
    content: 'Vue es un framework progresivo para construir interfaces de usuario.'
  },
  {
    title: 'Composition API',
    description: 'Reactividad avanzada',
    content: 'Usando ref() y reactive puedes crear componentes más flexibles.'
  },
  {
    title: 'Directivas',
    description: '¿Qué es v-for?',
    content: 'v-for se usa para iterar sobre arrays de forma declarativa.'
  }
])

const bgColor = ref('lightyellow')

function toggleColor() {
  bgColor.value = bgColor.value === 'lightyellow' ? 'lightblue' : 'lightyellow'
}


  </script>
  <template>
    <div>
      <h2>Iteration 3: Condicional con v-if</h2>
  
      <button @click="isVisible = !isVisible">
        {{ isVisible ? 'Ocultar mensaje' : 'Mostrar mensaje' }}
      </button>
  
      <p v-if="isVisible">✨ ¡Este mensaje solo se muestra si isVisible es true!</p>
    </div>

    <h2>Iteration 4: Lista de posts</h2>
  <ul>
    <li v-for="(post, index) in posts" :key="index">
      <h3>{{ post.title }}</h3>
      <p><strong>{{ post.description }}</strong></p>
      <p>{{ post.content }}</p>
    </li>
  </ul>

  <h2>Iteration 5: Cambiar color de fondo</h2>
  <div :style="{ backgroundColor: bgColor }" class="color-box">
    <p>Este fondo cambia al hacer clic</p>
    <button @click="toggleColor">Cambiar color</button>
  </div>

  </template>

<style scoped>
.color-box {
  padding: 1rem;
  margin-top: 1rem;
  border: 1px solid #ccc;
  transition: background-color 0.3s ease;
}
</style>