<template>
  <nav>
    <img
      router-link
      to="/"
      width="40px"
      src="/Users/jenniferw/Documents/Jennifer-Repository-Ironhack/vue/lab-vue-c-basics/lab-vue-c-basics/src/components/icons/bird_2.jpg"
      alt="logo"
    />
    <ul>
      <li><a href="./">Home</a></li>
      <li><a href="./about">About</a></li>
      <li><a href="./contact">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  background-color: lightcyan;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: darkblue;
  gap: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
nav img {
  margin-left: 0.5rem;
  border-radius: 50%;
}

nav ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 1rem;
}

a {
  text-decoration: none;
  color: darkblue;
  font-weight: 500;
}
</style>
