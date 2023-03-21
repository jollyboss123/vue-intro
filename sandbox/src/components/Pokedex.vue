<script>
import {ref, computed, reactive} from 'vue'

export default {
    async setup() {
        // only vanilla js in setup 

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
            () => state.elementType.toUpperCase()
        )

        const pokedex = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => response.json())

        return {
            pokedex,
            regionName,
            regionNameAllCaps,
            elementTypeAllCaps
        }
    },
    beforeCreate() {
        console.log("Before Created");
        console.log(this.pokedex);
        console.log(this.regionName);
    },
    created() {
        console.log("Created");
        console.log(this.pokedex);
        console.log(this.regionName);
    },
    computed: {
        regionNameLowerCase() {
            return this.regionName.toLowerCase()
        }
    },
    methods: {
        changeRegionName() {
            this.regionName = "Hoenn"
        }
    }
}
</script>

<template>
    <h2>{{ regionName }}</h2>
    <h3>{{ regionNameAllCaps }}</h3>
    <h3>{{ regionNameLowerCase }}</h3>
    <h3>{{ elementTypeAllCaps }}</h3>
    <button @click="changeRegionName">Change Region Name</button>
    <pre>{{ pokedex }}</pre>
</template>