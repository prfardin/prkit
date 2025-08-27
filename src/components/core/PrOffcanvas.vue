<script setup lang="ts">
import { OffcanvasPropsType } from '@u/props'
import { offcanvas, RefElement } from '@u/util'
import { onMounted, ref } from 'vue'
import PrToggle from '@c/core/PrToggle.vue'
import PrIcon from '@c/core/PrIcon.vue'

const props = withDefaults(defineProps<OffcanvasPropsType>(), {
  escClose: true,
  bgClose: true,
  closeButton: true,
  notNav: true,
})

const el = ref<RefElement>(null)

onMounted(() => {
  offcanvas(el.value, {
    mode: props.mode,
    flip: props.flip,
    overlay: props.overlay,
    // @ts-ignore
    escClose: props.escClose,
    bgClose: props.bgClose,
    container: props.container,
  })
})
</script>

<template>
  <div :id="props.id" ref="el">
    <div class="uk-offcanvas-bar">
      <div v-if="notNav" class="uk-flex uk-flex-middle uk-flex-between">
        <slot name="title" />
        <pr-toggle v-if="closeButton" class="pr-offcanvas-close" tag="a" :target="`#${props.id}`">
          <pr-icon icon="line-angle-right-b" />
        </pr-toggle>
      </div>
      <slot name="content" />
    </div>
  </div>
</template>
