<script setup lang="ts">
// import { TogglePropsType } from '@u/props'

import { onMounted, ref } from 'vue'
import { RefElement, toggle } from '@u/util'

interface TogglePropsType {
  tag?: 'a' | 'button'
  href?: string | undefined
  target?: string | undefined
  mode?: string | undefined
  cls?: string | undefined
  media?: number | string | undefined
  animation?: string | undefined
  duration?: number | undefined
  queued?: boolean | undefined
}

const el = ref<RefElement>(null)

const props = withDefaults(defineProps<TogglePropsType>(), {
  tag: 'a',
})

onMounted(() => {
  toggle(el.value, {
    target: props.target,
    mode: props.mode,
    cls: props.cls,
    media: props.media,
    animation: props.animation,
    duration: props.duration,
    queued: props.queued,
  })
})
</script>

<template>
  <component :is="tag" ref="el" :type="tag === 'button' && 'button'" :href="href">
    <slot />
  </component>
</template>
