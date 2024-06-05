<template>
    <div class="comps">
    <p>{{ 2+2 }}</p>
    <p>My full name is: {{ fullName() }}</p>
    </div>
</template>


<script setup>
import { reactive } from "vue";


const myName = reactive({
    firstName: 'Nenad',
    lastName: 'Jovanov'
})

let fullName = () => {
    return `${myName.firstName} ${myName.lastName}`
}
</script>


<style scoped></style>