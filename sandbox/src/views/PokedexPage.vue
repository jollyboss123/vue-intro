<script setup>
import { ref } from 'vue';

const pokemonNo = ref(0)

</script>

<template>
    <h1>Pokedex</h1>
    <RouterLink :to="{name: 'pokemon', params: {id: pokemonNo}}">Go to Pokemon #{{pokemonNo}}</RouterLink>
    <br />
    <input type="number" v-model="pokemonNo"/>
</template>

