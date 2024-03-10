<script setup>
import { ref } from 'vue'


</script>

<template>

<section id="bonusIt">
    <h1>HERE IS A TITLE</h1>
    <button>Click to change the color</button>
</section>


</template>

<style scope>

#bonusIt {
    padding: 20px;
}

#bonusIt h1{
    padding: 20px;
    background-color:  lightblue;
    width: 300px;
}

#bonusIt h1.active{
    padding: 20px;
    background-color:  lightblue;
    width: 300px;
}

</style>