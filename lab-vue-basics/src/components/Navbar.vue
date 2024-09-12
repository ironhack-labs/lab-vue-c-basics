<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, reactive, computed} from 'vue'
    const templateNavbar = reactive({
        name: "textNav",
        links: [
            'home',
            'about',
            'contact'
        ]
    })

    const viewLinks = computed(() => {
        return templateNavbar.links;
    })

    const myName = ref("Carolina");
    const lastName= ref("Romero");

    const fullName = computed({
        get() {
            return myName.value + ' ' + lastName.value
        }
    })
</script>
<template>
  <section>
    <h1>{{templateNavbar.name}}</h1>
    <p>{{2+2}}</p>
    <ul id='navlinks'>
       <li v-for="(link, index) in viewLinks" :key="index">{{link}}</li>
    </ul>
    <p>{{fullName}}</p>

  </section>
</template>
<style scoped></style>
