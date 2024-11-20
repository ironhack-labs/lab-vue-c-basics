<script setup>

import { ref, reactive } from 'vue';

const sumatory = ref(0);
const backgroundColorTarget = ref(null);
const arrayOfStrings = ['hola','mama','carcayu','perro','anchoa'];
const currentString = ref('A NEW STRING WILL BE PRINTED HERE');
const booleanVar = ref(false);
const listOfPosts = reactive([
    {title: 'Que prefieres', description: 'Una caja de valeriana o una tortilla de patatas', content: 'Dime, tu que prefieres'},
    {title: 'Entre 60 y 80' , description: 'Y yo volé de él', content: 'Hay que saber subir y bajar, espero que se mejore'},
    {title: 'El Chuky de Cieza', description: 'Cuando quieras pasas a buscarme', content: 'Te voy a enchar bien enganchau'}
]);

function functionSum() {
    sumatory.value = 2+2;
}

function changeBack() {
    if (backgroundColorTarget.value) {
        backgroundColorTarget.value.style.backgroundColor = '#F56644';
    }
}

function printString() {
    booleanVar.value = true;
    currentString.value = arrayOfStrings[1];
}

functionSum();

</script>

<template>
    <section>
        <h1>LAB 2 | VUE 3 | BASICS</h1>
        <p>A NEW STRING WILL BE PRINTED HERE</p>
        <div>
            <p>{{ currentString }}</p>
            <button @click="printString">NEW STRING GENERATOR</button>
            <button @click="changeBack" >NEW CHANGE BACKGROUND COLOR</button>
        </div>
        <p>(and the result of the lab sum is: {{ sumatory }} )</p>
        <p v-if="booleanVar">(and the hidden message is this one, shown when clicking the button :D )</p>
    </section>
    <div>
        <ul ref='backgroundColorTarget' id="list-of-posts">
            <li v-for="post in listOfPosts" :key="post.title">
                <h2>{{ post.title }}</h2>
                <p>{{ post.description }}</p>
                <p>{{ post.content }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>

section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    flex-grow: 1;
    padding: 50px;
    text-align: center;
    background-color: ghostwhite;
}

section p {
    font-weight: 600;
    font-size: 24px;
}

section div {
    display: flex;
    flex-direction: column;
    gap: 25px;
    background-color: rgb(211, 219, 233,0.5);
    width: 50%;
    padding: 50px;
    border-radius: 20px;
}

section div p {
    font-weight: 400;
    font-size: 16px;
}

section h1 {
    font-size: 36px;
    font-weight: 300;
}

section button {
    border: 0;
    padding: 25px;
    background-color:lightsteelblue;
    color:rgb(0, 32, 52);
    font-weight: 700;
    border-radius: 100px;
}



div #list-of-posts{
    display: flex;
    flex-direction: row;
    gap:20px; 
    justify-content: space-around;
    align-items: center;
    background-color: ghostwhite;
    padding-left: 20px;
    padding-right: 20px;
    list-style: none;
    padding-bottom: 50px;
}

div #list-of-posts li{
    text-align: center;
    display: flex;
    gap: 10px;
    font-size: 14px;
    flex-direction: column ;
    background-color: lightsteelblue;
    height: 150px;
    justify-content: center;
    border-radius: 20px;
    padding: 30px;
}

</style>
