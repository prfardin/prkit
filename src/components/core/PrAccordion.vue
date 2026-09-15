<script setup lang="ts">
import { onMounted, unref, useTemplateRef, watch } from 'vue'
import { isDev, devComputed } from '@u/env.ts'
import { useComponentEmit } from '@cc/useComponentEmit.ts'
import { useRefElement } from '@cc/useRefElement.ts'

import { type AccordionPropsType, AccordionDefaults } from '@u/props'
import { type AccordionEmitsType, accordionEmits, } from '@u/emits.ts'
import { type RefElement, setAccordion, setIcon, getAccordionIconName } from '@u/util'
import { accordionClasses } from '@u/classes'

const props = withDefaults(defineProps<AccordionPropsType>(), AccordionDefaults)

const emit = defineEmits<AccordionEmitsType>()

const el = useTemplateRef<RefElement>('el')
const icon = useTemplateRef<RefElement>('icon')
const selected = defineModel<unknown>()

const accordionClass = devComputed(() => accordionClasses(props))

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

const handler = (event: Event) => {
  emit(event.type as any, event, selected.value)
}

onMounted(() => {
  const active =
    selected.value != null && props.list
      ? props.list.findIndex((item) => item.value === selected.value)
      : props.active

  setAccordion(el.value, props, active)
  updateIcon()

  if (isDev) {
    watch([() => props.icon, () => props.iconRatio], () => {
      updateIcon()
    })
  }
})

useComponentEmit(el, handler, accordionEmits)

if (props.refElement) {
  useRefElement(el, props.refElement)
}
</script>

<template>
  <component :class="accordionClass" :is="tag" ref="el">
    <template v-if="list">
      <component :is="itemTag" v-for="(item, index) in list" :key="index">
        <a
          class="uk-accordion-title"
          href=""
          @click="selected = selected === item.value ? null : item.value"
        >
          {{ item.title }}
          <span v-if="iconName" class="pr-accordion-icon uk-accordion-icon" ref="icon" />
        </a>
        <div class="uk-accordion-content">{{ item.content }}</div>
      </component>
    </template>
    <slot v-else />
  </component>
</template>
