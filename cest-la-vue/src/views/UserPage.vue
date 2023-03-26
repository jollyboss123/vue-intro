<script setup>
import UserCard from '@/components/UserCard.vue';
import { useUserStore } from '@/stores/UserStore';

defineProps({
  title: {
    type: String,
    default: 'Users'
  }
})

const userStore = useUserStore()

// userStore.userList = await userStore.fetchUsers()
userStore.fetchUsers()
</script>

<template>
  <main>
    <h1>{{title}}</h1>
    <ul>
        <UserCard v-for="user in userStore.userList" :user="user" :key="`user-${user.id}`"/>
    </ul>
  </main>
</template>

<style>
</style>