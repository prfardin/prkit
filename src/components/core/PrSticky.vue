<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RefElement, sticky } from '@u/util'
import { StickyPropsType } from '@u/props'

const el = ref<RefElement>(null)

const props = withDefaults(defineProps<StickyPropsType>(), {
  position: 'top',
  start: 0,
  end: false,
  offset: 0,
  overflowFlip: false,
  animation: false,
  clsActive: 'uk-active',
  showOnUp: false,
  media: false,
  targetOffset: false,
})

onMounted(() => {
  sticky(el.value, {
    position: props.position,
    start: props.start,
    end: props.end,
    offset: props.offset,
    // @ts-ignore
    overflowFlip: props.overflowFlip,
    animation: props.animation,
    clsActive: props.clsActive,
    clsInactive: props.clsInactive,
    widthElement: props.widthElement,
    showOnUp: props.showOnUp,
    media: props.media,
    targetOffset: props.targetOffset,
  })
})
</script>

<template>
  <div ref="el">
    <slot />
  </div>
</template>
