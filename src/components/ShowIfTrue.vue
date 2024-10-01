<script setup>
import {ref} from "vue"
const visible=ref(true);
</script>

<template>
    <section class="container">
        <div class="visibility-image centered-at-nucleo">
            <h3>Visibility with option button</h3>
            <button @click="visible=!visible;">visibilidad de imagen</button>
            <img class="centered-at-nucleo"  v-if="visible" src="/public/monte1.png" alt="">
        </div>
    </section>
</template>

<style scoped>
    .visibility-image{
        width:  50%;;
        display: flex;
        flex-direction: column;
        h3{
            text-align: center;
        }
        img{
            text-align: center;
            width: 100px;
        }
    }

</style>
