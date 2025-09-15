<script setup lang="ts">
import prIcon from '@bc/core/PrIcon.vue'
import { buttonCls } from '@bs/scripts/util/classes'

// must be import from util/classes
// and will remove in future with release of vue
interface Props {
  to?: string
  href?: string
  default?: boolean
  primary?: boolean
  secondary?: boolean
  muted?: boolean
  xSmall?: boolean
  rounded?: boolean
  circle?: boolean
  collapse?: boolean
  icon?: string
  ratio?: number
}

// define button classes
const props = defineProps<Props>()
const classes = () => buttonCls(props)

// define emits
const emit = defineEmits(['click'])
function handleClick(e: EventTarget) {
  emit('click', e)
}
</script>

<template>
  <router-link v-if="to" :to="to" @click="handleClick" :class="classes()">
    <pr-icon v-if="icon" :icon="icon" :ratio="ratio" />
    <span v-if="icon"><slot /></span>
    <slot v-else />
  </router-link>
  <a v-else :href="href" @click="handleClick" :class="classes()">
    <pr-icon v-if="icon" :icon="icon" :ratio="ratio" />
    <span v-if="icon"><slot /></span>
    <slot v-else />
  </a>
</template>
