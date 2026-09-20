<script setup lang="ts">
import { ref } from 'vue'

import PrAccordion from '@c/PrAccordion.vue'
import { accordionToggle } from '@u/util.ts'
import type { RefElement } from '@u/types.ts'
import PrAccordionContent from '@cch/PrAccordionContent.vue'
import PrAccordionTitle from '@cch/PrAccordionTitle.vue'
import PrAccordionItem from '@cch/PrAccordionItem.vue'

const selected = ref(13)

const accordionList = [
  {
    value: 11,
    title: 'Accordion Item 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    value: 12,
    disabled: true,
    title: 'Accordion Item 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    value: 13,
    title: 'Accordion Item 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const refElement = ref<RefElement>(null)
const setRefElement = (el: RefElement) => {
  refElement.value = el
}

function toggle() {
  // accordionToggle(testRef.value?.$el, 1, false)
  accordionToggle(refElement.value, 2, true)
}
</script>

<template>
  <!-- Accordion -->
  <div class="uk-container uk-container-xsmall">
    <h1 id="accordion" class="uk-text-center">Accordion</h1>
    <div>
      <!-- Styles -->
      <h2>Default Style - UIKit {{ selected }}</h2>
      <a @click="selected++">Plus</a>
      <a class="uk-margin-left" @click="toggle()">Toggle</a>
      <PrAccordion
        v-model="selected"
        :ref-element="setRefElement"
        :list="accordionList"
        @beforehide="(event) => console.log(event.type)"
        icon="default"
        :active="0"
      />
      <h2>Line Style</h2>
      <PrAccordion :list="accordionList" variant="line" />
      <h2>Hover Style</h2>
      <PrAccordion :list="accordionList" variant="hover" />

      <!-- With Array List -->
      <h2>With List Array</h2>
      <PrAccordion :list="accordionList" />

      <!-- With Child Component -->
      <h2>With Child Component</h2>
      <PrAccordion>
        <PrAccordionItem>
          <PrAccordionTitle>Item 1</PrAccordionTitle>
          <PrAccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </PrAccordionContent>
        </PrAccordionItem>
        <PrAccordionItem>
          <PrAccordionTitle icon="chevron">Item 2</PrAccordionTitle>
          <PrAccordionContent>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor reprehenderit.
          </PrAccordionContent>
        </PrAccordionItem>
        <PrAccordionItem>
          <PrAccordionTitle icon="plus">Item 2</PrAccordionTitle>
          <PrAccordionContent>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor reprehenderit.
          </PrAccordionContent>
        </PrAccordionItem>
        <PrAccordionItem>
          <PrAccordionTitle icon="circle">Item 2</PrAccordionTitle>
          <PrAccordionContent>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor reprehenderit.
          </PrAccordionContent>
        </PrAccordionItem>
      </PrAccordion>

      <!-- With Slot - Without Child Component (Child CSS class) -->
      <h2>With Slot - Without Child Component (CSS class)</h2>
      <PrAccordion :active="1">
        <li>
          <a class="uk-accordion-title">Item 1</a>
          <div class="uk-accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
        </li>
        <li>
          <a class="uk-accordion-title">Item 2</a>
          <div class="uk-accordion-content">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor reprehenderit.
          </div>
        </li>
      </PrAccordion>
    </div>
  </div>
</template>
