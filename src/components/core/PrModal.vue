<script setup lang="ts">
import { ModalPropsType } from '@u/props'
import { modal, RefElement } from '@u/util'
import { onMounted, ref } from 'vue'

const el = ref<RefElement>(null)

const props = withDefaults(defineProps<ModalPropsType>(), {})

onMounted(() => {
  modal(el.value, {
    'esc-close': props.escClose,
    'bg-close': props.bgClose,
    stack: props.stack,
    container: props.container,
    'cls-page': props.clsPage,
    'cls-panel': props.clsPanel,
    'sel-close': props.selClose,
  })
})
</script>

<template>
  <div :id="id" ref="el">
    <div class="uk-modal-dialog uk-modal-body" :class="cls">
      <slot />
    </div>
  </div>
</template>
