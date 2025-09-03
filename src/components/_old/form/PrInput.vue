<script setup lang="ts">
import { InputPropsType } from '@u/props'
import { inputClassObject, inputIconClassObject } from '@u/classes'
import { computed, ref, onMounted } from 'vue'
import PrIcon from '@c/core/PrIcon.vue'

const props = withDefaults(defineProps<InputPropsType>(), {
  type: 'text',
})

// define input classes from defined props
const inputClass = computed(() => inputClassObject(props))
const iconClass = computed(() => inputIconClassObject(props))

// define template ref
const input = ref<HTMLInputElement>(null)

// set input value and update on input change, set it to model
const model = defineModel()

/**
 * we have different mod for input, so we need
 * to bind props on an object and set all props to every input
 * on every mod we define, we also want to prevent to define another component,
 * so we use this way, may need change it in future because we believe there
 * is better practice.
 */
const bindProps = {
  ref: input,
  id: props.label || props.id,
  name: props.name,
  type: props.type,
  autofocus: props.autofocus,
  class: inputClass.value,
  ariaLabel: props.ariaLabel,
  disabled: props.disabled,
}

// for autofocus
onMounted(() => {
  if (props.autofocus) {
    input.value?.focus()
  }
})
</script>

<template>
  <div>
    <div v-if="icon" class="uk-inline">
      <label v-if="label" :for="label"></label>
      <pr-icon :class="iconClass" :icon="icon" :ratio="ratio" />
      <input v-model="model" v-bind="bindProps" :disabled="disabled" />
    </div>
    <template v-else>
      <label v-if="label" :for="label"></label>
      <input v-model="model" v-bind="bindProps" :disabled="disabled" />
    </template>
  </div>
</template>
