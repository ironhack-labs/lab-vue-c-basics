<script setup>
</script>

<template>
    <footer class="footer">
    <div class="footer-left">
      <p>&copy; 2024 Mi Proyecto</p>
    </div>
    <div class="footer-right">
      <ul class="footer-links">
        <li><a href="#">Política de Privacidad</a></li>
        <li><a href="#">Términos de Servicio</a></li>
        <li><a href="#">Ayuda</a></li>
      </ul>
    </div>
  </footer>
  </template>


<style scoped>
    .footer {
  display: flex;
  justify-content: space-between; /* Distribuye el espacio entre la izquierda y la derecha */
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

/* Enlaces del Footer */
.footer-links {
  list-style: none;
  display: flex;
  gap: 15px; /* Espacio entre los enlaces */
  margin: 0;
  padding: 0;
}

.footer-links li a {
  color: white;
  text-decoration: none;
}

.footer-links li a:hover {
  text-decoration: underline;
}
</style>