<script setup lang="ts">
import prIcon from '@c/core/PrIcon.vue'
import { buttonClassObject } from '@u/classes'
import { useSlots, computed } from 'vue'
import type { ButtonPropsType } from '@u/props.ts'

// must be import from util/classes

// define button classes
const props = withDefaults(defineProps<ButtonPropsType>(), {
  tag: 'router-link',
  spinnerMod: 'line',
  mode: 'solid',
  color: 'primary',
  size: 'md',
})

const slots = useSlots()

const buttonClass = computed(() => buttonClassObject(props, !!slots.default))

// define emits
const emit = defineEmits(['click'])
function handleClick(e: PointerEvent) {
  emit('click', e)
}
</script>

<template>
  <router-link v-if="to" :to="to" @click="handleClick" :class="buttonClass">
    <pr-icon v-if="icon" :icon="icon" :ratio="ratio" />
    <span v-if="icon"><slot /></span>
    <slot v-else />
  </router-link>
  <a v-else :href="href" @click="handleClick" :class="buttonClass">
    <pr-icon v-if="icon" :icon="icon" :ratio="ratio" />
    <span v-if="icon"><slot /></span>
    <slot v-else />
  </a>
</template>
