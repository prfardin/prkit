<script setup lang="ts">
import { ref } from 'vue'
import PrNavBar from '@c/core/PrNavBar.vue'
import Logo from '@i/logo-inverse.png'
import PrLink from '@c/core/PrLink.vue'
import PrIcon from '@c/core/PrIcon.vue'
import PrSection from '@c/core/PrSection.vue'
import PrContainer from '@c/core/PrContainer.vue'
import PrGrid from '@c/core/PrGrid.vue'
import PrTab from '@c/core/prTab.vue'

const tabs = ref<any>([
  { title: 'Personal', href: '/settings' },
  { title: 'Security', href: '/settings/security' },
  { title: 'Notifications', href: '/settings/notifications' },
  { title: 'API Tokens', href: '/settings/tokens' },
])
</script>

<template>
  <div>
    <pr-nav-bar class="uk-navbar-transparent" style="padding: 20px 0">
      <div class="uk-navbar-left">
        <pr-link to="/" class="uk-flex uk-flex-center uk-flex-middle">
          <img :src="Logo" alt="logo" width="35" height="30" />
        </pr-link>
      </div>
      <div class="uk-navbar-center">
        <div class="uk-text-bold">Settings</div>
      </div>
      <div class="uk-navbar-right">
        <pr-link class="text-center" to="/" reset>
          <pr-icon icon="line-multiply" ratio="1.3" />
          <div class="uk-text-small">Back</div>
        </pr-link>
      </div>
    </pr-nav-bar>
    <pr-section small>
      <pr-container>
        <div class="uk-width-1-1 uk uk-position-relative">
          <pr-grid>
            <div class="uk-width-1-4">
              <pr-tab animation="uk-animation-fade" :tabs="tabs"></pr-tab>
            </div>
            <div class="uk-width-expand">
              <div>
                <router-view></router-view>
              </div>
            </div>
          </pr-grid>
        </div>
      </pr-container>
    </pr-section>
  </div>
</template>

<style scoped></style>
