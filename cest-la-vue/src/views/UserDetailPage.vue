<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

console.log(route.params);

// https://router.vuejs.org/guide/essentials/passing-props.html 
// for passing props instead of just params in routes
</script>

<template>
    <main>
        <h1>{{ route.params.name }}</h1>
    </main>
</template>