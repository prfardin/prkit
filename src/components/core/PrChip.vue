<script setup lang="ts">
import { ChipPropsType } from '@u/props'
import { chipClassObject } from '@u/classes'
import { computed } from 'vue'

const props = withDefaults(defineProps<ChipPropsType>(), {
  mode: 'solid',
  rounded: 'none',
})

const chipClass = computed(() => chipClassObject(props))
</script>

<template>
  <span :class="chipClass">
    <slot />
  </span>
</template>
