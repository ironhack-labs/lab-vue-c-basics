<script setup>
import { ref } from 'vue';

const isBlue = ref(true);
const isRed = ref(false);


function toggleColor() {
    isBlue.value = !isBlue.value;
    isRed.value = !isRed.value;
}

</script>

<template>

    <section id="bonusIt">
        <h1 :class="{ 'blue': isBlue, 'red': isRed }">HERE IS A TITLE</h1>
        <button @click="toggleColor">Click to change the color</button>
    </section>


</template>

<style scope>
#bonusIt {
    padding: 20px;
    margin-bottom: 100px;
}

#bonusIt h1 {
    padding: 20px;
    background-color: lightblue;
    width: 300px;
}

#bonusIt h1.active {
    padding: 20px;
    background-color: lightblue;
    width: 300px;
}

#bonusIt h1.blue {
    background-color: lightblue;
}

#bonusIt h1.red {
    background-color: coral;
}
</style>