<script setup>
// Iteración 1: componente Navbar reutilizable
const links = [
  { href: '#operaciones', label: 'Operaciones' },
  { href: '#condicional', label: 'Condicional' },
  { href: '#posts', label: 'Posts' },
  { href: '#bonus', label: 'Bonus' },
]
</script>

<template>
  <header class="navbar">
    <a class="brand" href="#top">
      <span class="brand-dot" aria-hidden="true"></span>
      Vue Basics
    </a>

    <nav class="nav-links" aria-label="Secciones del laboratorio">
      <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid var(--border);
  background: color-mix(in srgb, var(--bg) 85%, transparent);
  padding: 0.9rem clamp(1.25rem, 4vw, 2.5rem);
  backdrop-filter: blur(10px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text);
  font-weight: 700;
  letter-spacing: -0.01em;
  text-decoration: none;
}

.brand-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 20%, transparent);
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.nav-links a {
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  color: var(--text-muted);
  font-size: 0.85rem;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.nav-links a:hover,
.nav-links a:focus-visible {
  background: var(--surface-2);
  color: var(--text);
}

@media (max-width: 560px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
