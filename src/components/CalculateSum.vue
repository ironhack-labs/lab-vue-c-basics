<script setup>
import {ref} from "vue"
const initialValue=ref(2);
const result=ref("2+2=4")

const handleInputChange = (event) => {
    const val=parseInt(event.target.value);
    result.value = event.target.value + '+' +  event.target.value + "=" + ( val+val) ;
    };
</script>
<template>
    <section class="container">
        <div class="operation centered-at-nucleo">
            <h3>Add same number</h3>
            <input @change="handleInputChange" v-model="initialValue" type="number" >
            <div class="result"> {{ result }} </div>
           
        </div>
    </section>
</template>
<style scoped>
    .container{
        .operation{
            width: 50%;
            text-align: center;
            input{
                text-align: right;
            }
        }
    }
</style>
