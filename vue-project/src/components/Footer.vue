
<script setup>
import { ref } from 'vue';

const isDiscountAvailable = ref(false);

</script>

<template>
    <div>
        <button @click="isDiscountAvailable = !isDiscountAvailable">Check if you are eligible for a disocunt</button>

        <!-- V-IF directive  -->
        <p v-if="isDiscountAvailable">Enjoy 20% discount on all orders!</p>
        <!-- V-SHOW directive  -->
        <p v-show="isDiscountAvailable">Enjoy 50% discount for your next order!</p>
    </div>
  
</template>

<style scoped>

button {
    
    background-color: rgb(254, 239, 68);
    width: 150px;
    height: 40;
    padding: 20px;
    border-radius: 10px;

}
</style>