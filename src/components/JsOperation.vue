<script setup>
import { computed, ref } from 'vue'

// Iteración 2: mostrar el resultado de operaciones de JavaScript en el HTML.
// Variables reactivas que alimentan las operaciones.
const product = ref('Teclado mecánico')
const price = ref(24.99)
const quantity = ref(3)

// compute() devuelve un string construido a partir de otras variables reactivas.
const orderSummary = computed(
  () => `${quantity.value} × ${product.value} → ${(price.value * quantity.value).toFixed(2)} €`,
)

// Otra operación calculada: 10 % de descuento sobre el total.
const totalWithDiscount = computed(
  () => (price.value * quantity.value * 0.9).toFixed(2),
)

function increase() {
  quantity.value += 1
}

function decrease() {
  quantity.value = Math.max(1, quantity.value - 1)
}
</script>

<template>
  <section id="operaciones" class="card">
    <header class="card-head">
      <span class="step">Iteración 2</span>
      <h2>Operaciones de JavaScript en el template</h2>
    </header>

    <p class="card-text">
      — Una operación matemática tal cual, dentro de las llaves:
    </p>
    <p class="math">2 + 2 = <strong>{{ 2 + 2 }}</strong></p>

    <p class="card-text">
      — Un string devuelto por una función (<code>computed</code>) que lee variables reactivas:
    </p>
    <p class="computed-line">{{ orderSummary }}</p>
    <p class="computed-line subtle">
      Con un 10 % de descuento se queda en <strong>{{ totalWithDiscount }} €</strong>
    </p>

    <div class="controls">
      <button type="button" class="btn" @click="decrease" aria-label="Quitar una unidad">−</button>
      <span class="quantity">
        Cantidad: <strong>{{ quantity }}</strong> · Precio unidad: {{ price.toFixed(2) }} €
      </span>
      <button type="button" class="btn" @click="increase" aria-label="Añadir una unidad">+</button>
    </div>

    <p class="hint">
      Cambia la cantidad con los botones: los valores se recalculan solos porque son reactivos.
    </p>
  </section>
</template>

<style scoped>
.math {
  margin: 0.25rem 0 1.5rem;
  font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
  font-size: 1.1rem;
}

.math strong {
  font-size: 1.35rem;
  color: var(--accent);
}

.computed-line {
  margin: 0.25rem 0;
  border-left: 3px solid var(--accent);
  border-radius: 0 8px 8px 0;
  background: var(--surface-2);
  padding: 0.7rem 0.9rem;
  font-family: ui-monospace, 'Cascadia Code', Consolas, monospace;
  font-size: 0.95rem;
}

.computed-line.subtle {
  border-left-color: var(--border-strong);
  color: var(--text-muted);
}

.controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.btn {
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--border-strong);
  border-radius: 10px;
  background: var(--surface-2);
  color: var(--text);
  font-size: 1.15rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}

.btn:hover,
.btn:focus-visible {
  border-color: var(--accent);
  background: color-mix(in srgb, var(--accent) 18%, var(--surface-2));
}

.quantity {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.hint {
  margin: 1rem 0 0;
  color: var(--text-subtle);
  font-size: 0.8rem;
}
</style>
