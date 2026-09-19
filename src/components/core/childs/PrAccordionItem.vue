<script setup lang="ts">
import { type AccordionItemPropsType, accordionItemDefaults, } from '@u/props'

const props = withDefaults(defineProps<AccordionItemPropsType>(), accordionItemDefaults)
</script>

<template>
  <component :is="tag">
    <slot />
  </component>
</template>
