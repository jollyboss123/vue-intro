<template>
    <p>{{character.name}}</p>
    <button @click="favoriteCharacter">Favorite</button>
</template>

<script>
export default {
    props: {
        character: {
            type: Object,
            required: true
        }
    },
    emits: ['favorite'],
    methods: {
        favoriteCharacter() {
                this.$emit('favorite', this.character)
            }
    }
}
</script>