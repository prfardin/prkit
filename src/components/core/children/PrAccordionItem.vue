<script setup lang="ts">
import { type AccordionItemPropsType, accordionItemDefaults } from '@u/props'

withDefaults(defineProps<AccordionItemPropsType>(), accordionItemDefaults)
</script>

<template>
  <component :is="tag">
    <slot />
  </component>
</template>
