<template>
    <button>
        <slot v-if="left">
            Icon - Cancel
        </slot>
        <slot v-else>
            Submit
        </slot>
    </button>
</template>

<script>
export default {
    props: {
        left: {
            type: Boolean,
            required: false
        }
    }
}
</script>