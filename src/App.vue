<template>
  <nav>
    <NavbarTop
      :math="getResult"
      :bitcoin="showBitcoin"
      @changeBitcoin="toggleBitcoin"
      @changeColor="navbarColor"
    />
  </nav>

  <header></header>

  <main></main>

  <footer>
    <FooterBottom />
  </footer>
</template>

<script>
import NavbarTop from './components/NavbarTop.vue'
import FooterBottom from './components/FooterBottom.vue'

export default {
  name: 'App',
  components: {
    NavbarTop,
    FooterBottom
  },
  data() {
    return {
      math: {
        numberOne: 2,
        numberTwo: 3
      },
      showBitcoin: false,
      isRed: true
    }
  },
  computed: {
    getResult() {
      return this.math.numberOne
    }
  },
  methods: {
    toggleBitcoin() {
      this.showBitcoin = !this.showBitcoin
    },
    navbarColor() {
      console.log('is it working?')
      this.isRed = !this.isRed
      this.isBlue = !this.isBlue
    }
  }
}
</script>

<style scoped></style>
