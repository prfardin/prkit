<script setup lang="ts">
import { TextareaPropsType } from '@u/props'
import { textareaClassObject, inputIconClassObject } from '@u/classes'
import { computed, ref, onMounted } from 'vue'
import PrIcon from '@c/core/PrIcon.vue'

const props = withDefaults(defineProps<TextareaPropsType>(), {
  type: 'text',
})

// define textarea classes from defined props
const textareaClass = computed(() => textareaClassObject(props))
const iconClass = computed(() => inputIconClassObject(props))

// define template ref
const textarea = ref<HTMLTextAreaElement>(null)

// set textarea value and update on textarea change, set it to model
const model = defineModel<any>()

/**
 * we have different mod for textarea, so we need
 * to bind props on an object and set all props to every textarea
 * on every mod we define, we also want to prevent to define another component,
 * so we use this way, may need change it in future because we believe there
 * is better practice.
 */
const bindProps = {
  ref: textarea,
  id: props.label || props.id,
  name: props.name,
  type: props.type,
  autofocus: props.autofocus,
  class: textareaClass.value,
  ariaLabel: props.ariaLabel,
  disabled: props.disabled,
  rows: props.rows,
}

// for autofocus
onMounted(() => {
  if (props.autofocus) {
    textarea.value?.focus()
  }
})
</script>

<template>
  <div>
    <div v-if="icon" class="uk-inline">
      <label v-if="label" :for="label"></label>
      <pr-icon :class="iconClass" :icon="icon" :ratio="ratio" />
      <textarea v-model="model" v-bind="bindProps" :disabled="disabled" />
    </div>
    <template v-else>
      <label v-if="label" :for="label"></label>
      <textarea v-model="model" v-bind="bindProps" :disabled="disabled" />
    </template>
  </div>
</template>

<style scoped>
.uk-textarea {
  box-sizing: border-box;
  background: #fdfdfd;
  border: 1px solid #ededf2;
}
</style>
