<script setup lang="ts">
import { NavBar } from '@u/props'
import { navbar, RefElement } from '@u/util'
import { onMounted, ref } from 'vue'
import PrContainer from '@c/core/PrContainer.vue'

const props = withDefaults(defineProps<NavBar>(), {
  prContainer: 'uk-container',
  align: 'left',
  dropbar: false,
  dropbarAnchor: false,
  dropbarTransparentMode: false,
  stretch: false,
  mode: 'click, hover',
  delayShow: 0,
  delayHide: 800,
  boundary: true,
  target: false,
  targetX: false,
  targetY: false,
  offset: 0,
  animation: 'uk-animation-fade',
  animateOut: false,
  bgScroll: true,
  closeOnScroll: false,
  duration: 200,
  container: false,
})

const el = ref<RefElement>(null)

onMounted(() => {
  navbar(el.value, {
    align: props.align,
    dropbar: props.dropbar,
    dropbarAnchor: props.dropbarAnchor,
    dropbarTransparentMode: props.dropbarTransparentMode,
    stretch: props.stretch,
    mode: props.mode,
    delayShow: props.delayShow,
    delayHide: props.delayHide,
    // @ts-ignore
    boundary: props.boundary,
    target: props.target,
    targetX: props.targetX,
    targetY: props.targetY,
    offset: props.offset,
    animation: props.animation,
    animateOut: props.animateOut,
    bgScroll: props.bgScroll,
    closeOnScroll: props.closeOnScroll,
    duration: props.duration,
    container: props.container,
  })
})
</script>

<template>
  <nav class="uk-navbar-container">
    <pr-container :class="prContainer">
      <div ref="el">
        <slot />
      </div>
    </pr-container>
  </nav>
</template>
