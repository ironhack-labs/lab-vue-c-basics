<script setup>
import { ref } from 'vue'

// Iteración 4: lista de posts guardada en un ref() y pintada con v-for.
// Cada post incluye title, description y content (mínimo tres posts).
const posts = ref([
  {
    id: 1,
    title: 'Qué es la Composition API',
    description: 'La forma moderna de escribir componentes en Vue 3.',
    content:
      'Con <script setup> declaramos estado reactivo con ref() y computed() y exponemos las variables directamente al template, sin escribir un objeto setup() con return.',
  },
  {
    id: 2,
    title: 'Reactividad sin misterio',
    description: 'ref() guarda tu valor y nos avisa cuando cambia.',
    content:
      'Un ref() es un envoltorio reactivo: en JavaScript se accede con .value y en el template Vue lo desenvuelve por ti automáticamente.',
  },
  {
    id: 3,
    title: 'Directivas que ahorran código',
    description: 'v-if, v-show y v-for sustituyen montañas de JavaScript.',
    content:
      'v-if decide si un elemento existe en el DOM, v-show solo lo oculta con CSS y v-for repite una plantilla por cada elemento de una colección.',
  },
  {
    id: 4,
    title: 'Estilos dinámicos con class y style',
    description: 'Cambiar colores al pulsar un botón, sin tocar el CSS desde JavaScript.',
    content:
      'class y style aceptan objetos y expresiones reactivas. Un método que cambia una variable puede repintar la interfaz sin manipular el DOM a mano.',
  },
])

</script>

<template>
  <section id="posts" class="card">
    <header class="card-head">
      <span class="step">Iteración 4</span>
      <h2>Lista de elementos con <code>v-for</code></h2>
    </header>

    <p class="card-text">
      Los posts viven en un <code>ref()</code> y se recorren dentro del <code>v-for</code>:
    </p>

    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post">
        <span class="post-id">#{{ post.id }}</span>
        <h3>{{ post.title }}</h3>
        <p class="post-description">{{ post.description }}</p>
        <p class="post-content">{{ post.content }}</p>
      </li>
    </ul>

    <p class="hint">Total: <strong>{{ posts.length }}</strong> posts. Añade uno al array y la lista se actualiza sola.</p>
  </section>
</template>

<style scoped>
.post-list {
  display: grid;
  gap: 0.9rem;
  margin: 0.5rem 0 1.25rem;
  padding: 0;
  list-style: none;
}

.post {
  position: relative;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-2);
  padding: 1.1rem 1.25rem;
}

.post-id {
  position: absolute;
  top: 1rem;
  right: 1.15rem;
  font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
  font-size: 0.72rem;
  color: var(--text-subtle);
}

.post h3 {
  margin: 0 0 0.35rem;
  padding-right: 2rem;
  font-size: 1rem;
  letter-spacing: -0.01em;
}

.post-description {
  margin: 0 0 0.5rem;
  color: var(--accent);
  font-size: 0.86rem;
}

.post-content {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

.hint strong {
  color: var(--text);
}
</style>
