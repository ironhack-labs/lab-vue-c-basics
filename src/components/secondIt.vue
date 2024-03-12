<script setup>
import { ref } from 'vue'

const sum = ref(0)

function _getString(){
    sum.value = 2 + 2
}

</script>

<template>

    <section id="secondIt">
        <h1> {{ sum }}</h1>
        <button @click="_getString">Get Number</button>
    </section>


</template>

<style scope>

#secondIt {
    padding: 20px;
 /*   border: 1px solid brown;*/
}

</style>