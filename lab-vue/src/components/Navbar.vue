<script setup>
    import { ref } from 'vue'

    const showMsg = ref(true);

    const toggleMessage = () => {
        showMsg.value = !showMsg.value
    }
        const isBgColorChanged = ref(false);
    
        const toggleBackgroundColor = () => {
            isBgColorChanged.value = !isBgColorChanged.value;
        };
</script>

<template>
   <nav :style="{ backgroundColor: isBgColorChanged ? 'red' : 'blue' }">
        <h1>Welcome to the blog!</h1>
        <p>The result of 2 + 2 is: {{ 2 + 2 }}</p>

        <p v-if="showMsg"> This message is conditionally rendered!</p>
        <button @click="toggleMessage">Toggle Message</button>

        <!-- Boton para cambiar el color de fondo-->
        <button @click="toggleBackgroundColor">Change Background Color</button>
    </nav>
</template>

<style scoped>
nav {
  padding: 10px;
}

</style>