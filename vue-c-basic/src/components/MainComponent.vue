<script setup lang="ts">
import MultiplicationComponent from './MultiplicationComponent.vue'
import ListComponent from './ListComponent.vue'
import ColorBox from './ColorBox.vue'
</script>

<template>
  <section>
    <main>
      <MultiplicationComponent />
      <ColorBox />
      <ListComponent />
    </main>
  </section>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
}
</style>
