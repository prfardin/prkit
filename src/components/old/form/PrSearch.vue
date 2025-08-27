<script setup lang="ts">
import PrIcon from '@c/core/PrIcon.vue'
import { SearchPropsType } from '@u/props'
import { onMounted, ref, watch } from 'vue'

const model = defineModel()

const props = withDefaults(defineProps<SearchPropsType>(), {
  placeholder: 'Search',
})

const el = ref<any>(null)

onMounted(() => {
  if (props.autofocus) {
    el.value?.focus()
  }
})

watch(
  () => props.autofocus,
  (newValue) => {
    if (newValue) {
      el.value?.focus()
    }
  },
)
</script>

<template>
  <form class="uk-search uk-search-default pr-search-default uk-form-stacked">
    <label :for="id" :class="['uk-form-label', labelCls]">{{ label }}</label>
    <div class="uk-form-controls uk-position-relative">
      <pr-icon class="uk-search-icon" icon="search"></pr-icon>
      <input
        ref="el"
        :name="id"
        :id="id"
        class="uk-search-input"
        type="search"
        :placeholder="placeholder"
        aria-label="Search"
        v-model="model"
      />
    </div>
  </form>
</template>

<style scoped></style>
