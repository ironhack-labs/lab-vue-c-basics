<template>
  <div class="color-section" :style="{ backgroundColor: currentColor }">
    <h2>Color Changer</h2>
    <p>Current color: {{ currentColor }}</p>
    <button @click="changeColor">Change Background Color</button>
  </div>
</template>

<script>
export default {
  name: 'ChangeColor',
  data() {
    return {
      currentColor: 'white',
      colors: ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange']
    }
  },
  methods: {
    changeColor() {
      const randomIndex = Math.floor(Math.random() * this.colors.length)
      this.currentColor = this.colors[randomIndex]
    }
  }
}
</script>
