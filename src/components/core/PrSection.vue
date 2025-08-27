<script setup lang="ts">
import { SectionPropsType } from '@u/props'
import { sectionClassObject } from '@u/classes'
import { computed } from 'vue'

const props = defineProps<SectionPropsType>()

// define section classes from defined props
const sectionClass = computed(() => sectionClassObject(props))

const emit = defineEmits(['mounted'])
</script>

<template>
  <div :class="sectionClass">
    <slot />
  </div>
</template>
