<script setup lang="ts">
import { isDev } from '@u/env.ts'
import { type AccordionPropsType, AccordionDefaults } from '@u/props'
import { type RefElement, setAccordion, setIcon, getAccordionIconName } from '@u/util'
import { onMounted, computed, useTemplateRef, watchEffect } from 'vue'
import { accordionClassObject } from '@u/classes'

const props = withDefaults(defineProps<AccordionPropsType>(), AccordionDefaults)

const el = useTemplateRef<RefElement>('el')
const icon = useTemplateRef<RefElement>('icon')

const accordionClass = computed(() => accordionClassObject(props))

const iconName = computed(() => getAccordionIconName(props.icon))

const itemTag: string = props.tag === 'ul' ? 'li' : 'div'

function updateIcon() {
  iconName.value &&
    setIcon(icon.value, {
      icon: iconName.value,
      ratio: props.iconRatio,
    })
}

onMounted(() => {
  setAccordion(el.value, props)
  updateIcon()

  watchEffect(() => {
    setAccordion(el.value, props)
    updateIcon()
  })
})
</script>

<template>
  <component :class="accordionClass" :is="tag" ref="el">
    <template v-if="list">
      <component :is="itemTag" v-for="(item, index) in list" :key="index">
        <a class="uk-accordion-title" href="">
          {{ item.title }}
          <span v-if="iconName" class="uk-accordion-icon" ref="icon" />
        </a>
        <div class="uk-accordion-content">{{ item.content }}</div>
      </component>
    </template>
    <slot v-else />
  </component>
</template>
