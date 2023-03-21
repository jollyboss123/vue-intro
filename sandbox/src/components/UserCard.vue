<template>
    <h1>User: {{ user.name }}</h1>
    <p>Favorite Food: {{ user.food }}</p>
    <!-- <button @click="$emit('change-name')" >Change Name</button> -->
    <button @click="tellParentToChangeName">Change Name</button>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        },
    },
    emits: ["change-name"],
    methods: {
        tellParentToChangeName() {
            this.$emit("change-name")
        }
    }
}
</script>