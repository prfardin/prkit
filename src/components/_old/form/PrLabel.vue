<script setup lang="ts">
import { computed } from 'vue'
import { labelClassObject } from '@u/classes'
import PrIcon from '@c/core/PrIcon.vue'

// must remove with future release of vue and must use as
import { LabelPropsType } from '@u/props'

const props = defineProps<LabelPropsType>()

// define label classes from defined props
const labelClass = computed(() => labelClassObject(props))
</script>

<template>
  <label :class="labelClass" :for="props.for">
    <slot />
    <pr-icon :class="iconClass" :icon="icon" :ratio="ratio" />
  </label>
</template>
