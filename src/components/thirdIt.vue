<script setup>
import { ref } from 'vue';
  
  const showElement = ref(true);
  
  const toggleElement = () => {
    showElement.value = !showElement.value;
  };

</script>

<template>

<section id="thirdIt">
    <h1 v-if="showElement">Hello! click to hide this message</h1>
    <button @click="toggleElement">Show/hide the Element</button>
</section>

    

</template>

<style scope>

#thirdIt {
    padding: 20px;
 /* border: 1px solid lightsalmon;*/
}

</style>