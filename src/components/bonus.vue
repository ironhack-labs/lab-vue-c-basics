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
        <h1 :class="{ 'blue': isBlue, 'red': isRed }" @click="toggleColor">Click to change the color</h1>
    </section>


</template>

<style scope>
#bonusIt {
    padding: 20px;
}

#bonusIt h1 {
    padding: 20px;
    width: 200px;
    border-radius: 110px;
    text-align: center;
    color: #F2F2F2;
    font-weight: bold;
}


#bonusIt h1.blue {
    background-color: lightskyblue;
    cursor: pointer;
}

#bonusIt h1.red {
    background-color: coral;
    cursor: pointer;
}
</style>