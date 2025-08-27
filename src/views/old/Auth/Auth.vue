<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'
import { RefElement, heightViewport } from '@u/util'

// components
import PrButton from '@c/core/PrButton.vue'
import PrSection from '@c/core/PrSection.vue'
import PrTile from '@c/core/PrTile.vue'
import PrGrid from '@c/core/PrGrid.vue'
import PrContainer from '@c/core/PrContainer.vue'

// images
import Board from '@i/auth/board.svg'

// i18n
const { t } = useI18n()

const el = ref<RefElement>(null)

onMounted(() => {
  heightViewport(el.value.$el, { offsetTop: true })
})
</script>

<template>
  <pr-section class="pr-auth-section pr-auth-section-muted uk-flex uk-flex-middle" ref="el">
    <div class="uk-width-1-1">
      <pr-container small>
        <pr-grid collapse match class="pr-auth-background-muted pr-auth-height">
          <div class="pr-auth-side uk-width-1-3@m pr-light uk-light">
            <div class="pr-auth-logo-container uk-width-auto">
              <span class="pr-auth-logo-icon">E</span>
              <span>{{ t('company.name') }}</span>
              <span class="uk-text-muted">{{ t('auth.logo_text') }}</span>
            </div>
            <pr-tile class="pr-auth-tile pr-auth-tile-primary uk-flex uk-flex-top">
              <div>
                <h3 class="uk-text-bold">
                  {{ t('auth.side.header_1') }}<br />{{ t('auth.side.header_2') }}<br />{{
                    t('auth.side.header_3')
                  }}
                </h3>
                <p class="pr-margin-medium-top uk-text-muted uk-text-small">
                  {{ t('auth.side.comment_1') }}<br />{{ t('auth.side.comment_2') }}
                </p>
              </div>
              <picture>
                <source type="image/webp" :srcset="Board" />
                <img class="pr-auth-side-icon-board" :src="Board" alt="" loading="eager" />
              </picture>
            </pr-tile>
          </div>
          <div class="pr-auth-container uk-width-expand@m">
            <div class="pr-auth-helper-container uk-width-auto">
              <span>{{ t('auth.helper_text') }}</span>
              <pr-button to="/register/verify" text>{{ t('auth.get_help') }}</pr-button>
            </div>
            <div class="uk-tile pr-auth-tile-muted pr-auth-tile-xlarge uk-flex uk-flex-top">
              <div class="uk-width-1-1">
                <h2 class="pr-auth-heading uk-margin-remove-bottom">
                  {{ t('auth.register.header') }}
                </h2>
                <p class="uk-margin-small-top">
                  {{ t('auth.register.comment_1') }}<br />{{ t('auth.register.comment_2') }}
                </p>
                <div class="uk-margin-medium-top">
                  <router-view></router-view>
                </div>
              </div>
            </div>
          </div>
        </pr-grid>
      </pr-container>
    </div>
  </pr-section>
</template>

<style lang="less"></style>
