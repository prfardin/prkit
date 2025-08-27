<script setup lang="ts">
import { RefElement, switcher } from '@u/util'
import { SwitcherPropsType } from '@u/props'
import { onMounted, ref } from 'vue'

const el = ref<RefElement>(null)
const isSwitcher = ref<any>(null)
const marginInlineStart = ref<number>(0)

const props = withDefaults(defineProps<SwitcherPropsType>(), {
  toggle: '.pr-switcher > button',
})

const setWidth = ref<number>(props.list.length)

function setSwitcher() {
  return switcher(el.value, {
    connect: props.connect,
    toggle: props.toggle,
    itemNav: props.itemNav,
    active: props.active,
    animation: props.animation,
    duration: props.duration,
    swiping: props.swiping,
    followFocus: props.followFocus,
  })
}

onMounted(() => {
  isSwitcher.value = setSwitcher()
})

// set margin-inline-start for change our cover position
// we set margin-inline-start with default value and calculate switchers length
// then We calculate the correct margin-inline-start value.

function isSelect(key: number) {
  marginInlineStart.value = (100 / setWidth.value) * key
}
</script>

<template>
  <div class="pr-switcher" ref="el">
    <button v-for="(item, index) in list" :key="index" type="button" @click="isSelect(index)">
      {{ item.name }}
    </button>
    <div
      class="pr-switcher-cover"
      :style="{
        'margin-inline-start': marginInlineStart + '%',
        width: `calc( 100% / ${setWidth})`,
      }"
    ></div>
  </div>
</template>
