<template>
  <BaseCounter />
  <UserCard :user="{ name: 'Ben', food: 'Ramen' }"/>
  
</template>

<script setup>
import BaseCounter from './components/BaseCounter.vue';
import UserCard from './components/UserCard.vue';
  
</script>