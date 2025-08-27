<script setup lang="ts">
import { CardPropsType } from '@u/props'
import { cardClassObject } from '@u/classes'
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<CardPropsType>(), {})

const cardClass = computed(() => cardClassObject(props))

const el = ref<HTMLElement | null>(null)

defineExpose({ el })
</script>

<template>
  <div :class="cardClass" ref="el">
    <slot />
  </div>
</template>
