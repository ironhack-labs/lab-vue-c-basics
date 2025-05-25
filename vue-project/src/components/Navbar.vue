<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <span>🌟</span>
      <span class="navbar-title">IronVueLab</span>
    </div>
    <ul class="navbar-links">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Posts</a></li>
      <li><a href="#">Acerca de</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2c3e50;
  color: #fff;
  padding: 12px 32px;
  border-radius: 8px;
  margin-bottom: 24px;
}

.navbar-logo {
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bold;
}

.navbar-logo span:first-child {
  font-size: 1.5rem;
  margin-right: 8px;
}

.navbar-title {
  letter-spacing: 1px;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
}

.navbar-links a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.navbar-links a:hover {
  color: #00b894;
}
</style>