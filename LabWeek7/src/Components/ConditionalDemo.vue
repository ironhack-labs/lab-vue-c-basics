<template>
  <div class="conditional-demo">
    <h2>Conditional Rendering Demo</h2>

    <button @click="toggleVisibility">
      Toggle Visibility
    </button>


    <div v-if="isVisible" class="conditional-box">
      <h3>This element uses v-if</h3>
      <p>I only exist in the DOM when isVisible is true!</p>
    </div>

    <div v-show="isVisible" class="conditional-box">
      <h3>This element uses v-show</h3>
      <p>I'm always in the DOM, just hidden when isVisible is false!</p>
    </div>

    <p>Current state: {{ isVisible ? 'Visible' : 'Hidden' }}</p>
  </div>
</template>

<script>
export default {
  name: 'ConditionalDemo',
  data() {
    return {
      isVisible: true 
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>
