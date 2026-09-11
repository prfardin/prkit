<script setup lang="ts">
import { type AccordionPropsType, AccordionDefaults } from '@u/props'
import { type RefElement, setAccordion } from '@u/util'
import { ref, onMounted, computed } from 'vue'
import { accordionClassObject } from '@u/classes.ts'

const props = withDefaults(defineProps<AccordionPropsType>(), AccordionDefaults)

// define template ref
const el = ref<RefElement>(null)

// define button classes from defined props
const accordionClass = computed(() => accordionClassObject(props))

const listItemRenderTag: string = props.tag === 'ul' ? 'li' : 'div'

/**
 * we define all available options as props and
 * send it to accordion function of UIkit.
 * it also sends undefined props to accordion function.
 * we must check it in future if it reduces effectivity it
 * must be prevented and reworked
 */
onMounted(() => {
  setAccordion(el.value, props)
})
</script>

<template>
  <component :class="accordionClass" :is="tag" ref="el">
    <template v-if="list">
      <component :is="listItemRenderTag" v-for="(item, index) in list" :key="index">
        <a class="uk-accordion-title" href="">
          {{ item.title }}
          <span uk-accordion-icon></span>
        </a>
        <div class="uk-accordion-content">{{ item.content }}</div>
      </component>
    </template>
    <slot v-else />
  </component>
</template>
