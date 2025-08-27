<script setup lang="ts">
import { formData } from '@sc/fetch'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Components
import PrGrid from '@c/core/PrGrid.vue'
import PrInput from '@c/core/form/PrInput.vue'
import PrLabel from '@c/core/form/PrLabel.vue'
import PrIcon from '@c/core/PrIcon.vue'
import PrTextarea from '@c/core/form/PrTextarea.vue'
import PrSelectBox from '@c/core/form/PrSelectBox.vue'
import PrButton from '@c/core/PrButton.vue'
import PrLink from '@c/core/PrLink.vue'

const router = useRouter()

interface Form {
  data: {
    company_name: string
    id: number
  }
  busy: boolean
}

const list = ref<any>([
  { name: 'Inc.', id: 1 },
  { name: 'Ltd.', id: 2 },
  { name: 'LLC ', id: 3 },
  { name: 'PLC ', id: 4 },
])

// data
const data = ref({ name: 'Inc.', id: 1 })
const form = formData({}) as unknown as Form

function submitForm() {
  router.push({ name: 'businessOrganization' })
}
</script>

<template>
  <form class="uk-form-stacked uk-flex uk-flex-between uk-flex-column">
    <pr-grid class="uk-child-width-1-1">
      <div>
        <pr-label for="company_name" icon="question" :ratio="0.5" icon-class="pr-auth-form-helper"
          >Company name</pr-label
        >
        <pr-grid small>
          <div class="uk-width-expand@s">
            <pr-input
              id="company_name"
              name="company_name"
              cls="pr-auth-input pr-direction-ltr uk-input uk-form-small"
              class="uk-width-1-1"
              autofocus
              v-model="form.data.company_name"
            />
          </div>
          <div class="uk-width-small@s">
            <pr-select-box
              name="company_name"
              v-model="form.data.id"
              :d="data.name"
              divider
              :lists="list"
            />
          </div>
        </pr-grid>
        <div class="uk-margin-top uk-width-1-1">
          <div class="pr-auth-info type">
            <pr-icon icon="file-info-alt"></pr-icon>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
      </div>
      <div>
        <pr-label for="">Business description</pr-label>
        <pr-textarea :rows="5" name="" />
      </div>
    </pr-grid>
    <div class="uk-margin-medium-top">
      <pr-grid class="uk-child-width-1-1 uk-child-width-auto@s uk-flex-middle uk-flex-between@s">
        <div>
          <pr-link class="pr-auth-button" muted square small :to="{ name: 'businessType' }"
            >previous</pr-link
          >
        </div>
        <div>
          <pr-button
            class="pr-auth-button-primary"
            primary
            small
            square
            icon="line-arrow-right"
            icon-class="uk-flex-last"
            tag="a"
            @click="submitForm"
            >test</pr-button
          >
        </div>
      </pr-grid>
    </div>
  </form>
</template>

<style>
.pr-auth-info {
  background-color: rgba(1, 94, 255, 0.1);
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #669eff;
  border-radius: 4px;
  gap: 8px;
  color: #0a0b0b;
}
.type .uk-icon .pr-icon-primary {
  color: #4d8bff;
  transition: color 0.2s;
}

.type .uk-icon .pr-icon-secondary {
  color: rgba(4, 93, 255, 0.19);
  transition: color 0.2s;
}

.type .uk-icon .pr-icon-tertiary {
  color: #ffffff;
  transition: color 0.2s;
}

.type .uk-icon .pr-icon-quaternary {
  color: rgba(4, 93, 255, 0.15);
  transition: color 0.2s;
}
</style>
