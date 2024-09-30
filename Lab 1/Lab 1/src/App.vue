<script setup>
import UniversalNavBar from './components/UniversalNavBar.vue';
import UniversalFooter from './components/UniversalFooter.vue';
import { ref } from 'vue';
import ListOfThings from './components/ListOfThings.vue';

const number1 = ref(6)
const number2 = ref(4)

const seMuestra = ref(true)
const valor = ref("Soy un valor")

const backgroundColor = ref('white');
const colors = ref(['lightpink', 'lightblue', 'lightgreen', 'lightyellow', 'lightcoral']);

function printString() {
  const result = number1.value * number2.value;
  return `El resultado de ${number1.value} * ${number2.value} es ${result} (ambos números se almacenan como constantes "ref()")`;
}

function changeBackColor() {

  if (colors.value.length === 0) {
    colors.value = ['lightpink', 'lightblue', 'lightgreen', 'lightyellow', 'lightcoral'];
  }

  let RandomValue = Math.floor(Math.random() * colors.value.length);
  backgroundColor.value = colors.value[RandomValue];
  colors.value.splice(RandomValue, 1);
}

</script>

<template>
  <div>
    <UniversalNavBar></UniversalNavBar>
    <main id="main" :style="{ backgroundColor: backgroundColor }">
        <h1>¡Bienvenido a Mi Proyecto!</h1>
        <br><br>
        <p>Esta es la primera iteración del primer lab de Vue.</p>
        <br>
        <p>{{ 2+2 }} Está escrito como 2+2 y debería aparecer un 4</p>
        <br>
        <p>{{ printString() }}</p>
        <br>
        <p v-if="seMuestra">{{ valor }}</p>
        <br>
        <button @click="seMuestra = !seMuestra">Este botón hace mostrarse y ocultarse al valor</button>
        <br><br>
        <ListOfThings></ListOfThings>
        <br>
        <button @click="changeBackColor()">Este botón hace cambiar el color del fondo</button>
        <br><br>
        <h6>He añadido una pequeña lista de colores y una lógica que elimina los colores una vez se usan,
           para que no se repitan dos veces seguidas</h6>
      </main>
    <UniversalFooter></UniversalFooter>
  </div>
</template>

<style scoped>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  padding-top: 120px;
  padding-bottom: 150px;
  
}
</style>
