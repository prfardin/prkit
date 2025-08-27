<script setup lang="ts">
import { TablePropsType } from '@u/props'
import { RefElement } from '@u/util'
import { TableClassObject } from '@u/classes'
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<TablePropsType>(), {})

const el = ref<RefElement>(null)

const TableClass = computed(() => TableClassObject(props))
</script>

<template>
  <table ref="el" :class="TableClass">
    <thead>
      <tr>
        <slot name="head" />
      </tr>
    </thead>
    <tbody>
      <slot name="row" />
    </tbody>
  </table>
</template>

<style scoped></style>
