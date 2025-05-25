<template>
  <footer class="footer">
    <div class="footer-content">
      <span>© {{ new Date().getFullYear() }} IronVueLab</span>
      <span class="footer-links">
        <a href="#">Contacto</a> | 
        <a href="#">Política de Privacidad</a>
      </span>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
.footer {
  background: #2c3e50;
  color: #fff;
  padding: 18px 0;
  text-align: center;
  border-radius: 8px;
  margin-top: 32px;
  font-size: 1rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.footer-links a {
  color: #00b894;
  text-decoration: none;
  margin: 0 4px;
  transition: text-decoration 0.2s;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>