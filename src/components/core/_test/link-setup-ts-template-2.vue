<script setup lang="ts">
import { useRouter } from 'vue-router'

interface Props {
  to?: string
  href?: string
  primary?: boolean
  secondary?: boolean
}

const props = defineProps<Props>()
const router = useRouter()
const emit = defineEmits(['click'])

const classes = {
  'uk-button-primary': props.primary,
  'uk-button-secondary': props.secondary,
}

function handleClick(e: EventTarget) {
  if (props.to) {
    router.push(props.to)
  } else if (props.href) {
    window.open(props.href)
  }
  emit('click', e)
}
</script>

<template>
  <a :href="props.to" @click="handleClick" :class="classes"><slot /></a>
</template>
