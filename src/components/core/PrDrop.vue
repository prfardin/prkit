<script setup lang="ts">
import { DropPropsType } from '@u/props'
import { drop, RefElement } from '@u/util'
import { onMounted, ref } from 'vue'
import UIkit from 'uikit'

const props = withDefaults(defineProps<DropPropsType>(), {
  toggle: '- *',
  pos: 'bottom-left',
  stretch: false,
  mode: 'click, hover',
  delayShow: 0,
  delayHide: 800,
  autoUpdate: true,
  boundary: 'false',
  boundaryX: 'false',
  boundaryY: 'false',
  target: false,
  targetX: false,
  targetY: false,
  inset: false,
  flip: true,
  shift: true,
  offset: 0,
  animation: 'uk-animation-fade',
  animateOut: false,
  bgScroll: true,
  closeOnScroll: false,
  duration: 200,
  container: false,
})

const el = ref<RefElement>(null)

const setDrop = ref<any>(null)

onMounted(() => {
  setDrop.value = ref(
    drop(el.value, {
      toggle: props.toggle,
      pos: props.pos,
      stretch: props.stretch,
      mode: props.mode,
      delayShow: props.delayShow,
      delayHide: props.delayHide,
      autoUpdate: props.autoUpdate,
      display: props.display,
      boundary: props.boundary,
      boundaryX: props.boundaryX,
      boundaryY: props.boundaryY,
      boundaryAlign: props.boundaryAlign,
      target: props.target,
      targetX: props.targetX,
      targetY: props.targetY,
      inset: props.inset,
      flip: props.flip,
      shift: props.shift,
      offset: props.offset,
      animation: props.animation,
      animateOut: props.animateOut,
      bgScroll: props.bgScroll,
      closeOnScroll: props.closeOnScroll,
      duration: props.duration,
      container: props.container,
    }),
  )
})
</script>

<template>
  <div ref="el">
    <slot />
  </div>
</template>
