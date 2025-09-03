<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import PrButton from '@c/core/PrButton.vue'
import PrGrid from '@c/core/PrGrid.vue'
import PrInput from '@c/core/form/PrInput.vue'
import PrLabel from '@c/core/form/PrLabel.vue'
import { formData } from '@sc/fetch'
import { useRouter } from 'vue-router'

const router = useRouter()
interface Form {
  data: {
    mobile: string
  }
  busy: boolean
}
// define input models
const form = formData({}) as unknown as Form
const code = ref('+98')

const { t } = useI18n()

const loader = ref(false)

function clicked() {
  form.busy = true
  loader.value = true
  router.push({ path: '/register/verify' })
}
</script>

<template>
  <form class="uk-form-stacked pr-auth-width-large">
    <pr-grid small class="uk-flex-bottom">
      <div class="uk-width-large@s uk-width-expand@m">
        <pr-label
          for="mobile"
          class="pr-auth-form-label"
          icon="question"
          :ratio="0.5"
          icon-class="pr-auth-form-helper"
          >{{ t('auth.register.mobile') }}</pr-label
        >
        <div class="pr-auth-form-group pr-auth-form-group-small uk-text-left">
          <pr-input
            v-model="code"
            name="code"
            small
            cls="pr-auth-input pr-auth-input-phone-code pr-direction-ltr uk-text-center"
            disabled
          />
          <pr-input
            v-model="form.data.mobile"
            id="mobile"
            name="mobile"
            small
            cls="pr-auth-input pr-direction-ltr uk-input uk-form-small"
            class="uk-width-1-1"
            autofocus
          />
        </div>
      </div>
      <div class="uk-width-auto@s">
        <pr-button
          tag="a"
          class="pr-auth-button-primary"
          primary
          small
          square
          icon="arrow-right"
          :ratio="0.8"
          icon-flip
          :spinner="loader"
          @click="clicked"
          spinner-mod="circle"
          >{{ t('auth.register.submit') }}</pr-button
        >
      </div>
    </pr-grid>
    <div class="pr-margin-xsmall-top">
      <pr-label for="test" class="pr-auth-form-label">
        <input
          id="test"
          checked
          class="pr-auth-form-input uk-checkbox pr-margin-xsmall-right"
          type="checkbox"
          value=""
        />
        {{ t('auth.terms_and_privacy') }} <a href="#">{{ t('auth.terms') }}</a> and
        <a href="#">{{ t('auth.privacy') }}</a></pr-label
      >
    </div>
  </form>
</template>

<style lang="less"></style>
