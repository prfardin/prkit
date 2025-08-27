<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { formData } from '@sc/fetch'
import { useI18n } from 'vue-i18n'
import PrGrid from '@c/core/PrGrid.vue'
import PrInput from '@c/core/form/PrInput.vue'
import PrLabel from '@c/core/form/PrLabel.vue'
import PrButton from '@c/core/PrButton.vue'

const loader = ref(false)
const router = useRouter()
const { t } = useI18n()

// a computed ref
function publishedPasswordMessage() {
  return form.data.password ? 'ذخیره رمز عبور' : 'نیاز به رمز عبور ندارم'
}

interface Form {
  data: {
    password: string
    repeat_password: string
  }
  busy: boolean
}

// data
const form = formData({}) as unknown as Form
</script>

<template>
  <form class="uk-form-stacked pr-auth-width-large">
    <pr-grid medium>
      <div class="uk-width-large@s uk-width-expand@m">
        <pr-grid small class="uk-child-width-1-1">
          <div>
            <pr-label
              for="password"
              class="pr-auth-form-label"
              icon="question"
              :ratio="0.5"
              icon-class="pr-auth-form-helper"
              >{{ t('auth.password.password') }}</pr-label
            >
            <pr-input
              id="password"
              name="password"
              small
              type="password"
              autofocus
              cls="pr-auth-input pr-direction-ltr uk-input uk-form-small"
              class="uk-width-1-1 verify"
              v-model="form.data.password"
            />
          </div>
          <div>
            <pr-label
              for="repeat_password"
              class="pr-auth-form-label"
              icon="question"
              :ratio="0.5"
              icon-class="pr-auth-form-helper"
              >{{ t('auth.password.repeatPassword') }}</pr-label
            >
            <pr-input
              id="repeat_password"
              name="repeat_password"
              small
              cls="pr-auth-input pr-direction-ltr uk-input uk-form-small"
              class="uk-width-1-1 verify"
              v-model="form.data.repeat_password"
              type="password"
              @keyup.enter="router.push({ query: { step: 'Type' } })"
            />
          </div>
        </pr-grid>
      </div>
      <div class="uk-width-1-1">
        <div class="uk-width-small@s">
          <pr-button
            class="pr-auth-button-primary"
            to="/register/verify"
            primary
            small
            square
            icon="arrow-right"
            :ratio="0.8"
            icon-flip
            :spinner="loader"
            @click="loader = true"
            spinner-mod="circle"
            >{{ t('auth.password.signUp') }}</pr-button
          >
        </div>
      </div>
    </pr-grid>
  </form>
</template>
