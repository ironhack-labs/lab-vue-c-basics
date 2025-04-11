<template>
  <div id="app">
    <MyNavbar />
    <DynamicString />
    <ConditionalDisplay />
    <PostList />
    <MyFooter />
  </div>
</template>

<script>
import MyNavbar from './components/MyNavbar.vue'
import MyFooter from './components/MyFooter.vue'
import DynamicString from './components/DynamicString.vue'
import ConditionalDisplay from './components/ConditionalDisplay.vue'
import PostList from './components/PostList.vue'

export default {
  name: 'App',
  components: {
    MyNavbar,
    DynamicString,
    ConditionalDisplay,
    PostList,
    MyFooter
  }
}
</script>

<style>
/* Estilos opcionales aquí */
</style>
