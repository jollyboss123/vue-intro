<script setup>
import BaseButton from './BaseButton.vue';
import {ref, computed, reactive, defineEmits, onBeforeUnmount} from 'vue'

// only vanilla js in setup 

const emits = defineEmits(['change-region-name'])

const props = defineProps({
    region: {
        type: String,
        default: "Kanto"
    }
})

// ref to convert native js to vue component to attach reactivity
const regionName = ref("Kanto")

// akin the options api of data in vue
const state = reactive({
    elementType: 'Lightning'
})

console.log(regionName);
console.log(state);

const regionNameAllCaps = computed(
    // to refer to the component itself via .value
    () => regionName.value.toUpperCase()
)

const elementTypeAllCaps = computed(
    () => state.elementType.toUpperCase() + " " + props.region
)

const pokedex = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
.then((response) => response.json())

const changeRegionName = () => {
    regionName.value = "Hoenn"
    emits('change-region-name')
}

onBeforeUnmount(() => {
    console.log("This is onBeforeUnmount!");
})
</script>

<template>
    <h2>{{ regionName }}</h2>
    <h3>{{ regionNameAllCaps }}</h3>
    <h3>{{ regionNameLowerCase }}</h3>
    <h3>{{ elementTypeAllCaps }}</h3>
    <button @click="changeRegionName">Change Region Name</button>
    <BaseButton />
    <pre>{{ pokedex }}</pre>
</template>