<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import JsOperation from './components/JsOperation.vue'
import ConditionalElement from './components/ConditionalElement.vue'
import PostList from './components/PostList.vue'
import ColorChanger from './components/ColorChanger.vue'
</script>

<template>
  <div id="top" class="app-shell">
    <!-- Iteración 1: Navbar y Footer importados en App.vue -->
    <Navbar />

    <main class="main">
      <header class="hero">
        <p class="eyebrow">LAB · Vue.js Basics</p>
        <h1>Composition API en práctica</h1>
        <p class="lead">
          Proyecto base con <code>&lt;script setup&gt;</code>, operaciones de JavaScript en el
          HTML, renderizado condicional, listas con <code>v-for</code> y binding dinámico de
          estilos.
        </p>
        <ul class="hero-badges">
          <li>Iteración 1 · Navbar + Footer</li>
          <li>Iteración 2 · Operaciones y computed</li>
          <li>Iteración 3 · v-if / v-show</li>
          <li>Iteración 4 · v-for</li>
          <li>Bonus · Color dinámico</li>
        </ul>
      </header>

      <JsOperation />
      <ConditionalElement />
      <PostList />
      <ColorChanger />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.app-shell {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  flex: 1;
  padding: 2rem 1.25rem 4rem;
}

.hero {
  padding: 2.5rem 0 1.5rem;
}

.eyebrow {
  margin: 0 0 0.75rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
}

.hero h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.lead {
  max-width: 60ch;
  margin: 1rem 0 1.5rem;
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.65;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.hero-badges li {
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  padding: 0.35rem 0.8rem;
  font-size: 0.78rem;
  color: var(--text-muted);
}

code {
  border-radius: 6px;
  background: var(--surface-2);
  padding: 0.1rem 0.35rem;
  color: var(--accent);
  font-size: 0.9em;
}
</style>
