<script setup lang="ts">
import PrGrid from '@c/core/PrGrid.vue'
import PrIcon from '@c/core/PrIcon.vue'

interface Props {
  title: string
  forms: [
    {
      label: string
      input: string
      icon: string
    },
  ]
}

const porps = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <h3
    class="uk-text-small uk-text-bold uk-margin-remove pr-padding-1-left pr-padding-1-right pr-padding-1-bottom"
  >
    {{ title }}
  </h3>
  <div class="flex uk-flex-column">
    <div class="group" v-for="(form, index) in forms" :key="index">
      <pr-grid small class="uk-flex-middle">
        <div class="uk-width-auto">
          <div class="uk-text-muted uk-text-small">{{ form.label }}</div>
          <div>{{ form.input }}</div>
        </div>
        <div class="uk-width-expand uk-text-right">
          <pr-icon class="uk-width-1-1" :icon="form.icon" ratio=".7" />
        </div>
        <div class="uk-width-auto">
          <span class="uk-text-primary uk-text-small edit uk-text-bold">Edit</span>
        </div>
      </pr-grid>
    </div>
  </div>
</template>

<style scoped>
.pr-padding-1-top {
  padding-top: 1rem;
}

.pr-padding-1-bottom {
  padding-bottom: 1rem;
}

.pr-padding-1-right {
  padding-right: 1rem;
}

.pr-padding-1-left {
  padding-left: 1rem;
}

.group {
  width: 100%;
  padding: 1rem;
  position: relative;
  border-top: 1px solid rgb(229, 231, 235);
  cursor: pointer;
}

.group::before {
  content: '';
  position: absolute;
  width: 100%;
}

.edit {
  opacity: 0;
  transition: 0.2s;
}

.group:hover {
  background-color: rgba(13, 119, 255, 0.05);
}

.group:hover .edit {
  opacity: 1;
}
</style>
