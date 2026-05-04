<script setup></script>

<template>
  <footer class="footer">

    <!-- Nombre -->
    <div class="footer-brand">
      Álvaro
    </div>

    <!-- Links -->
    <ul class="footer-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

    <!-- Redes -->
    <div class="footer-social">
      <a href="#">GitHub</a>
      <a href="#">LinkedIn</a>
      <a href="#">Twitter</a>
    </div>

    <!-- Copyright -->
    <p class="footer-text">© 2026 Álvaro. All rights reserved.</p>

  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid #ddd;
  padding: 30px 20px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

/* Marca */
.footer-brand {
  font-weight: bold;
  font-size: 18px;
}

/* Links */
.footer-links {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.footer-links a {
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  transition: opacity 0.2s ease;
}

.footer-links a:hover {
  opacity: 0.6;
}

/* Redes */
.footer-social {
  display: flex;
  gap: 15px;
}

.footer-social a {
  text-decoration: none;
  font-size: 14px;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.footer-social a:hover {
  opacity: 1;
}

/* Texto */
.footer-text {
  font-size: 12px;
  opacity: 0.6;
}
</style>
