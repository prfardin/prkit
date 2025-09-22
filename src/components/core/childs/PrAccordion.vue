<script setup lang="ts">
import { AccordionPropsType, AccordionDefaults } from '@u/props'
import { accordion, RefElement } from '@u/util'
import { ref, onMounted } from 'vue'

const props = withDefaults(defineProps<AccordionPropsType>(), AccordionDefaults)

// define template ref
const el = ref<RefElement>(null)

const listItemRenderTag: string = props.tag === 'ul' ? 'li' : 'div'

/**
 * we define all available options as props and
 * send it to accordion function of UIkit.
 * it also sends undefined props to accordion function.
 * we must check it in future if it reduces effectivity it
 * must be prevented and reworked
 */
onMounted(() => {
  accordion(el.value, props)
})
</script>

<template>
  <component :is="tag" ref="el">
    <template v-if="list">
      <component :is="listItemRenderTag" v-for="(item, index) in list" :key="index">
        <a class="uk-accordion-title" href>{{ item.title }}</a>
        <div class="uk-accordion-content">{{ item.content }}</div>
      </component>
    </template>
    <slot v-else />
  </component>
</template>
