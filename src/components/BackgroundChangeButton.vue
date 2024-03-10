<script setup>
const emit = defineEmits(['change-color'])

function changeColor() {
    emit('change-color')
}
</script>

<template>
    <button @click="changeColor">Cambiar color de fondo</button>
</template>