<script setup lang="ts">
import { isDev, devComputed } from '@u/env.ts'
import { type AccordionPropsType, AccordionDefaults } from '@u/props'
import { type RefElement, setAccordion, setIcon, getAccordionIconName } from '@u/util'
import { onMounted, unref, useTemplateRef, watchEffect } from 'vue'
import { accordionClassObject } from '@u/classes'

const props = withDefaults(defineProps<AccordionPropsType>(), AccordionDefaults)

const el = useTemplateRef<RefElement>('el')
const icon = useTemplateRef<RefElement>('icon')

const accordionClass = devComputed(() => accordionClassObject(props))

const iconName = devComputed(() => getAccordionIconName(props.icon))

const itemTag = props.tag === 'ul' ? 'li' : 'div'

function updateIcon() {
  const name = unref(iconName)

  name &&
    setIcon(icon.value, {
      icon: name,
      ratio: props.iconRatio,
    })
}

onMounted(() => {
  setAccordion(el.value, props)
  updateIcon()

  if (isDev) {
    watchEffect(() => {
      setAccordion(el.value, props)
      updateIcon()
    })
  }
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
