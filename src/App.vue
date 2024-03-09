<script setup>
import NavBarComponent from '@/components/NavBarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import SumaComponent from '@/components/SumaComponent.vue'
import BooleanComponent from '@/components/BooleanComponent.vue'
import ListComponent from '@/components/ListComponent.vue'
import ChangeColorComponent from '@/components/ChangeColorComponent.vue'

</script>

<template>
  <div class="container">
  <NavBarComponent/>
  <SumaComponent/>
  <BooleanComponent/>
  <ListComponent/>
  <ChangeColorComponent/>
  <FooterComponent/>
 </div>
</template>

<style scoped>
:host {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


</style>