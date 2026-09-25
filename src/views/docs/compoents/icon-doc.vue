<script setup lang="ts">
import PrIcon from '@c/PrIcon.vue'

</script>

<template>
  <!-- Icon -->
  <div class="uk-container uk-container-xsmall">
    <h1 id="icon" class="uk-text-center">Icon</h1>
    <div class="uk-text-center">
      <pr-icon icon="icon-solar-bold-add-circle" :ratio="2" />
      <pr-icon icon="icon-solar-bold-wineglass" :ratio="2" />
      <pr-icon icon="icon-solar-bold-add-folder" :ratio="2" />
      <pr-icon icon="icon-solar-bolddu-black-hole" :ratio="2" />
      <pr-icon icon="icon-solar-bolddu-airbuds-left" :ratio="2" />
      <pr-icon icon="icon-solar-bold-add-circle" :ratio="2" />
      <pr-icon icon="icon-solar-bolddu-add-circle" :ratio="2" />
      <pr-icon icon="icon-solar-broken-add-circle" :ratio="2" :stroke-ratio="1.5" />
      <pr-icon icon="icon-solar-linear-add-circle" :ratio="2" :stroke-ratio="1.5" />
      <pr-icon icon="icon-solar-linedu-add-circle" :ratio="2" :stroke-ratio="1.5" />
      <pr-icon icon="icon-solar-linedu-black-hole" :ratio="2" :stroke-ratio="1.5" />
      <pr-icon icon="icon-solar-outline-add-circle" :ratio="2" />
      <pr-icon icon="icon-solar-outline-black-hole" :ratio="2" />
      <pr-icon icon="icon-isocons-duotonetop-123" :ratio="5" :stroke-ratio="2" />
    </div>
  </div>
</template>
