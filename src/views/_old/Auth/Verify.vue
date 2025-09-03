<script setup lang="ts">
import PrButton from '@c/core/PrButton.vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import PrInput from '@c/core/form/PrInput.vue'
import PrGrid from '@c/core/PrGrid.vue'
import { formData } from '@sc/fetch'

const router = useRouter()

const { t } = useI18n()

interface Form {
  data: {
    verify_code: string
  }
  busy: boolean
}

const form = formData({}) as unknown as Form
</script>

<template>
  <form class="uk-form-stacked pr-auth-width-large">
    <pr-grid small>
      <div class="uk-width-large@s uk-width-expand@m">
        <div class="uk-flex uk-flex-between uk-flex-middle">
          <span
            style="font-size: 11px; background-color: rgba(218, 218, 218, 0.5); padding: 2px 5px"
          >
            <span> ارسال مجدد: </span>
            <span
              :uk-countdown="`date: ${new Date(new Date().setMinutes(new Date().getMinutes() + 2))}`"
            >
              <span>
                <span class="uk-countdown-minutes"></span>
              </span>
              <span>:</span>
              <span>
                <span class="uk-countdown-seconds"></span>
              </span>
            </span>
          </span>
          <label style="color: #6e6f75; font-size: 12px">
            <span>کد پیامک شده </span>
          </label>
        </div>
      </div>
      <div class="uk-width-auto@s uk-visible@m">
        <div class="pr-auth-width-small"></div>
      </div>
    </pr-grid>
    <pr-grid small collapse class="uk-flex-bottom">
      <div class="uk-width-expand">
        <div uk-grid class="uk-grid-small" style="margin-top: 4px; margin-bottom: 6px">
          <div class="uk-width-large@s uk-width-expand@m">
            <pr-input
              id="mobile"
              name="mobile"
              small
              cls="pr-auth-input pr-direction-ltr uk-input uk-form-small uk-text-center"
              class="uk-width-1-1"
              v-model="form.data.verify_code"
              autofocus
            />
          </div>
          <div class="uk-width-auto@s">
            <pr-button
              class="pr-auth-button-primary"
              to="/register/password"
              primary
              small
              square
              icon="arrow-right"
              ratio="0.8"
              icon-flip
              spinner-mod="circle"
              >{{ t('auth.register.submit') }}</pr-button
            >
          </div>
        </div>
      </div>
    </pr-grid>
  </form>
</template>
