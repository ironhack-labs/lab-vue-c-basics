<template>
  <div id="app">
    <Navbar></Navbar>
    <Calculator></Calculator>
    <ConditionalDemo></ConditionalDemo>
    <BlogPosts></BlogPosts>
    <ChangeColor></ChangeColor>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './Components/Navbar.vue'
import Calculator from './Components/Calculator.vue'
import ConditionalDemo from './Components/ConditionalDemo.vue'
import BlogPosts from './Components/BlogPosts.vue'
import ChangeColor from './Components/ChangeColor.vue'
import Footer from './Components/Footer.vue' 

export default {
  name: 'App',
  components: {
    Navbar,
    Calculator,
    ConditionalDemo,
    BlogPosts,
    ChangeColor,
    Footer,
  }
}
</script>