<script setup></script>

<template>
  <nav class="navbar">

    <!-- Nombre / marca personal -->
    <div class="brand">
      <a href="#">Álvaro</a>
    </div>

    <!-- Navegación -->
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid #ddd;
}

/* Marca personal */
.brand a {
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}

/* Links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
  padding: 0;
  margin: 0;
}

.nav-links a {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.nav-links a:hover {
  opacity: 0.6;
}
</style>
