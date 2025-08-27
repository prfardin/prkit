<script setup lang="ts">
import { RefElement, tab } from '@u/util'

import { onMounted, ref } from 'vue'
import { Tab } from '@u/props'
import PrLink from '@c/core/PrLink.vue'

const el = ref<RefElement>(null)

const props = withDefaults(defineProps<Tab>(), {
  toggle: 'selector	> *',
  active: 0,
  duration: 200,
  swiping: true,
  media: 960,
})

onMounted(() => {
  tab(el.value, {
    connect: props.connect,
    toggle: props.toggle,
    active: props.active,
    animation: props.animation,
    duration: props.duration,
    swiping: props.swiping,
    media: props.media,
  })
})
</script>

<template>
  <ul class="uk-tab-left uk-tab" ref="el">
    <li v-for="(d, index) in tabs" :key="index">
      <pr-link class="" :to="d.href">{{ d.title }}</pr-link>
    </li>
  </ul>
</template>
