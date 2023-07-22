<script setup>
import { ref } from 'vue';

const numero = (2);
const numerodois = (2);
var resultado = ref('0');
const fundo =ref("fundo");

const soma = function() {
  resultado.value = numero + numerodois;
  console.log(resultado);
}

const troca = function () {
 fundo.value = ("cor");
}

const reset = function () {
  fundo.value = ("fundo");
  resultado.value = ("0");
  
}

</script>

<template>

  <div :class="fundo">
  <button @click="soma">Soma</button>
  <p>{{ resultado }}</p>
  <p v-if="resultado == 4">boolean Funcionou!</p>
<button @click="troca">troca de cor</button>
<button @click="reset">Reset</button>

</div>
</template>

<style>

.fundo {
  background-color: aqua;
}

.cor {
  background-color: blueviolet;
}

</style>
