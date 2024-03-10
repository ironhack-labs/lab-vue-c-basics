<script setup>
import { ref } from 'vue'
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import Conditional from "@/components/Conditional.vue"
import Posts from "@/components/Posts.vue"
import BackgroundChangeButton from '@/components/BackgroundChangeButton.vue'

// reactive state
const greeting = ref("Hello, ")
const name = "My Name is Foo"
const backgroundColor = ref("green")


function greet() {
  return `${greeting.value + name}`
}

function changeNavbarBackgroundColor(){
  let randomColor = Math.floor(Math.random()*16777215).toString(16)
  backgroundColor.value = "#" + randomColor
}

</script>

<template>
  <Navbar :background-color=backgroundColor />
  <BackgroundChangeButton @click="changeNavbarBackgroundColor"/>
  <h1>{{ greet() }}</h1><br>
  <p>This is the mathematical operation 2 + 2 = {{ 2 + 2 }}</p>
  <Conditional />
  <Posts />
  <Footer />
</template>
