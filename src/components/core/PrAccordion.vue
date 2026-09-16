<script setup lang="ts">
import { onMounted, ref, unref, useTemplateRef } from 'vue'
import { isDev, devComputed } from '@u/env.ts'
import { type AccordionPropsType, accordionDefaults } from '@u/props'
import { type AccordionEmitsType, accordionEmits } from '@u/emits.ts'
import { useComponentEmit } from '@cc/useComponentEmit.ts'
import {
  type RefElement,
  setAccordion,
  setIcon,
  getAccordionIconName,
  devPropsWatch,
} from '@u/util'
import { accordionClasses } from '@u/classes'

const props = withDefaults(defineProps<AccordionPropsType>(), accordionDefaults)

const emit = defineEmits<AccordionEmitsType>()

const el = ref<RefElement>(null)
function setElement(value: RefElement) {
  el.value = value
  props.refElement?.(value)
}

const icon = useTemplateRef<RefElement>('icon')
const iconName = devComputed(() => getAccordionIconName(props.icon))

const itemTag = props.tag === 'ul' ? 'li' : 'div'
const accordionClass = devComputed(() => accordionClasses(props))

const selected = defineModel<unknown>()
function getActive() {
  return selected.value != null && props.list
    ? props.list.findIndex((item) => item.value == selected.value)
    : props.active
}

const handler = (event: Event) => {
  emit(event.type as any, event, selected.value)
}
function updateIcon() {
  const name = unref(iconName)

  name &&
  setIcon(icon.value, {
    icon: name,
    ratio: props.iconRatio,
  })
}

onMounted(() => {
  setAccordion(el.value, props, getActive())
  updateIcon()

  if (isDev) {
    devPropsWatch(props, () => {
      setAccordion(el.value, props, getActive())
      updateIcon()
    }, ['modelValue', 'refElement'])
  }
})

useComponentEmit(el, handler, accordionEmits)
</script>

<template>
  <component :class="accordionClass" :is="tag" :ref="setElement">
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
