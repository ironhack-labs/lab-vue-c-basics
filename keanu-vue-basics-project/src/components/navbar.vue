<script setup>
import {reactive,computed} from 'vue';

const MyNameIs = reactive({
    name:'John',
    surname: 'Reeves'
    })

const fullName = computed(() => {
    return `${MyNameIs.name} ${MyNameIs.surname}`;
})

</script>

<template>
  <h1>This is the nav bar</h1>
  <h3>Challenge 2:</h3>
  <P>
    {{ 2 + 2 }}
  </P>
  <p>
    {{ fullName}}
  </p>
</template>

<style></style>
