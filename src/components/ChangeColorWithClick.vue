<script setup>
import {ref} from 'vue';
const classNameColor=ref('result-color');
</script>

<template>
    <section class='container'>
        <div class='change-color centered-at-nucleo'>
            <h3>Change color with button</h3>
            <div class='buttons centered-at-nucleo'>
                <button  @click='classNameColor="result-color blue"'>blue</button>
                <button  @click='classNameColor="result-color red"'>red</button>
            </div>
            <div id ='result-color'  :class='classNameColor'>

            </div>
        </div>
    </section>
</template>

<style scoped>
.change-color {
    h3{
        text-align: center;
    }
    width: 50%;
    .buttons{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .result-color{
        border:2px solid black ;
        height: 20px;
    }
    .blue{
        background-color: blue;
    }
    .red{
        background-color:red;
    }
}
    
</style>
