<template>
    <footer class="footer">
      <p>{{ author_info.name }}</p>
      <p>2+2 = {{ 2+2 }}</p>
      <p v-if="edad">Tengo {{ author_info.age }} años</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
    data() {
      return {
        copyright_dani: "© 2023 Dani Fernández.",
        author_info: {
            name: "Dani Fernández",
            age: "32",
            country: "Spain",
            hobbies: ["coding", "gaming", "reading"],
            languages: ["Spanish", "English", "French"],
            skills: ["JavaScript", "Vue.js", "Node.js"],
        },
        edad: true,
      };
    },
  };
  </script>
  <style scoped>
    footer{
        background-color:lightblue;
    }
  </style>