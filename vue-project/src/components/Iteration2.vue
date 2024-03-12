<template>
    <div>
      <p>Resultado de la operacion matematica: {{ 2 + 2 }}</p>
      <p>Resultado de la funcion: {{ computedString }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        variable1: 'Hola',
        variable2: 'Mundo'
      };
    },
    computed: {
      computedString() {
        return this.variable1 + ' ' + this.variable2;
      }
    }
  }
  </script>

  