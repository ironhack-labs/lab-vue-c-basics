<script setup>

import { ref } from "vue"; 

const aeropuertosGrandes  = ref([
  { title: `Adolfo Suárez Madrid-Barajas`,
    description: `LEMD`,
    content: `Pasajeros anuales: 60.220.984`,
  },
  { title: `Josep Tarradellas Barcelona-El Prat`,
    description: `LEBL`,
    content: `Pasajeros anuales: 49.909.544 `,
  },
  { title: `Palma de Mallorca`,
    description: `LEPA`,
    content: `Pasajeros anuales: 31.105.987`,
  },
])


</script>

<template>
  <footer>

    <ul>
        <li v-for="character in aeropuertosGrandes" :key="character.title">
            {{ `${character.title}. Código OACI: ${character.description}. ${character.content}` }}
        </li>
    </ul>

    <p>Esto es el final</p>
  </footer>

  
</template>

<style scoped>
</style>