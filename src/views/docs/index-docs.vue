<script setup lang="ts">
import PrIcon from '@c/core/PrIcon.vue'
import PrAccordion from '@c/core/PrAccordion.vue'

const accordionList = [
  { title: 'Item 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  { title: 'Item 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
]
</script>

<template>
  <!-- Accordion -->
  <div class="uk-background-default">
    <div class="uk-section uk-section-default">
      <div class="uk-container uk-container-large">
        <h1 class="uk-text-center">Accordion</h1>
        <div>
          <!-- With List -->
          <h2>With List Array</h2>
          <pr-accordion :list="accordionList" :active="1" />

          <!-- With Child Component -->
          <h2>With Child Component</h2>
          <pr-accordion>
            <li>
              <a class="uk-accordion-title" >Item 1</a>
              <div class="uk-accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </li>
            <li class="uk-open">
              <a class="uk-accordion-title" >Item 2</a>
              <div class="uk-accordion-content">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
              </div>
            </li>
          </pr-accordion>

          <!-- With Slot -->
          <h2>With Slot</h2>
          <pr-accordion :active="1">
            <li>
              <a class="uk-accordion-title" >Item 1</a>
              <div class="uk-accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </li>
            <li>
              <a class="uk-accordion-title" >Item 2</a>
              <div class="uk-accordion-content">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
              </div>
            </li>
          </pr-accordion>
        </div>
      </div>
    </div>
  </div>

  <!-- Icon -->
  <div class="uk-background-default">
    <div class="uk-section uk-section-default">
      <div class="uk-container uk-container-large">
        <h1 class="uk-text-center">Icon</h1>
        <div class="uk-text-center">
          <pr-icon icon="icon-isocons-solidsharptop-123" :ratio="3" />
          <pr-icon icon="icon-huge-bulk-user" :ratio="3" />
          <pr-icon icon="icon-solar-duotoneso-upload" :ratio="3" />
          <pr-icon icon="icon-solar-broken-home-smile" :ratio="3" />
          <pr-icon icon="icon-solar-duotoneso-home-smile" :ratio="3" />
          <pr-icon icon="icon-solar-duotone-home-smile" :ratio="3" />
        </div>
      </div>
    </div>
  </div>
</template>
