<script lang="ts" setup>
// import { SelectBoxClassObject, SelectBoxIconClassObject } from '@u/classes'
import { SelectBoxPropsType } from '@u/props'
import { drop, RefElement } from '@u/util'
import { ref, onMounted } from 'vue'
import UIkit from 'uikit'
import PrIcon from '@c/core/PrIcon.vue'

// set props with defaults
const props = withDefaults(defineProps<SelectBoxPropsType>(), {
  mode: 'click',
  node: 'title',
  id: 'id',
  type: 'text',
  searchable: false,
})

let dGet = true

// data
const model = defineModel({
  get(v) {
    if (dGet && props.d) {
      dGet = false
      return props.d
    }
    return v
  },
})
const el = ref<RefElement>(null)
const isOpen = ref<boolean>(false)

onMounted(() => {
  drop(el.value, {
    duration: 300,
    mode: props.mode,
    pos: 'bottom-center',
    offset: 5,
    boundary: '.pr-select',
    stretch: 'x',
    flip: false,
  })

  // we write this for handle show and hide drop
  // need fix types and fix in util in util.ts
  // when we insert more features for this component we use this more and we insert more options
  // @ts-ignore
  UIkit.util.on(el.value, 'beforeshow', (e) => {
    isOpen.value = true
  })
  // @ts-ignore
  UIkit.util.on(el.value, 'beforehide', (e) => {
    isOpen.value = false
  })

  // for set default value with props
  // I am writing this but I think there is a problem and I need to find and fix it in the future
})

// we use this for select options in our select box
// need change and set types
function clicked(list: any) {
  model.value = list[props.node as any]
  drop(el.value).hide(false)
}

const inputProps = {
  type: props.type,
  name: props.name,
  id: props.name,
}

const inputRef = ref<any>(null)
const selectRef = ref<any>(null)

onMounted(() => {
  if (props.searchable) {
    selectRef.value.addEventListener('click', (e: any) => {
      inputRef.value.focus()
    })
  }
})
</script>

<template>
  <div class="uk-position-relative">
    <div
      class="pr-select"
      style="height: 23px !important"
      :class="{ 'pr-searchable': searchable }"
      ref="selectRef"
    >
      <div class="pr-select-item" :class="{ open: isOpen }">
        <input class="pr-select-input" v-bind="inputProps" v-model="model" ref="inputRef" />
        <span class="pr-select-input-chevron" :class="{ divider: props.divider }">
          <pr-icon icon="line-angle-down" />
        </span>
      </div>
    </div>
    <div class="pr-option-box" ref="el">
      <div class="scrollbar">
        <ul class="uk-nav uk-dropdown-nav">
          <li v-for="(list, index) in lists" :key="index">
            <a class="pr-option" @click="clicked(list)" :class="{ 'uk-active': list === model }">{{
              list[node]
            }}</a>
          </li>
          <li class="uk-text-center" v-if="!lists?.length">هیچ داده ای پیدا نشد</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
