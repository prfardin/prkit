<script setup lang="ts">
import { accordionTitleDefaults, type AccordionTitlePropsType } from '@u/props'
import { useComponentIcon } from '@cc/useComponentIcon.ts'
import { getAccordionIconName } from '@u/util.ts'

const props = withDefaults(defineProps<AccordionTitlePropsType>(), accordionTitleDefaults)

const { iconName } = useComponentIcon(props, getAccordionIconName)
</script>

<template>
  <a class="uk-accordion-title" href="">
    <slot />
    <span v-if="iconName" class="pr-accordion-icon uk-accordion-icon" ref="icon" />
  </a>
</template>
