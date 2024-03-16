<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer /> 


    <div>
      {{ getPokemonResult() }}
    </div>
    <div>
      {{ generateString() }}
    </div>
    <div v-if="showElement">
      Ralts
    </div>
    <div class="pokemon-cards">
      <div class="pokemon-card" v-for="(pokemon, index) in pokemons" :key="index">
        <h3>{{ pokemon.name }}</h3>
        <p>Type: {{ pokemon.type }}</p>
        <p>Level: {{ pokemon.level }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      // Iteration 3: Property to control visibility of an element
      showElement: true,

      // Iteration 4: List of Pokémon characters
      pokemons: [
        { name: 'Pikachu', type: 'Electric', level: 25 },
        { name: 'Bulbasaur', type: 'Grass/Poison', level: 20 },
        { name: 'Charizard', type: 'Fire/Flying', level: 36 }
      ]
    };
  },
  methods: {
    // Iteration 2: Function to generate a string
    generateString() {
      return 'Hello, world!';
    },
    // Iteration 2: Function to get the result of Pikachu + Charmander
    getPokemonResult() {
      const pokemon1 = 'Pikachu';
      const pokemon2 = 'Charmander';
      return `${pokemon1} and ${pokemon2} join forces!`;
    }
  }
}
</script>

<style scoped>
#app > div {
  margin: 20px 0;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}

.pokemon-cards {
  display: flex;
  justify-content: space-between;
  
}

.pokemon-card {
  width: calc(33.33% - 20px); 
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 50px;
}

.pokemon-card h3 {
  margin-top: 0;
}
</style>