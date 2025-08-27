<script setup lang="ts">
import PrGrid from '@c/core/PrGrid.vue'
import SettingForm from '@c/theme/settingForm.vue'
import { ref } from 'vue'

const about = ref<any>([
  { label: 'Email address', input: 'mayar@gmail.com', icon: 'line-edit-alt' },
  { label: 'Preferred name', input: 'Maya Rosselini', icon: 'line-edit-alt' },
  { label: 'Legal name', input: 'Maya Rosselini', icon: 'line-edit-alt' },
])

function test() {
  return `<span> test </span>`
}

const additional = ref<any>([
  { label: 'Date of birth', input: '08/23/1986', icon: 'line-edit-alt' },
  { label: 'Phone number', input: '+1 559 454 15', icon: 'line-edit-alt' },
  {
    label: 'Address',
    input: `47, Victorian Av.${test()} Suite G3, New York, NY`,
    icon: 'line-edit-alt',
  },
])

const privacy = ref<any>([
  { label: 'Email address', input: 'mayar@gmail.com', icon: 'line-edit-alt' },
  { label: 'Preferred name', input: 'Maya Rosselini', icon: 'line-edit-alt' },
  { label: 'Legal name', input: 'Maya Rosselini', icon: 'line-edit-alt' },
])
</script>

<template>
  <div style="padding: 24px 0">
    <div>
      <pr-grid medium>
        <div class="uk-width-medium">
          <h3 class="uk-h5 pr-margin-xsmall-bottom uk-text-bold">About you</h3>
          <p class="uk-margin-remove uk uk-text-small">
            Some basic information that we need to know about you, and to process legal matters.
          </p>
        </div>
        <div class="uk-width-expand">
          <div class="uk-child-width-1-1">
            <setting-form title="Your info" :forms="about" />
          </div>
        </div>
      </pr-grid>
    </div>
    <div class="uk-margin-large-top">
      <pr-grid medium>
        <div class="uk-width-medium">
          <h3 class="uk-h5 pr-margin-xsmall-bottom uk-text-bold">Additional info</h3>
          <p class="uk-margin-remove uk uk-text-small">
            Some useful information that we could need to reach out to you or for a few checks.
          </p>
        </div>
        <div class="uk-width-expand">
          <div class="uk-child-width-1-1">
            <setting-form title="Additional info" :forms="additional" />
          </div>
        </div>
      </pr-grid>
    </div>
    <div class="uk-margin-large-top">
      <pr-grid medium>
        <div class="uk-width-medium">
          <h3 class="uk-h5 pr-margin-xsmall-bottom uk-text-bold">Privacy settings</h3>
          <p class="uk-margin-remove uk uk-text-small">
            Tell us how you woould like us to handle your personal data and information.
          </p>
        </div>
        <div class="uk-width-expand">
          <div class="uk-child-width-1-1">
            <setting-form title="Privacy" :forms="privacy" />
          </div>
        </div>
      </pr-grid>
    </div>
  </div>
</template>

<style scoped></style>
