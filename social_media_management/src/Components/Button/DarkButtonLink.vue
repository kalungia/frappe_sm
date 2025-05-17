<template>
    <router-link :to="{ name: url }" :class="sizeClass" class="inline-flex items-center bg-indigo-800 border border-transparent rounded-md font-medium text-xs text-white uppercase tracking-widest hover:bg-indigo-700 active:bg-indigo-900 focus:border-indigo-900 focus:shadow-outline-indigo transition ease-in-out duration-200">
        <slot />
    </router-link>
</template>
<script setup>
import useButtonSize from "@/Composables/useButtonSize"

const props = defineProps({
    url: {
        type: String,
        required: true
    },
    size: {
        type: String,
        default: 'lg'
    }
});

const { sizeClass } = useButtonSize(props.size);
</script>
