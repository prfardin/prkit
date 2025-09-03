<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { accordion, RefElement } from '@u/util'
import { AccordionDefaults, AccordionPropsType } from '@u/props'
import { AccordionClassObject } from '@u/classes'
import PrIcon from '@c/core/PrIcon.vue'

const props = withDefaults(defineProps<AccordionPropsType>(), AccordionDefaults)

const el = ref<RefElement>(null)

onMounted(() => {
  accordion(el.value, {
    active: props.active,
    animation: props.animation,
    collapsible: props.collapsible,
    content: props.content,
    duration: props.duration,
    multiple: props.multiple,
    targets: props.targets,
    toggle: props.toggle,
    transition: props.transition,
    offset: props.offset,
  })
})

const AccordionClass = computed(() => AccordionClassObject(props))
</script>

<template>
  <ul ref="el" :class="AccordionClass">
    <li v-for="(data, index) in props.items" :key="index">
      <a class="uk-accordion-title" href="">
        <span>{{ data.title }}</span>
        <span class="pr-accordion-title-mode">
          <pr-icon v-if="props.titleMode === 'plus'" icon="line-plus" ratio=".67" />
          <pr-icon v-if="props.titleMode === 'chevron'" icon="line-angle-down" ratio=".8" />
        </span>
      </a>
      <div class="uk-accordion-content">
        {{ data.content }}
      </div>
    </li>
  </ul>
</template>
