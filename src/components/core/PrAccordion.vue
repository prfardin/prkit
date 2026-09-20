<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { isDev, devComputed, devPropsWatch } from '@u/env.ts'
import type { RefElement } from '@u/types.ts'
import { type AccordionPropsType, accordionDefaults } from '@u/props'
import { type AccordionEmitsType, accordionEmits } from '@u/emits.ts'
import { setAccordion, getAccordionIconName } from '@u/util'
import { useComponentEmit } from '@cc/useComponentEmit.ts'
import { useComponentIcon } from '@cc/useComponentIcon.ts'
import { accordionClasses } from '@u/classes'

/**
 * PrAccordion
 * ========================================================================
 *
 *
 * */

const props = withDefaults(defineProps<AccordionPropsType>(), accordionDefaults)

const emit = defineEmits<AccordionEmitsType>()

const el = ref<RefElement>(null)
function setElement(value: RefElement) {
  el.value = value
  props.refElement?.(value)
}

const { iconName } = useComponentIcon(props, getAccordionIconName)

const itemTag = props.tag === 'ul' ? 'li' : 'div'
const accordionClass = devComputed(() => accordionClasses(props))

const selected = defineModel<unknown>()

function getActive() {
  return selected.value != null && props.list
    ? props.list.findIndex((item) => item.value == selected.value)
    : props.active
}

const emitHandler = (event: Event) => {
  emit(event.type as any, event, selected.value)
}

useComponentEmit(el, accordionEmits, emitHandler)

onMounted(() => {
  setAccordion(el.value, props, getActive())

  if (isDev) {
    devPropsWatch(
      props,
      () => {
        setAccordion(el.value, props, getActive())
      },
      { exclude: ['modelValue', 'refElement'] },
    )
  }
})
</script>

<template>
  <component :class="accordionClass" :is="tag" :ref="setElement">
    <template v-if="list">
      <template v-for="item in list">
        <component :is="itemTag" :class="{'pr-accordion-item-disabled': item.disabled }">
          <a
            class="uk-accordion-title"
            href=""
            @click="!item.disabled && (selected = selected === item.value ? null : item.value)"
          >
            {{ item.title }}
            <span v-if="iconName" class="pr-accordion-icon uk-accordion-icon" ref="icon" />
          </a>
          <div class="uk-accordion-content">{{ item.content }}</div>
        </component>
      </template>
    </template>
    <slot v-else />
  </component>
</template>
