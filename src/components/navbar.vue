<script setup>
import HelloWorld from './HelloWorld.vue'
import { ref } from 'vue'

const showElement = ref(true);

</script>

<template>
    <header>
        <img v-if="showElement" alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <HelloWorld msg="You did it!" />
        </div>
    </header>
</template>

<style scoped></style>