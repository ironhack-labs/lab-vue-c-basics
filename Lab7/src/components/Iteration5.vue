<script setup>
import { ref } from 'vue';

const backColor=ref("aqua");

const changeBackground=()=>{


}

</script>

<template>
<button class="cta" @click="changeBackground">Change Backgroundcolor</button>
<div class="changer">
    This Divs backgroundcolor is changed
</div>
</template>

<style scope>
*{
    background-color: backColor;
}
.changer{
    background-color: aqua;
}
</style>