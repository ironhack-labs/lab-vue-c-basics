<script setup>
// Iteración 1: componente Footer reutilizable
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <p>Hecho con Vue 3 · Composition API</p>
    <p class="muted">LAB | Vue.js Basics · Ironhack · {{ year }}</p>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  background: var(--surface);
  padding: 1.75rem clamp(1.25rem, 4vw, 2.5rem);
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
}

.footer p {
  margin: 0.2rem 0;
}

.muted {
  color: var(--text-subtle);
}
</style>
