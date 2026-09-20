<script setup lang="ts">
import { type IconPropsType, IconDefaults } from '@u/props'
import { setIcon } from '@u/util'
import type { RefElement } from '@u/types.ts'
import { ref, onMounted, watchEffect } from 'vue'

const props = withDefaults(defineProps<IconPropsType>(), IconDefaults)

const el = ref<RefElement>(null)

function setIconAgain() {
  return setIcon(el.value, props)
}

onMounted(() => {
  watchEffect(setIconAgain)
})
</script>

<template>
  <component :is="tag" ref="el"></component>
</template>
