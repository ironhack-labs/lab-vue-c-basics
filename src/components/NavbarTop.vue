<template>
  <div>
    <h1 :class="{ navbarRed: isRed, navbarBlue: isBlue }">Navbar</h1>
  </div>
  <button @click="changeColor()">Change Navbar color</button>
  <div>
    <p>{{ math }}</p>
  </div>
  <div v-if="bitcoin">
    <h2>Bitcoin is king</h2>
    <div>
      <img class="btc-image" src="../assets/Bitcoin.jpg" alt="Bitcoin image" />
    </div>
    <button @click="revealTheTruth()">What you say?</button>
  </div>
  <div v-else>
    <h2>Bitcoin is a scam</h2>
    <button @click="revealTheTruth()">Reveal The Truth</button>
  </div>
</template>

<script>
export default {
  name: 'NavbarTop',
  props: {
    math: {
      type: Number
    },
    bitcoin: {
      type: Boolean,
      default: false
    },
    isRed: {
      type: Boolean,
      default: false
    },
    isBlue: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    revealTheTruth() {
      this.$emit('changeBitcoin')
    },
    changeColor() {
      this.$emit('changeColor')
    }
  }
}
</script>

<style scoped>
.navbarRed {
  background-color: red;
}
.navbarBlue {
  background-color: blue;
}
.btc-image {
  width: 300px;
}
</style>
