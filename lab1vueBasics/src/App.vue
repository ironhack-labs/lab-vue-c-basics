<script setup>
import { ref } from 'vue'
  const cadena = 2+2;
  const vBoolean = ref(true);
  const buttonMsgPush = ref('Click me!');
  const buttonIsPushed = ref(false);
  const buttonColor = ref('aqua');
  const postsList = [
  { title: 'Tecnologías del futuro', description: 'Avances en inteligencia artificial', content: 'La IA está revolucionando múltiples industrias, desde la salud hasta la automoción.' },
  { title: 'Viajes espaciales', description: 'La nueva era de la exploración espacial', content: 'Empresas privadas están liderando la carrera por la colonización de Marte.' },
  { title: 'Energía renovable', description: 'El auge de las fuentes limpias', content: 'La energía solar y eólica son ahora más accesibles y eficientes que nunca.' },
  ];

  function DataReading(variable) {
    let variableReactive = variable;
    return variableReactive;
  }

  function togglePush() {
    buttonIsPushed.value = !buttonIsPushed.value;

    buttonMsgPush.value = buttonIsPushed.value ? 'Clicked' : 'Click me';

    buttonColor.value = buttonIsPushed.value ? 'green' : 'aqua';
  }

</script>

<template>
  <nav>
    {{DataReading(cadena)}}
    <h2>Most Famous postsList</h2>
    <p v-for="post in postsList">
      <br>
      {{ post.title }} 
      <br>
      {{ post.description }}
      <br>
      {{ post.content }}
    </p>

    <div>
      <!-- si el boton lo pulsan cambia el msg a la variable creada COMO LO HAGO y que al pulsar el boton cambie de color -->
      <button @click="togglePush" :style="{backgroundColor: buttonColor}">{{buttonMsgPush}}</button>
    </div>
  </nav>
  <footer>
    <p v-if="!vBoolean"></p>
    <p v-else>Is true</p>
  </footer>
</template>

<style scoped>

</style>
