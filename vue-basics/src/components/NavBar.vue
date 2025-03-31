<script setup>
defineProps({
    titleOne: String,
    titleTwo: String,
    titleThree: String,
})
</script>

<template>
    <div class="nav-bar">
        <p>{{ titleOne }}</p>
        <p>{{ titleTwo }}</p>
        <p>{{ titleThree }}</p>
    </div>
</template>

<style scoped>
.nav-bar {
    display: flex;
    justify-content: space-around;
    align-content: center;
}
</style>