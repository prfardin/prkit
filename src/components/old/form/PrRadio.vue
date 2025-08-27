<script setup lang="ts">
import { RadioPropsType } from '@u/props'
import { radioClassObject } from '@u/classes'
import { computed, ref, watch } from 'vue'

const props = withDefaults(defineProps<RadioPropsType>(), {
  mode: 'circle',
})

const model = defineModel()

const isSelected = computed(() => {
  return model.value === props.value
})

const radioClass = computed(() => radioClassObject(props))
</script>

<template>
  <div class="pr-radio-content" :class="{ 'pr-radio-active': isSelected }">
    <div :class="radioClass">
      <input type="radio" :name="name" :id="id" v-model="model" :value="value" />
      <span class="pr-radio-effect">
        <span class="pr-radio-effect-icon"></span>
        <span class="pr-radio-effect-loading"></span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.pr-radio-content {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
}

.pr-radio {
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  margin: 0;
  padding: 0;
  position: relative;
  box-sizing: border-box;
  z-index: 10;
  &.pr-radio-square {
    border-radius: 0;
  }
  &.pr-radio-rounded {
    border-radius: 5px;
  }
  &.pr-radio-circle {
    border-radius: 999px;
  }
}

.pr-radio input {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;
  opacity: 0;
  cursor: pointer;
}

.pr-radio-effect,
.pr-radio-effect-icon {
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.pr-radio-effect {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  left: 0;
  top: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 10;
}

.pr-radio-content.pr-radio-active .pr-radio-effect-icon {
  opacity: 0;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}

.pr-radio input:active ~ .pr-radio-effect:after {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}

.pr-radio-content.pr-radio-active .pr-radio-effect:after {
  border: 7px solid #006af3;
}

.pr-radio-effect:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  border: 1px solid #e5e5e5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  display: block;
}
</style>
