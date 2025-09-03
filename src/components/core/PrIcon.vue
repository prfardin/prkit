<script setup lang="ts">
import { IconPropsType, IconDefaults } from '@u/props'
import { icon, RefElement } from '@u/util'
import { ref, onMounted, watchEffect } from 'vue'

const props = withDefaults(defineProps<IconPropsType>(), IconDefaults)

// define template ref
const el = ref<RefElement>(null)

/**
 * do setIcon and watch props change
 * we need to know which method is better,
 * do setIcon and watch [props.icon, props.ratio] or just watchEffect
 * for now watchEffect used cause its clean
 * maybe need change to Composable icon in future
 */
function setIcon() {
  return icon(el.value, props)
}

/**
 * must change in future
 * we need watchEffect just in dev mode, that because we are changing icons
 */
onMounted(() => {
  watchEffect(setIcon)
})
</script>

<template>
  <component :is="tag" ref="el"></component>
</template>
