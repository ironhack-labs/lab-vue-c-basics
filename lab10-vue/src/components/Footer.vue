<script setup>
import { ref } from 'vue'
const footerElements = ref([
  'Team',
  'Services',
  'About Us',
  'Contact Us',
  'Press',
  'Privacy Policy'
])
</script>

<template>
  <section>
    <ul class="footer">
      <li v-for="element in footerElements" :key="element">{{ element }}</li>
    </ul>
  </section>
</template>

<style scoped>
.footer {
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: lightgray;
  font-size: 14px;
  color: grey;
}
.footer li {
  list-style: none;
  cursor: pointer;
}
.footer li:hover {
  color: blue;
}
</style>
