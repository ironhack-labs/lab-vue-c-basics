<template>
    <div class="colorChanger">
        <div :style="{ background: activeColor, transition: 'background 0.5s ease' }" class="color-box">
            <h1>Hello</h1>
            <p>This is the bonus iteration</p>
            <button @click="changeColor">
                <span>Change Color</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const activeColor = ref('blue');

const changeColor = () => {
    activeColor.value = activeColor.value === 'grey' ? 'red' : 'grey';
};
</script>

<style scoped>
.colorChanger {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    margin: 5px;
    padding: 0;
    background-color: none;
}

.color-box {
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}
</style>