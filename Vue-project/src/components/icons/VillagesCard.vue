<script setup>
import { ref } from 'vue'

const isFrogMode = ref(false)

function toggleFrogMode() {
  isFrogMode.value = !isFrogMode.value
}

const villages = [
  { nom: 'Konoha (Feuille)', color: '#27ae60' },
  { nom: 'Suna (Sable)', color: '#e1b12c' },
  { nom: 'Kiri (Brume)', color: '#2980b9' },
  { nom: 'Kumo (Nuage)', color: '#8e44ad' },
  { nom: 'Iwa (Roche)', color: '#7f6a52' },
]
const index = ref(0)

function nextVillage() {
  index.value = (index.value + 1) % villages.length
}
</script>

<template>
  <div class="card" :class="{ frog: isFrogMode }">
    <h2>Naruto Uzumaki</h2>
    <p>{{ isFrogMode ? 'Mode Grenouille activé ! 🐸' : 'Ninja de Konoha' }}</p>
    <button @click="toggleFrogMode">
      {{ isFrogMode ? 'Désactiver' : 'Activer' }} le Mode Grenouille    
    </button>
  </div>

  <div class="card" :style="{ backgroundColor: villages[index].color }">
    <h2>{{ villages[index].nom }}</h2>
    <button @click="nextVillage">Village caché suivant</button>
  </div>
</template>

<style scoped>
.card {
  background-color: #f5a623;
  padding: 20px;
  margin: 16px;
  border-radius: 8px;
  color: white;
  transition: background-color 0.3s;
}

.card.frog {
  background-color: #d35400;
}
</style>