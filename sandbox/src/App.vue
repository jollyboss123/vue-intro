<template>
  <h1>New App</h1>
  <pre>{{ pokedex }}</pre>
  <button @click="fetchPokemon">Fetch Pokemon</button>
</template>

<script>
//https://pokeapi.co/api/v2/pokemon?limit=151
export default {
  data: () => ({
    pokedex: [1,2,3],
  }),
  methods: {
    async fetchPokemon() {
      this.pokedex = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
    }
  },
  beforeCreate() {
    console.log("Before Created");
    console.log(this.pokedex);
  },
  created() {
    console.log("Created");
    console.log(this.pokedex);
    this.fetchPokemon();
  }
}
</script>