<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, onMounted, computed, reactive, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { heightViewport, RefElement } from '@u/util'

// components
import PrButton from '@c/core/PrButton.vue'
import PrLink from '@c/core/PrLink.vue'
import PrIcon from '@c/core/PrIcon.vue'
import PrSection from '@c/core/PrSection.vue'
import PrTile from '@c/core/PrTile.vue'
import PrGrid from '@c/core/PrGrid.vue'
import PrList from '@c/core/PrList.vue'
import PrContainer from '@c/core/PrContainer.vue'

// images
import Map from '@i/auth/map.svg'

// i18n
const { t } = useI18n()

const el = ref<RefElement>(null)

onMounted(() => {
  heightViewport(el.value.$el, { offsetTop: true })
})

interface Routers {
  link: string
  title: string
  isComplete?: string
}

const route = useRoute()

const routers = ref<Routers[]>([
  { link: '', title: 'auth.step.one.title', isComplete: 'pr-complete' },
  { link: 'businessType', title: 'auth.step.two.title' },
  { link: 'businessDetails', title: 'auth.step.three.title' },
  { link: 'businessOrganization', title: 'auth.step.four.title' },
  { link: 'personalDetails', title: 'auth.step.five.title' },
])

// Different tips for each page
// We are using Route Meta, we don't know if this is a good way or not
// We need to review this and use a better way
function metaInfo(i: string) {
  return computed<any>(() => route.meta[i])
}

const header = metaInfo('header')
const comment_1 = metaInfo('comment_1')
const comment_2 = metaInfo('comment_2')

const checkRoute = ref(route.path)

watchEffect(() => {
  checkRoute.value = route.path
})
</script>

<template>
  <pr-section class="pr-auth-section pr-auth-section-muted uk-flex uk-flex-middle" ref="el">
    <div class="uk-width-1-1">
      <pr-container small>
        <pr-grid collapse match class="pr-auth-background-muted pr-auth-height">
          <div class="pr-auth-side uk-width-1-3@m">
            <div class="pr-auth-logo-container uk-width-auto">
              <span class="pr-auth-logo-icon">E</span>
              <span>EFA </span>
              <span class="uk-text-muted">SERVICE</span>
            </div>
            <pr-tile
              class="pr-auth-tile pr-auth-tile-default pr-auth-background-default uk-flex uk-flex-top pr-auth-tile-has-list"
            >
              <pr-list class="pr-auth-list uk-width-1-1 uk-margin-remove">
                <li v-for="(item, index) in routers" :key="index" :class="item.isComplete">
                  <transition name="router" mode="out-in">
                    <pr-link :key="checkRoute" :to="{ name: item.link }">
                      <pr-icon v-if="item.isComplete" icon="line-check" ratio="0.75"></pr-icon>
                      <pr-icon
                        v-else-if="item.link === route.name"
                        icon="line-arrow-right"
                      ></pr-icon>
                      <span v-else>{{ index + 1 }}</span>
                      <span>{{ t(item.title) }}</span>
                    </pr-link>
                  </transition>
                </li>
              </pr-list>
              <transition name="fade" mode="out-in">
                <picture :key="checkRoute">
                  <source type="image/webp" :srcset="Map" />
                  <img class="pr-auth-side-icon-map" :src="Map" alt="" loading="eager" />
                </picture>
              </transition>
            </pr-tile>
          </div>
          <div class="pr-auth-container uk-width-expand@m">
            <div>
              <transition name="nested" mode="out-in">
                <div :key="checkRoute">
                  <div class="pr-auth-helper-container uk-width-auto">
                    <span>{{ t('auth.helper_text') }}</span>
                    <pr-button to="/" text>{{ t('auth.get_help') }}</pr-button>
                  </div>
                  <div
                    class="uk-tile pr-auth-tile-muted pr-auth-tile-xlarge"
                    style="padding-bottom: 40px"
                  >
                    <h2 class="pr-auth-heading uk-margin-remove-bottom">
                      {{ $t(header) }}
                    </h2>
                    <p class="uk-margin-small-top">{{ $t(comment_1) }}<br />{{ $t(comment_2) }}</p>
                    <div class="uk-margin-medium-top">
                      <router-view style="min-height: 45vh" />
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </pr-grid>
      </pr-container>
    </div>
  </pr-section>
</template>

<style scoped>
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from {
  transform: translateY(40px);
  opacity: 0;
}

.nested-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.router-enter-active,
.router-leave-active {
  transition: opacity 0.5s ease;
}
</style>
