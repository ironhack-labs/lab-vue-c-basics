<script setup>
import {ref} from 'vue'

const elementoRemovible = ref('show')
const quitarElemento = ()=> {
    if (elementoRemovible.value === 'show'){
        elementoRemovible.value = ''
    }
    else{
        elementoRemovible.value = 'show'
    }
} 


</script>

<template>
  <article v-show = "elementoRemovible === 'show'"> Escondeme </article>
  <button @click=quitarElemento>Esconder</button>
</template>

<style scoped>
article{
  text-align: center;
  font-size: 30px;
  padding-top: 50px;
}

button{
    background-color: #292E47;
    color: #F2F4FC;
    font-size: 25px;
    border: none;
    padding: 5px;
    margin-left: 15vw;

}
</style>


