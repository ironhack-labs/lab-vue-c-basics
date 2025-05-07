<script setup>
import {ref} from 'vue'
import { reactive, computed } from 'vue'

let num1 = ref();
let num2 = ref();
let suma = ref("__")

function calcularSuma() {
  suma.value = num1.value + num2.value;
}

const user = reactive({
  firstName: 'Juan',
  lastName: 'Pérez',
  age: computed(() => suma.value),
})



const Mensaje = computed(() => {
  return `Hola, ${user.firstName} ${user.lastName}. Tu resultado es ${user.age}.`
})



let mostrarMensaje = computed(() => suma.value > 50);


</script>

<template >

    <div class="info-container">

<h1>Calcula el resultado</h1>

<form @submit.prevent="calcularSuma" class="formulario">
      <div>
        <label for="num1">Número 1: </label>
        <input type="number" id="num1" v-model.number="num1" />
      </div>

      <div>
        <label for="num2">Número 2: </label>
        <input type="number" id="num2" v-model.number="num2" />
      </div>

      <button type="submit" class="calcular">Calcular</button>
      <h3>Resultado: {{ suma }}</h3>
    </form>
   

    <p>{{ Mensaje }}</p>


<h3 class="txt-msj">Si tu resultado es mayor a 50 aparecera el mensaje!</h3>


<p v-if="mostrarMensaje" class="msj-oculto">El resultado es mayor a 50!</p>
</div>
<template>
  
</template>

</template>

<style scoped>


.calcular{
margin-top: 10px;
margin-bottom: 10px;
}

.formulario{
    background-color: bisque;
    padding: 20px;
    width: 30%;
    margin: auto;
}

.info-container {
  width: 100%;
  margin: auto;
  
  text-align: center;
  
}

.info-container h1 {
 font-weight: bold;
  margin-bottom: 20px;
    font-size: 30px;
    
   
}
.info-container h3 {
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 20px;
    font-size: 15px;
    
}

.txt-msj {
  color: #39B983;
  font-weight: bold;
  font-size: 20px;
  margin-top: 0px;
}


.msj-oculto {
  color: green;
  font-weight: bold;
  font-size: 20px;
  margin-top: 0px;
}

</style>