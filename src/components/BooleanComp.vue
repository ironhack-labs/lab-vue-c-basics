<script setup>
import { ref } from 'vue';

const showDiv = ref(true);

function showDivFunc() {
    showDiv.value = !showDiv.value;
};

</script>

<template>
    <div v-show="showDiv">
        <h3>This div is showing becuase the variable is true</h3>
    </div>
    <button @click="showDivFunc()" :class="`${showDiv ? 'show' : 'no-show'}`">{{ showDiv ? "Hide Div" : "ShowDiv"}}</button>
</template>

<style scoped>
div {
    border: 2px solid burlywood;
    border-radius: 5px;
    box-shadow: rgba(119, 136, 153, 0.049) 1px 5px;
}

h3 {
    color: burlywood;
}

button.no-show {
    background-color: blue;
    border: none;
    color: aliceblue;
    font-weight: bold;
    padding: 10px 20px;
    cursor: pointer;
}

button.show {
    background-color: rgb(255, 132, 0);
    border: none;
    color: aliceblue;
    font-weight: bold;
    padding: 10px 20px;
    margin: 10px 0;
    cursor: pointer;
}
</style>