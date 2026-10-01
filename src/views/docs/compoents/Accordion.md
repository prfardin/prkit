<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'

import PrAccordion from '@c/PrAccordion.vue'
import { accordionToggle, setAccordion, setIcons } from '@u/util.ts'
import type { RefElement } from '@u/types.ts'
import PrAccordionContent from '@/components/core/children/PrAccordionContent.vue'
import PrAccordionTitle from '@/components/core/children/PrAccordionTitle.vue'
import PrAccordionItem from '@cch/PrAccordionItem.vue'

const selected = ref(null)

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

const accordion = useTemplateRef<RefElement>('accordion')

onMounted(() => {
  setAccordion(accordion.value)

  setIcons(accordion.value, '.pr-accordion-icon', {
    icon: 'component-default-accordion-plus',
    ratio: 0.9,
    strokeRatio: 2,
  })
})
</script>

# Accordion

<p
  class="uk-text-lead"
>Create a list of items that can be shown individually by clicking an item's header.</p>

<hr cls="uk-margin-large-top uk-margin-medium-bottom" />

<h2 class="uk-h3">Usage</h2>

The Accordion component consists of a parent container with the `uk-accordion` attribute, and a
title and content part for each accordion item.

<div class="uk-overflow-auto">
    <table class="uk-table uk-table-divider">
        <thead>
            <tr>
                <th>Class</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>.uk-accordion-title</code></td>
                <td>
                    Defines and styles the toggle for each accordion item.
                    Use <code>&lt;a&gt;</code> elements.
                </td>
            </tr>
            <tr>
                <td><code>.uk-accordion-content</code></td>
                <td>Defines the content part for each accordion item.</td>
            </tr>
        </tbody>
    </table>
</div>

To apply a style to the accordion, add the `.uk-accordion-default` modifier.

```xml
<PrAccordion
  v-model="selected"
  :ref-element="setRefElement"
  :list="accordionList"
  @click="(event) => console.log(event.type)"
/>
```

<h2 class="uk-h3">Default Style - UIKit {{ selected }}</h2>

<PrAccordion
v-model="selected"
:ref-element="setRefElement"
:list="accordionList"
@beforehide="(event) => console.log(event.type)"
/>

<h2 class="uk-h3">Line Style</h2>

<PrAccordion :list="accordionList" variant="line" />

<h2 class="uk-h3">Hover Style</h2>

<PrAccordion :list="accordionList" variant="hover" />

<hr class="uk-margin-large" />

## With List Array

<PrAccordion :list="accordionList" />

## With Child Component

<PrAccordion>
    <PrAccordionItem>
        <PrAccordionTitle
            :icon-ratio="0.9"
            :stroke-ratio="3"
        >
            Item 1
        </PrAccordionTitle>
        <PrAccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
        </PrAccordionContent>
    </PrAccordionItem>
    <PrAccordionItem>
        <PrAccordionTitle
            icon="chevron"
            :icon-ratio="0.9"
            :stroke-ratio="3"
        >
            Item 2
        </PrAccordionTitle>
        <PrAccordionContent>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor reprehenderit.
        </PrAccordionContent>
    </PrAccordionItem>
    <PrAccordionItem>
        <PrAccordionTitle
            icon="plus"
            :icon-ratio="0.9"
            :stroke-ratio="3"
        >
            Item 2
        </PrAccordionTitle>
        <PrAccordionContent>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor reprehenderit.
        </PrAccordionContent>
    </PrAccordionItem>
    <PrAccordionItem>
        <PrAccordionTitle
            icon="circle"
            :icon-ratio="0.9"
            :stroke-ratio="3"
        >
            Item 2
        </PrAccordionTitle>
        <PrAccordionContent>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor reprehenderit.
        </PrAccordionContent>
    </PrAccordionItem>

</PrAccordion>

## With Slot - Without Child Component (CSS class)

<ul class="pr-accordion-hover" ref="accordion">
    <li>
        <a class="uk-accordion-title">
            Item 1
            <span class="pr-accordion-icon uk-accordion-icon" />
        </a>
        <div class="uk-accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
        </div>
    </li>
    <li>
        <a class="uk-accordion-title">
            Item 2
            <span class="pr-accordion-icon uk-accordion-icon" />
        </a>
        <div class="uk-accordion-content">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor reprehenderit.
        </div>
    </li>
</ul>

<a @click="toggle">Toggle</a>
