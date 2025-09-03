<script setup lang="ts">
import { CheckboxPropsType } from '@u/props'
import { checkboxClassObject } from '@u/classes'
import { computed, ref, watch } from 'vue'

const props = withDefaults(defineProps<CheckboxPropsType>(), {
  mode: 'rounded',
})

const checkboxClass = computed(() => checkboxClassObject(props))

const model = defineModel()
</script>

<template>
  <div class="pr-checkbox-content">
    <div class="pr-checkbox-icon">
      <input
        class="pr-checkbox"
        type="checkbox"
        :value="value"
        :name="name"
        v-model="model"
        :id="name"
      />
      <div :class="checkboxClass">
        <i class="pr-icon-check">
          <span>
            <i class="line1"></i>
            <i class="line2"></i>
          </span>
        </i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pr-checkbox-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.pr-checkbox-icon {
  width: 20px;
  height: 20px;
  border-radius: 999px;
  position: relative;
  z-index: 1;
  background-color: rgb(var(--color-default));
}

.pr-checkbox-mask {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 50;
  cursor: pointer;
  pointer-events: none;
  -webkit-box-sizing: border-box;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: -1;
  box-sizing: border-box;
  &.pr-checkbox-mask-square {
    border-radius: 0;
  }
  &.pr-checkbox-mask-rounded {
    border-radius: 5px;
  }
  &.pr-checkbox-mask-circle {
    border-radius: 999px;
  }
}

.pr-checkbox-mask i:not(.pr-icon-check) {
  color: #fdfdfd;
  font-size: 1.1em;
}

.pr-checkbox-mask:after,
.pr-checkbox-mask i:not(.pr-icon-check) {
  opacity: 0;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}

.pr-checkbox-mask:after {
  background: #006af3;
  border-radius: inherit;
}

.pr-checkbox-mask:after,
.pr-checkbox-mask:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.pr-checkbox-mask:before {
  border-radius: inherit;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  border: var(--size-1-px) solid rgb(var(--color-muted-200));
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.pr-checkbox-mask .pr-icon-check {
  opacity: 0;
  z-index: 200;
}

.pr-checkbox {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  z-index: 100;
  cursor: pointer;
}

.pr-checkbox:disabled {
  opacity: 0;
  pointer-events: none;
}

.pr-checkbox:active ~ .pr-checkbox-mask {
  background: rgba(222, 224, 237, 0.85) !important;
}

.pr-checkbox:hover ~ .pr-checkbox-mask {
  background: rgb(var(--color-muted-300));
}

.pr-checkbox:hover ~ .pr-checkbox-mask:before {
  border: 1px solid rgba(230, 233, 234, 0);
}

.pr-checkbox:checked:hover ~ .pr-checkbox-mask {
  -webkit-box-shadow: 0 3px 15px 0 rgba(0, 106, 243, 0.35);
  box-shadow: 0 3px 15px 0 rgba(0, 106, 243, 0.35);
}

.pr-checkbox:checked ~ .pr-checkbox-mask {
  -webkit-box-shadow: 0 0 0 0 rgba(0, 106, 243, 0.35);
  box-shadow: 0 0 0 0 rgba(0, 106, 243, 0.35);
}

.pr-checkbox:checked ~ .pr-checkbox-mask i:not(.pr-icon-check) {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.25s ease 0.15s;
  transition: all 0.25s ease 0.15s;
}

.pr-checkbox:checked ~ .pr-checkbox-mask .pr-icon-check {
  opacity: 1;
}

.pr-checkbox:checked ~ .pr-checkbox-mask .pr-icon-check span .line1:after {
  width: 100%;
  -webkit-transition: all 0.25s ease 0.1s;
  transition: all 0.25s ease 0.1s;
}

.pr-checkbox:checked ~ .pr-checkbox-mask .pr-icon-check span .line2:after {
  -webkit-transition: all 0.2s ease 0.3s;
  transition: all 0.2s ease 0.3s;
  height: 100%;
}

.pr-checkbox:checked ~ .pr-checkbox-mask:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.pr-checkbox:checked ~ .pr-checkbox-mask:before {
  opacity: 0;
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

@-webkit-keyframes rotateCheckboxLoading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes rotateCheckboxLoading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

.pr-icon-check {
  width: 20px;
  height: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  border-radius: inherit;
}

.pr-icon-check span {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  display: block;
  position: relative;
  width: 6px;
  height: 9px;
  margin-right: 3px;
}

.pr-icon-check span .line1 {
  background: transparent;
  content: '';
  position: absolute;
  height: 2px;
  border-radius: 3px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  z-index: 100;
  width: 6px;
  bottom: 0;
}

.pr-icon-check span .line1:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: #fdfdfd;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  border-radius: 3px 0 0 3px;
}

.pr-icon-check span .line2 {
  bottom: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  content: '';
  position: absolute;
  height: 14px;
  border-radius: 3px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  width: 2px;
}

.pr-icon-check span .line2:after {
  content: '';
  position: absolute;
  width: 2px;
  height: 0%;
  background: #fdfdfd;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  bottom: 0;
  border-radius: 3px 3px 0 0;
}
</style>
