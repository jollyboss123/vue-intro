<template>
  <h1>New App</h1>
  <Suspense>
    <Pokedex />

    <template v-slot:fallback>
      Loading Pokedex...
    </template>
    </Suspense>
  
</template>

<script>
import Pokedex from './components/Pokedex.vue';
export default {
  components: {
    Pokedex
  }
}
</script>