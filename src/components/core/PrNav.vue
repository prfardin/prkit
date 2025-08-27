<script setup lang="ts">
import { NavPropsType } from '@u/props'
import { nav, RefElement } from '@u/util'
import { ref, onMounted } from 'vue'

// must change
const props = withDefaults(defineProps<NavPropsType>(), {
  hasNavTag: true,
  targets: '> .uk-parent',
  toggle: '> a',
  content: '> ul',
  collapsible: true,
  multiple: false,
  transition: 'ease',
  animation: true,
  duration: 200,
})

// define template ref
const el = ref<RefElement>(null)

/**
 * set nav
 * maybe need to change in future to prevent using li
 * when defining component
 */
function setNav() {
  return nav(el.value, {
    targets: props.targets,
    toggle: props.toggle,
    content: props.content,
    collapsible: props.collapsible,
    multiple: props.multiple,
    transition: props.transition,
    animation: props.animation,
    duration: props.duration,
  })
}

onMounted(() => {
  setNav()
})
</script>

<template>
  <ul class="uk-nav-default" ref="el">
    <slot />
  </ul>
</template>
