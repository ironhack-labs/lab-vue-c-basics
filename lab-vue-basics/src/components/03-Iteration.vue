<template>
    <div class="comps">
            <h1>Hello Class</h1>
            <h3>One of my favourite songs is: </h3>
            <div  v-if="showTitleSong">
            <p>{{ titleSong }}</p>
        </div>
            <button @click="toggleShowTitleSong">
            <span>Hide Song</span></button>
    </div>
</template>


<script setup>
import { ref } from 'vue';


let showTitleSong = ref(true)
let titleSong = "Redemption Song"
function toggleShowTitleSong() {
    showTitleSong.value = !showTitleSong.value
}
</script>