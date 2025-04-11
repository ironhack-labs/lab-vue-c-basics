<template>
    <div>
      <h1>Suma de dos números:</h1>
      <input v-model="num1" placeholder="Introduce un número" />
      +
      <input v-model="num2" placeholder="Introduce otro número" />

    </div>
    <div>
        <h1>El resultado de la suma es: <b>{{ getResult() }}</b></h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DynamicString',
    data() {
      return {
        num1: 0,
        num2: 0
      }
    },
    methods: {
      getResult() {
        const number1 = Number(this.num1);
        const number2 = Number(this.num2);
        return `${number1 + number2}`;
      }
    }
  }
  </script>
  
  <style>
  /* Estilos opcionales aquí */
  </style>
  