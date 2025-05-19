<template>
    <component
        :is="as"
        :href="as === 'a' ? href : undefined"
        :type="as === 'button' ? type : undefined"
        class="relative inline-flex items-center text-gray-400 hover:text-indigo-500 transition-colors ease-in-out duration-200"
    >
        <slot/>
    </component>
</template>

<script setup>
const props = defineProps({
    href: {
        type: String,
        required: true
    },
    method: {
        type: String,
        default: 'get'
    },
    as: {
        type: String,
        default: 'a'
    },
    type: {
        type: String,
        default: null
    }
});
</script>