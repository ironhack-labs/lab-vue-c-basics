<script></script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="footer-text">
        © 2025 LAB-VUE-BASIC - Ironhack. Basic Vue.js Exercise
      </p>

      <div class="social-media">
        <a href="https://facebook.com" target="_blank" class="social-link">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" class="social-link">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" class="social-link">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background-color: #3d3b36;
  color: aliceblue;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  padding: 1rem 2rem;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; 
  margin: 0 auto; 
  width: 100%;
  flex-wrap: nowrap;
}

.footer-text {
  margin: 0;
  flex-shrink: 1;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
}

.social-media {
  display: flex;
  gap: 1.2rem;
  flex-shrink: 0; 
}

.social-link {
  color: aliceblue;
  font-size: 1.5rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-link:hover {
  transform: scale(1.2);
  color: antiquewhite;
}
</style>
