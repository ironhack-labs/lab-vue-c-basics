<template>
    <div class="fullnameContainer">
        <p>{{ 2 + 2 }}</p>
        <p>My full name is: {{ fullName }}</p>
        <input v-model="myName.firstName" placeholder="First Name" />
        <input v-model="myName.lastName" placeholder="Last Name" />
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

const myName = reactive({
    firstName: 'Stivan',
    lastName: 'Ivanov'
});

const fullName = computed(() => {
    return `${myName.firstName} ${myName.lastName}`;
});
</script>

<style scoped>
.fullnameContainer {
    font-family: Arial, sans-serif;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 300px;
    margin: 5px auto;
}

input {
    display: block;
    margin: 10px 0;
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
}
</style>