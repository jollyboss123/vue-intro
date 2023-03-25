<template>
  <BaseCounter />
  <UserCard :user="{ name: 'Ben', food: 'Ramen' }"/>
  
</template>

<script setup>
import BaseCounter from './components/BaseCounter.vue';
import UserCard from './components/UserCard.vue';
  
</script>

<style>
html {
  background-color: aliceblue;
}

.button {
  border: 6px solid blueviolet;
}
</style>