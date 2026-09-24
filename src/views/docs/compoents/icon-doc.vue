<script setup lang="ts">
import PrIcon from '@c/PrIcon.vue'

</script>

<template>
  <!-- Icon -->
  <div class="uk-container uk-container-xsmall">
    <h1 id="icon" class="uk-text-center">Icon</h1>
    <div class="uk-text-center">
      <pr-icon icon="icon-fa-duotone-00" ratio="2" />
      <pr-icon icon="icon-fa-duotone-abacus" ratio="2" />
      <pr-icon icon="icon-fa-duotone-user" ratio="2" />
      <pr-icon icon="icon-fa-duotone-phone" ratio="2" />
      <pr-icon icon="icon-fa-duotone-add" ratio="2" />
      <pr-icon icon="icon-fa-duotone-user-circle" ratio="2" />
      <pr-icon icon="icon-iconoir-solid-align-left-box" ratio="2" />
      <pr-icon icon="icon-iconoir-solid-dots-grid-3x3" ratio="5" strokeRatio="2" />
      <pr-icon icon="icon-iconoir-regular-accessibility" ratio="10" />
      <pr-icon icon="icon-isocons-duotonetop-123" ratio="5" :stroke-ratio="2" />
    </div>
  </div>
</template>
