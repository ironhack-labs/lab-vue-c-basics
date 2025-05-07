<template>
<footer>
  <ul>
    <h4>Company</h4>
    <li><a href="/about-us">About Us</a></li>
    <li><a href="/services">Our Services</a></li>
    <li><a href="/privacy-policy">Privacy Policy</a></li>
  </ul>
  <ul>
    <h4>Get Help</h4>
    <li><a href="/faq">FAQ</a></li>
    <li><a href="/shipping-returns">Shipping and Returns</a></li>
    <li><a href="/contact">Contact Us</a></li>
  </ul>
  <ul>
    <h4>Online Shop</h4>
    <li><a href="/decoration">Decoration</a></li>
    <li><a href="/kitchen">Kitchen Appliances</a></li>
    <li><a href="/furniture">Furniture</a></li>
  </ul>
  <ul>
    <h4>Follow us</h4>
    <li><img height=12px src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="twitter icon"></li>
    <li><img height=12px src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Instagram-Gradient-Logo-PNG.png" alt="instagram icon"></li>
  </ul>
  </footer>
</template>

<script setup>

</script>

<style scoped>
  footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  background-color: lightcyan;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 300;
  color: darkblue;
  gap: 2rem;
  padding-bottom: 0.5rem;
  }

  ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 0.5rem;
  }

  li a {
    font-size: 10px;
    list-style: none;
    text-decoration: none;
    color: darkblue;
    font-weight: 400;
  };

  ul h5 {
    font-size: 14px;
    font-weight: 500;
  }
</style>