<script setup lang="ts">
import { AccordionPropsType, AccordionDefaults } from '@u/props'
import { accordion, RefElement } from '@u/util'
import { ref, onMounted } from 'vue'

const props = withDefaults(defineProps<AccordionPropsType>(), AccordionDefaults)

// define template ref
const el = ref<RefElement>(null)

/**
 * we define all available options as props and
 * send it to accordion function of UIkit.
 * it also sends undefined props to grid function.
 * we must check it in future if it reduces effectivity
 * it must be prevented and reworked
 */
onMounted(() => {
  accordion(el.value, props)
})
</script>

<template>
  <component :is="tag" ref="el"></component>
</template>
