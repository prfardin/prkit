<script setup lang="ts"></script>

<template>
  <div class="uk-position-relative">
    <div class="flex-table">
      <slot name="head" />
      <slot name="cell" />
    </div>
  </div>
</template>

<style scoped></style>
