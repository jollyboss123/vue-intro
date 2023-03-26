<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    components: { RouterLink }
}
</script>

<template>
    <li :class="$style['user-card']">
        <RouterLink :to="`/user/${user.name}`">
            {{ user.name }} : {{ user.website }}
        </RouterLink>
    </li>
</template>

<style module>
.user-card {
    border: 2px solid papayawhip;
    padding: 10px;
}
</style>