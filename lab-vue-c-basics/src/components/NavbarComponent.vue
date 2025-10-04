<script></script>

<template>
  <header class="header">
    <nav class="navbar">
      <ul class="nav-list">
        <li><a href="#" class="link">Home</a></li>
        <li><a href="#" class="link">Page 1</a></li>
        <li><a href="#" class="link">Page 2</a></li>
        <li><a href="#" class="link">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

body {
  margin: 0;
  padding: 0;
}

.header {
  background-color: #BD9339;
  color: aliceblue;
  padding: 4%;
  font-family: "Poppins", sans-serif;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.link {
  color: aliceblue;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.1s ease;
  display: inline-block; 
}

.link:hover {
  transform: scale(1.03);
  color: #F7F4ED;
}
</style>
