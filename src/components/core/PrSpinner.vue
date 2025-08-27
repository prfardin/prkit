<script setup lang="ts">
import { SpinnerPropsType } from '@u/props'
import { spinnerClassObject } from '@u/classes'
import { computed } from 'vue'

const props = withDefaults(defineProps<SpinnerPropsType>(), {
  tag: 'span',
  mode: 'line',
})

// define button classes from defined props
const spinnerClass = computed(() => spinnerClassObject(props))
</script>

<template>
  <component :is="tag" :class="spinnerClass">
    <span></span>
    <span></span>
    <span></span>
  </component>
</template>
