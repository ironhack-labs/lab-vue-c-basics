<script setup>
import { ref } from 'vue'

// Iteración 3: un booleano definido en <script setup> controla la visibilidad.
const isVisible = ref(true)
const directive = ref('v-if') // para comparar v-if con v-show

function toggle() {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <section id="condicional" class="card">
    <header class="card-head">
      <span class="step">Iteración 3</span>
      <h2>Mostrar un elemento solo si es <code>true</code></h2>
    </header>

    <p class="card-text">
      El booleano <code>isVisible</code> vale <strong>{{ isVisible }}</strong> ahora mismo.
    </p>

    <div class="directive-switch" role="group" aria-label="Directiva a mostrar">
      <button
        type="button"
        class="tab"
        :class="{ active: directive === 'v-if' }"
        @click="directive = 'v-if'"
      >
        v-if
      </button>
      <button
        type="button"
        class="tab"
        :class="{ active: directive === 'v-show' }"
        @click="directive = 'v-show'"
      >
        v-show
      </button>
    </div>

    <!-- El mismo booleano alimenta las dos directivas: así se ve la diferencia -->
    <div class="demo-box">
      <p v-if="isVisible && directive === 'v-if'" class="shown">
        Soy un bloque <code>v-if</code> y estoy en el DOM.
      </p>
      <p v-show="isVisible && directive === 'v-show'" class="shown">
        Soy un bloque <code>v-show</code> y estoy en el DOM.
      </p>
      <p v-if="!isVisible || directive === 'v-show'" class="hidden-note">
        El bloque con la directiva seleccionada no se está mostrando.
      </p>
    </div>

    <button type="button" class="btn primary" @click="toggle">
      {{ isVisible ? 'Ocultar elemento' : 'Mostrar elemento' }}
    </button>

    <p class="hint">
      <code>v-if</code> crea y destruye el elemento; <code>v-show</code> solo cambia
      <code>display</code>. Abre las DevTools para verlo.
    </p>
  </section>
</template>

<style scoped>
.directive-switch {
  display: inline-flex;
  gap: 0.25rem;
  margin: 0.25rem 0 1rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--surface-2);
  padding: 0.25rem;
}

.tab {
  border: 0;
  border-radius: 8px;
  background: transparent;
  padding: 0.35rem 0.85rem;
  color: var(--text-muted);
  font: inherit;
  font-size: 0.85rem;
  cursor: pointer;
}

.tab.active {
  background: var(--accent);
  color: #06281d;
  font-weight: 600;
}

.demo-box {
  border: 1px dashed var(--border-strong);
  border-radius: 12px;
  padding: 1rem;
  min-height: 4.5rem;
  margin-bottom: 1.25rem;
}

.shown {
  margin: 0;
  border-radius: 8px;
  background: color-mix(in srgb, var(--accent) 16%, transparent);
  padding: 0.65rem 0.85rem;
  color: var(--text);
  font-size: 0.92rem;
}

.hidden-note {
  margin: 0;
  color: var(--text-subtle);
  font-size: 0.85rem;
}

.btn.primary {
  width: auto;
  height: auto;
  border-radius: 10px;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
}

.hint code {
  border-radius: 4px;
  background: var(--surface-2);
  padding: 0.05rem 0.3rem;
  color: var(--accent);
}
</style>
