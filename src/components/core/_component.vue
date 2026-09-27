<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { isDev, devComputed, devPropsWatch } from '@u/env.ts'
import type { RefElement } from '@u/types.ts'
import { type AccordionPropsType, accordionDefaults } from '@u/props'
import { type AccordionEmitsType, accordionEmits } from '@u/emits.ts'
import { setAccordion, getAccordionIconName } from '@u/util'
import { useComponentEmit } from '@cc/useComponentEmit.ts'
import { useComponentIcon } from '@cc/useComponentIcon.ts'
import { accordionClasses } from '@u/classes'

/**
 * PrComponent
 * Descriptions, Styles and main states
 * ========================================================================
 * */

/**
 * Props:
 * UIKit JavaScript Component props:
 *
 * Icon Props:
 * icon: icon-types | string(CustomIconName | ex: icon-fa-duotone-plus)
 * iconRatio: number
 * strokeRatio: number
 *
 * Class Props:
 *
 * Component Props:
 * refElement?: RefElementCallback
 *
 * Defaults:
 *
 * ========================================================================
 */

// If component has no default props
// const props = defineProps<AccordionPropsType>()

const props = withDefaults(defineProps<AccordionPropsType>(), accordionDefaults)

/**
 * Component Ref and Props Ref Element:
 * el, props.refElement
 * ========================================================================
 */

const el = ref<RefElement>(null)

// If parent needs access to the component element:
// function setElement(value: RefElement) {
//   el.value = value
//   props.refElement?.(value)
// }

/**
 * Emits:
 * emits: ...UIKit JavaScript Component Events
 * types: (e: 'emit', event: Event): void | (e: 'emit', event: Event, ...additional-args): void
 * ========================================================================
 */

// If component has UIKit JavaScript events:
// const emit = defineEmits<AccordionEmitsType>()

// const emitHandler = (event: Event) => {
//   emit(event.type as any, event, selected.value)
// }

// useComponentEmit(el, accordionEmits, emitHandler)

/**
 * CSS Classes:
 * ...Defined CSS UIKit and PrKit Classes for main element of component
 * ========================================================================
 */

const accordionClass = devComputed(() => accordionClasses(props))

/**
 * Icons:
 * icon-types | string(CustomIconName | ex: icon-fa-duotone-plus)
 * ========================================================================
 */

// If component contains icon
// const { iconName } = useComponentIcon(props, getAccordionIconName)

/**
 * Component-specific Logic:
 * ...All other consts, functions, computed values, etc.
 * ========================================================================
 */

onMounted(() => {
  // If there is UIKit JavaScript Componnent
  // setAccordion(el.value, props)
  //
  // if (isDev) {
  //   devPropsWatch(
  //     props,
  //     () => {
  //       setAccordion(el.value, props)
  //     },
  //     { exclude: ['modelValue', 'refElement'] },
  //   )
  // }
})
</script>

<template>
  <div :class="accordionClass"></div>
</template>
