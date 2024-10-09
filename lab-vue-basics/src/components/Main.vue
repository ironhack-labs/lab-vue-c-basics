<script setup>

import { ref, reactive } from 'vue';
const inputString = ref("");
const reactVariable = reactive ({inputString: ""});

// Function to parse the inputstring to the <p>
const stringFunction = () => {
    let stringResult = reactVariable.inputString;
    return stringResult;
}
const trueFalse = false;
</script>

<template>
   <!-- textbox field for string input and <p> for output of reactive string-->
   <form>
            <label for="inputString">Your Input:   </label>
            <!-- String input------------>
            <input v-model="reactVariable.inputString" type="text" id="name" placeholder="Enter your name"> <br>
            <p>Your input is: {{ stringFunction() }} </p>
    </form>
    <!-- h3 to show/hide a text depending on value of const trueFalse-->
    <p>
        <h3 v-if="trueFalse">This is the text to show/hide</h3>
    </p>

</template>


<style scoped>

</style>