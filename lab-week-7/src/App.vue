<script setup>
// Iteration 1
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { ref, computed } from "vue";
 
// Iteration 2
const yourWord = ref('lala');
const printYourWord = computed(()=>{
  return `${yourWord.value}`;
});

// Iteration 3
let isTrue = ref(false);

//Iteration 4
let listOfPosts = ref([
  {title: "title 1",
    description: "description 1",
    content: "content 1"
  },
  {title: "title 2",
    description: "description 2",
    content: "content 2"
  },
  {title: "title 3",
    description: "description 3",
    content: "content 3"
  }
]);

</script>

<template>
    <div>
      <!-- Iteration 1 -->
      <Navbar></Navbar>
      <Footer></Footer>

      <!-- Iteration 2 -->
      <p>Result of 2 + 2 is {{ 2+2 }}</p>
      <p>Your string is: {{ printYourWord }}</p>
      
      <!-- Iteration 3 -->
      <p v-show="isTrue">Am I visible?</p>

      <!-- Iteration 4 -->
      <ul>
        <li v-for="item in listOfPosts">
          {{ item.title }} - {{ item.description }} - {{ item.content }}
        </li>
      </ul>

    </div>
</template>

<style scoped></style>
