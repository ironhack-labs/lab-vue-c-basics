<script setup>
import { computed, ref } from 'vue'

// Bonus | Iteración 5: cambiar el fondo de un elemento al pulsar un botón.
const palette = [
  { name: 'Índigo', value: '#312e81', text: '#eef2ff' },
  { name: 'Esmeralda', value: '#065f46', text: '#ecfdf5' },
  { name: 'Ámbar', value: '#b45309', text: '#fffbeb' },
  { name: 'Rosa', value: '#9d174d', text: '#fdf2f8' },
  { name: 'Azul', value: '#1d4ed8', text: '#eff6ff' },
]

const currentIndex = ref(0)

// Propiedad computada que se enlaza al style del elemento
const currentColor = computed(() => palette[currentIndex.value])
const backgroundStyle = computed(() => ({
  backgroundColor: currentColor.value.value,
  color: currentColor.value.text,
}))

// Método que cambia la clase/propiedad y se dispara con @click
function changeColor() {
  currentIndex.value = (currentIndex.value + 1) % palette.length
}
</script>

<template>
  <section id="bonus" class="card">
    <header class="card-head">
      <span class="step">Bonus · Iteración 5</span>
      <h2>Cambiar el color de fondo al pulsar un botón</h2>
    </header>

    <p class="card-text">
      El método <code>changeColor()</code> avanza por una paleta y el
      <code>:style</code> enlazado repinta el bloque:
    </p>

    <!-- :style enlaza la propiedad computada al estilo en línea del elemento -->
    <div class="color-box" :style="backgroundStyle">
      <p class="color-name">{{ currentColor.name }}</p>
      <p class="color-hex">{{ currentColor.value }}</p>
    </div>

    <div class="actions">
      <button type="button" class="btn primary" @click="changeColor">
        Cambiar color de fondo
      </button>
      <span class="counter">Color {{ currentIndex + 1 }} de {{ palette.length }}</span>
    </div>
  </section>
</template>

<style scoped>
.color-box {
  display: grid;
  place-content: center;
  gap: 0.15rem;
  height: 9rem;
  margin: 0.5rem 0 1.25rem;
  border-radius: 14px;
  text-align: center;
  transition: background-color 0.35s ease, color 0.35s ease;
}

.color-name {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.color-hex {
  margin: 0;
  font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
  font-size: 0.85rem;
  opacity: 0.8;
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  flex-wrap: wrap;
}

.btn.primary {
  width: auto;
  height: auto;
  border-radius: 10px;
  padding: 0.65rem 1.1rem;
  font-size: 0.9rem;
}

.counter {
  color: var(--text-subtle);
  font-size: 0.82rem;
}
</style>
