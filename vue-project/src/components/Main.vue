<script setup>
import { reactive, computed, ref } from "vue";

const firstName = ref("John");
const lastName = ref("Doe");
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});

const boolean = ref(false);
const buttonBackgroundColor = ref("green");
const toggleSubscription = () => {
  boolean.value = !boolean.value;
  buttonBackgroundColor.value = boolean.value ? "red" : "green";
};
</script>

<template>
  <div class="container">
    {{ 2 + 2 }}<br />

    <div v-show="!boolean">{{ fullName }}</div>

    <button
      @click="toggleSubscription"
      :style="{ backgroundColor: buttonBackgroundColor }">
      {{ boolean ? "Unsubscribe" : "Subscribe" }}
    </button>
    <div v-if="boolean">Subsribed as: {{ fullName }}</div>
  </div>
</template>
