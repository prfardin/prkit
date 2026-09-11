<script setup lang="ts">
import { type AccordionPropsType, AccordionDefaults } from '@u/props'
import {
  type RefElement,
  setAccordion,
  setIcon,
  checkAccordionIcon,
  getAccordionIconName,
} from '@u/util'
import { onMounted, computed, useTemplateRef } from 'vue'
import { accordionClassObject } from '@u/classes'

const props = withDefaults(defineProps<AccordionPropsType>(), AccordionDefaults)

const el = useTemplateRef<RefElement>('el')
const accordionIcon = useTemplateRef<RefElement>('icon')

const accordionClass = computed(() => accordionClassObject(props))

const hasIcon = checkAccordionIcon(props.icon)

const listItemRenderTag: string = props.tag === 'ul' ? 'li' : 'div'

/**
 * we define all available options as props and
 * send it to accordion function of UIkit.
 * it also sends undefined props to accordion function.
 * TODO: Check if it reduces effectivity it must be prevented and reworked
 */
onMounted(() => {
  setAccordion(el.value, props)
  hasIcon &&
    setIcon(accordionIcon.value, {
      icon: getAccordionIconName(props.icon),
      ratio: props.iconRatio,
    })
})
</script>

<template>
  <component :class="accordionClass" :is="tag" ref="el">
    <template v-if="list">
      <component :is="listItemRenderTag" v-for="(item, index) in list" :key="index">
        <a class="uk-accordion-title" href="">
          {{ item.title }}
          <span v-if="hasIcon" class="uk-accordion-icon" ref="icon" />
        </a>
        <div class="uk-accordion-content">{{ item.content }}</div>
      </component>
    </template>
    <slot v-else />
  </component>
</template>
