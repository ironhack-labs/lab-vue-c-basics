<script setup>

import { reactive } from "vue";

const AeropuertosEsp = reactive ({
  categoría: `Aeropuertos Españoles`,
  tráfico: `más de 10 M pax`,
  aeropuertos: [
  `Adolfo Suárez Madrid-Barajas`,
  `Josep Tarradellas Barcelona-El Prat`,
  `Palma de Mallorca`,
  `Málaga-Costa del Sol`,
  `Alicante-Elche Miguel Hernández`,
  `Gran Canaria`,
  `Tenerife Sur`
  ]
})
function getNumberOfAeropuertos(AeropuertosEsp) {
  return `${AeropuertosEsp.aeropuertos.length}`
  }

  import { ref } from "vue";
  const displayForm = ref(true)

</script>

<template>
 <h1>Sabes sumar?
      </h1>
      <span>Sumatorio de dos más dos casi siempre es {{ 2+2 }}</span>
      <p>Hay {{ getNumberOfAeropuertos(AeropuertosEsp)}} aeropuertos en España con más de diez millones de pasajeros anuales</p>
      <form v-if="displayForm" action="url">
        <label for="numero">
          <input 
          type="number"
          placeholder="Selecciona un número">
        </label>
        <label for="otroNumero">
          <input 
          type="number"
          placeholder="Selecciona otro número">
        </label>
      </form>
  
</template>

<style scoped>

</style>