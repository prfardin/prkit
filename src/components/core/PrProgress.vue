<script setup lang="ts">
import { ProgressPropsType } from '@u/props'

const props = withDefaults(defineProps<ProgressPropsType>(), {
  max: 100,
})
</script>

<template>
  <progress class="uk-progress" :value="value" :max="max" :id="id" />
</template>
