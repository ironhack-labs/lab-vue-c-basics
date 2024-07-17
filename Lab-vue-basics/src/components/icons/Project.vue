<script setup>
import Funct from "./Functions.vue";
import { reactive } from "vue";
const mess = reactive({
  FirstName: "Joewari",
  LastName: "Benwari",
  nationality: "Nigeria",
  MaritalStatus: "Married",
});
function project() {
  return "showing my details";
}
</script>

<template>
  <div>
    <div>
      <h1>Part One</h1>
      <h3>additions using mustache syntax</h3>
      <p>the sum of 2 and 5 ={{ 2 + 5 }}</p>
    </div>
    <div>
      <hr />
      <h2>Part Two</h2>
      <p>{{ project().toUpperCase() }}</p>
      <p>First Name: {{ mess.FirstName }}</p>
      <p>Last Name: {{ mess.LastName }}</p>
      <p>Nationality: {{ mess.nationality }}</p>
      <p>Marital Status: {{ mess.MaritalStatu }}</p>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: auto 90px;
  min-width: 70vw;
}
hr {
  width: 10px;
  text-align: right;
  margin-left: -400px;

  height: 10px;
  border-width: 10px;
  color: green;
}
</style>
