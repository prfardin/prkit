<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
function checkActiveRoute(id: string) {
  return route.hash === '#' + id ? 'uk-active' : ''
}
const DocLinks = ['Accordion', 'Icon']

import PrIcon from '@c/core/PrIcon.vue'
import PrAccordion from '@c/core/PrAccordion.vue'

const accordionList = [
  {
    title: 'Item 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Item 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]
</script>

<template>
  <div
    class="uk-width-medium uk-position-fixed uk-position-left uk-overflow-auto uk-height-viewport"
    style="border-right: 1px solid #e7e7e1"
  >
    <div class="uk-padding">
      <ul class="uk-nav uk-nav-primary">
        <RouterLink
          v-for="(link, index) in DocLinks"
          :to="{ hash: '#' + link.toLowerCase() }"
          v-bind="$props"
          v-slot="{ navigate }"
          custom
          :key="index"
        >
          <li :class="checkActiveRoute(link.toLowerCase())" @click="navigate">
            <a>{{ link }}</a>
          </li>
        </RouterLink>
      </ul>
    </div>
  </div>

  <div class="uk-section uk-section-default">
    <div class="uk-container uk-container-small">
      <!-- Accordion -->
      <h1 id="accordion" class="uk-text-center">Accordion</h1>
      <div>
        <!-- With List -->
        <h2>With List Array</h2>
        <pr-accordion :list="accordionList" :active="1" />

        <!-- With Child Component -->
        <h2>With Child Component</h2>
        <pr-accordion>
          <li>
            <a class="uk-accordion-title">Item 1</a>
            <div class="uk-accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </li>
          <li class="uk-open">
            <a class="uk-accordion-title">Item 2</a>
            <div class="uk-accordion-content">
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor reprehenderit.
              </p>
            </div>
          </li>
        </pr-accordion>

        <!-- With Slot -->
        <h2>With Slot</h2>
        <pr-accordion :active="1">
          <li>
            <a class="uk-accordion-title">Item 1</a>
            <div class="uk-accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title">Item 2</a>
            <div class="uk-accordion-content">
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor reprehenderit.
              </p>
            </div>
          </li>
        </pr-accordion>
      </div>

      <!-- Icon -->
      <h1 id="icon" class="uk-text-center">Icon</h1>
      <div class="uk-text-center">
        <pr-icon icon="icon-isocons-solidsharptop-123" ratio="5" />
        <pr-icon icon="icon-huge-bulk-user" ratio="3" />
        <pr-icon icon="icon-huge-duotone-3rd-bracket-square" ratio="3" />
        <pr-icon icon="icon-solar-duotoneso-upload" ratio="3" />
        <pr-icon icon="icon-solar-broken-home-smile" ratio="3" />
        <pr-icon icon="icon-solar-duotoneso-home-smile" ratio="3" />
        <pr-icon icon="icon-solar-duotone-home-smile" ratio="3" />
      </div>

      <!-- End -->
      <div class="uk-height-viewport"></div>
    </div>
  </div>
</template>
