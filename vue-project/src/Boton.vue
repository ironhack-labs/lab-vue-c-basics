<script setup>
import { ref } from 'vue';

const fondo = ref("white")
const Frase = ref("Don't press the button")
function changeFrase (){
    Frase.value = "Why did you do that?"
    fondo.value = "black"
    }

</script>

<template>
    <h4 
    class="Frase"
    :style="{ backgroundColor: fondo, color: 'Blue' }"
    > 
    {{Frase}}</h4>
    <button @click="changeFrase">Pressing anyway</button>

</template>


<style>
.Frase {
    color: rgb(74, 24, 148);
}
</style>
