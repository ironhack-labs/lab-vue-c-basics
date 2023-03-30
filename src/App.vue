<script>
import NavBar from './components/NavBar.vue'
import MyFooter from './components/MyFooter.vue'
import Iteration2 from './components/Iteration2.vue'
import Iteration3 from './components/Iteration3.vue'
import Iteration4 from './components/Iteration4.vue'
import Iteration5 from './components/Iteration5.vue'
export default {
  data(){
    return {}
  },
  components: {
    NavBar,
    MyFooter,
    Iteration2,
    Iteration3,
    Iteration4,
    Iteration5,
  }
}
</script>

<template>
  <NavBar/>

  <Iteration2/>
  <Iteration3/>
  <Iteration4/>
  <Iteration5/>
    
  <MyFooter/>
</template>

<style scoped>

</style>
