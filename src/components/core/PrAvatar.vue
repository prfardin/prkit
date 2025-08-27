<script setup lang="ts">
import { AvatarPropsType } from '@u/props'
import { avatarClassObject } from '@u/classes'
import { computed } from 'vue'

const props = withDefaults(defineProps<AvatarPropsType>(), {
  tag: 'span',
})

const avatarClass = computed(() => avatarClassObject(props))
</script>

<template>
  <component :is="tag" :class="[avatarClass, cls]">
    <slot />
  </component>
</template>
