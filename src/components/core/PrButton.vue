<script setup lang="ts">
/**
 * for compile icons we use PrIcon components, and
 * it will create the span tag and put icon svg into it
 * but when there is no default slots icons must compile directly into self Button
 * with no span tag, in future we most prevent from creating additional tag
 * when there is no default slots defined
 */
import { ButtonPropsType } from '@u/props'
import { buttonClassObject } from '@u/classes'
import { useSlots, computed } from 'vue'
import PrIcon from '@c/core/PrIcon.vue'
import PrSpinner from '@c/core/PrSpinner.vue'

// we must redesign ripple util and then use it. it's just for test
import { useRipple } from '@u/ripple'

const props = withDefaults(defineProps<ButtonPropsType>(), {
  tag: 'router-link',
  spinnerMod: 'line',
  mode: 'solid',
  color: 'primary',
  size: 'md',
})

// get slots: we check if there is no default slots defined
const slots = useSlots()

// define button classes from defined props
const buttonClass = computed(() => buttonClassObject(props, !!slots.default))

const emit = defineEmits(['mousedown'])

function onMouseDown(event: Event) {
  /**
   * must change in future & we need to discover
   * if there is a way to use some function or attribute without condition
   * with boolean props defined, ex: if (props.x) use x()
   * change it to something like directives
   */
  if (props.ripple) useRipple(event)
  emit('mousedown')
}
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :class="buttonClass"
    @mousedown="onMouseDown"
    :disabled="disabled"
  >
    <template v-if="icon">
      <pr-icon :class="iconClass" :icon="icon" :ratio="ratio" />
      <span :class="slotClass" v-if="slots.default"><slot /></span>
    </template>
    <slot v-else />
    <pr-spinner v-if="spinner" :class="spinnerClass" :mode="spinnerMod" />
    <span v-if="badge" class="pr-button-badge">
      <span class="pr-button-badge-pulse"></span>
      <span class="pr-button-badge-inner"></span>
    </span>
  </component>
</template>
