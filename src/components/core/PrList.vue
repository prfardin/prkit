<script setup lang="ts">
import { ListPropsType } from '@u/props'
import { listClassObject } from '@u/classes'
import { RefElement } from '@u/util'
import { computed, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<ListPropsType>(), {
  tag: 'ul',
})

// define section classes from defined props
const listClass = computed(() => listClassObject(props))

// define template ref
const el = ref<RefElement>(null)

onMounted(() => {
  if (props.tag !== 'ul') el.value.setAttribute('role', 'list')
})
</script>

<template>
  <component :is="tag" :class="listClass" ref="el">
    <slot />
  </component>
</template>
