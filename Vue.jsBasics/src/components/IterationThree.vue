<template>
    <div class="section">
        <h3>Using v-if</h3>
        <p v-if="showWithVIf" class="success message">
                This element is rendered with v-if!!!
        </p>
        <button @click="showWithVIf = !showWithVIf">
                Toggle v-if (Currently: {{ showWithVIf }})
        </button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const showWithVIf = ref(true)
</script>