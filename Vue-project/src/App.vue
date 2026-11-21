<script setup>
import Navbar from './components/icons/Navbar.vue'
import Footerbar from './components/icons/Footerbar.vue'
import Presentation from './components/icons/Presentation.vue'
import Hokage from './components/icons/Hokage.vue'
import Equipe from './components/icons/Equipe.vue'
import VillagesCard from './components/icons/VillagesCard.vue'
</script>


<template>
  <header>
    <Navbar />
  </header>

  <section>
    <VillagesCard />
  </section>

  <section>
    <Equipe />
  </section>

  <main>
    <Presentation />
  </main>

  <section>
    <Hokage />
  </section>

  <footer>
    <Footerbar />
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
