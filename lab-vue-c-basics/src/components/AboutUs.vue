<script setup>
import { ref } from 'vue'

const showMessage = ref(false)

function toggleMessage() {
    showMessage.value = !showMessage.value
}
</script>

<template>
  <div class="container">
    <h1> About Us </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem nunc, accumsan at maximus at, accumsan nec neque. Pellentesque lectus felis, feugiat vel elementum ac, lacinia ac ipsum. Nam suscipit sed sem ultrices cursus. Curabitur vitae pulvinar mauris. Mauris nec dolor congue, rhoncus ligula nec, bibendum arcu. Fusce non nulla vulputate, fringilla lorem ut, tempor risus. Morbi bibendum lobortis ipsum at malesuada. Sed commodo vel nunc at porttitor.</p>
    <button class="btn" @click="toggleMessage">Click here to learn more!</button>
    <p v-if="showMessage">Praesent dictum arcu a sapien bibendum condimentum. Quisque dignissim interdum dictum. Quisque ut accumsan sem. Cras euismod nisl eget volutpat ullamcorper. Aliquam sagittis facilisis sollicitudin. Maecenas a malesuada dolor. Integer pellentesque, libero id laoreet ornare, dolor orci semper dolor, sed mattis velit magna nec purus. Suspendisse potenti. Proin egestas scelerisque nunc ut egestas. Nam non posuere augue. Nulla mattis quis neque a fringilla. Ut blandit turpis quam, at consectetur urna congue aliquam. Maecenas consectetur, ligula sed rutrum porta, eros eros pulvinar purus, at accumsan augue nibh et leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tellus sit amet sapien malesuada elementum. Curabitur porta sagittis porta.</p>
  </div>
</template>

<style scoped>
.container {
    text-align: justify;
    background-color: #919191;
    color: black;
    padding: 20px;
    color: white;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

.btn{
    background-color: #333;
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 2px;
}

.btn:hover{
    background-color: #555;
}
</style>