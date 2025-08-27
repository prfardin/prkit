<script setup lang="ts">
import { GridPropsType } from '@u/props'
import { gridClassObject } from '@u/classes'
import { grid, RefElement } from '@u/util'
import { ref, computed, onMounted } from 'vue'

const props = defineProps<GridPropsType>()

// define template ref
const el = ref<RefElement>(null)

// define grid classes from defined props
const gridClass = computed(() => gridClassObject(props))

/**
 * we define all available options as props and
 * send it to gid function of UIkit.
 * it also sends undefined props to grid function.
 * we must check it in future if it reduces effectivity
 * it must be prevented and reworked
 */
onMounted(() => {
  grid(el.value, {
    margin: props.margin,
    'first-column': props.firstColumn,
    masonry: props.masonry,
    parallax: props.parallax,
  })
})
</script>

<template>
  <div class="uk-grid" :class="gridClass" ref="el">
    <slot />
  </div>
</template>
