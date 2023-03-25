<template>
  <div class="wrapper">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/pokedex">Pokedex</router-link>
    </nav>
    <router-view />
    <h2>{{ countStore.globalCount }}</h2>
    <h2>{{ colorPreference }}</h2>
    <input type="color" v-model="colorPreference"/>
    <BaseCounter />
    <UserCard :user="{ name: 'Ben', food: 'Ramen' }"/>
  </div>
  
</template>

<script setup>
import BaseCounter from './components/BaseCounter.vue';
import UserCard from './components/UserCard.vue';
import { useCount } from './composables/countStore';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const colorPreference = ref("white")
const countStore = useCount()
const router = useRouter()

watch(countStore.globalCount, (val) => {
  console.log(val);

  if (val > 1500) {
    router.push('/pokedex')
  }
})
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