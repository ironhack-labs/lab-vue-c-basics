
<script setup>

import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import CalculateSum from './components/CalculateSum.vue';
import ShowIfTrue from './components/ShowIfTrue.vue';
import PaintList from './components/PaintList.vue';
import ChangeColor from './components/ChangeColorWithClick.vue';
</script>

<template>
  <div>
      <MyHeader class="myHeader" />
      <CalculateSum class="calculateSum" />
      <ShowIfTrue class="showIfTrue" />
      <PaintList class="PaintList" />
      <ChangeColor class="ChangeColor" />
      <MyFooter class="myFooter"/>
      
  </div>
</template>

<style scoped>

</style>
