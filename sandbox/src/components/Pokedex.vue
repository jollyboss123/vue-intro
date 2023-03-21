<script>
export default {
    async setup() {
        // only vanilla js in setup 
        const regionName = "kanto"

        const pokedex = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => response.json())

        return {
            pokedex,
            regionName
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
    }
}
</script>

<template>
    <pre>{{ pokedex }}</pre>
</template>