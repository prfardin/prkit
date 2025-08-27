<script setup lang="ts">
import { AccordionPropsType } from '@u/props'
import { accordion, RefElement } from '@u/util'
import { computed, onMounted, ref } from 'vue'
import { AccordionClassObject } from '@u/classes'
import PrIcon from '@c/core/PrIcon.vue'

const props = withDefaults(defineProps<AccordionPropsType>(), {
  /*active: false,*/
  rounded: 'none',
  titleMode: 'dot',
  animation: true,
  collapsible: true,
  content: '> .uk-accordion-content',
  duration: 300,
  multiple: false,
  targets: '> *',
  toggle: '> .uk-accordion-title',
  transition: 'cubic-bezier(.4,0,.2,1)',
  offset: 0,
})

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
