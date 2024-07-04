<template>
    <div class="songContainer">
        <h1>Hello</h1>
        <h3>One of my favorite songs is:</h3>
        <div v-if="isTitleSongVisible">
            <p class="song-title">{{ songTitle }}</p>
        </div>
        <button @click="toggleTitleSongVisibility">
            <span>{{ isTitleSongVisible ? 'Hide Song' : 'Show Song' }}</span>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isTitleSongVisible = ref(true);
const songTitle = "50 Cent – Many Men (Wish Death)";
const toggleTitleSongVisibility = () => {
    isTitleSongVisible.value = !isTitleSongVisible.value;
};
</script>

<style scoped>
.songContainer {
    font-family: Arial, sans-serif;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    text-align: center;
}

.song-title {
    font-size: 18px;
    font-weight: bold;
    color: #000000;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.song-title  {
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
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