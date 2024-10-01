<script setup></script>

<template>
  <footer class="container">
    <div class="contact centered-at-nucleo">
      <div class="footer-address">
        <p>Calle Almendralejo, 21</p>
        <p>Los Molinos</p>
        <p>Huesca</p>
      </div>
      <div class="footer-links">
        <a href="">link1</a>
        <a href="">link2</a>
        <a href="">link3</a>
      </div>
    </div>
  </footer>
</template>

<style scope>
.container {
  .contact {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .footer-address {
    display: flex;
    flex-direction: column;
  }
  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;

  }
}
</style>
