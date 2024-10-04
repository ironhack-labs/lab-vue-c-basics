<script setup>
</script>

<template>
 <nav class="navbar">
    <div class="navbar-logo">
      <h3>Mi Navbar</h3>
    </div>
    <ul class="navbar-links">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Acerca de</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
  </template>

  <style scoped>
.navbar {
  display: flex;
  justify-content: space-between; /* Distribuye el espacio entre logo y enlaces */
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

/* Logo del Navbar */
.navbar-logo h3 {
  margin: 0;
}

/* Enlaces del Navbar */
.navbar-links {
  list-style: none;
  display: flex;
  gap: 15px; /* Espacio entre los enlaces */
  margin: 0;
  padding: 0;
}

.navbar-links li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.navbar-links li a:hover {
  text-decoration: underline;
}
</style>