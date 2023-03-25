<template>
  <div class="wrapper">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/pokedex">Pokedex</router-link>
    </nav>
    <router-view />
    <h2>{{ colorPreference }}</h2>
    <input type="color" v-model="colorPreference"/>
    <BaseCounter />
    <UserCard :user="{ name: 'Ben', food: 'Ramen' }"/>
  </div>
  
</template>

<script setup>
import BaseCounter from './components/BaseCounter.vue';
import UserCard from './components/UserCard.vue';
import { ref } from 'vue';

const colorPreference = ref("white")
</script>

<style>
html {
  background-color: aliceblue;
}

.wrapper {
  background-color: v-bind(colorPreference);
}

.button {
  border: 6px solid blueviolet;
}
</style>