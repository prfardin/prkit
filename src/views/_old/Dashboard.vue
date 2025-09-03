<script setup lang="ts">
import { navbar, toggle } from '@u/util'
import { onMounted, reactive, ref } from 'vue'
import Avatar from '@i/avatar.png'

// component
import PrAvatar from '@c/core/PrAvatar.vue'
import PrSection from '@c/core/PrSection.vue'
import PrContainer from '@c/core/PrContainer.vue'
import PrIcon from '@c/core/PrIcon.vue'
import PrOffCanvas from '@c/core/PrOffcanvas.vue'
import PrToggle from '@c/core/PrToggle.vue'
import PrDrop from '@c/core/PrDrop.vue'
import PrCard from '@c/core/PrCard.vue'
import PrButton from '@c/core/PrButton.vue'
import PrLink from '@c/core/PrLink.vue'
import PrSwitcher from '@c/core/PrSwitcher.vue'
import PrProgress from '@c/core/PrProgress.vue'
import PrSticky from '@c/core/prSticky.vue'
import Wrapper from '@c/sidebar/wrapper.vue'
import Strip from '@c/sidebar/strip.vue'

// composable
import { useToggle } from '@sc/Composable/useToggle'
import UIkit from 'uikit'

const { value: darkMode, toggle: changeMode } = useToggle()

const elNavbar = ref<any>(null)

onMounted(() => {
  navbar(elNavbar.value)
})

const notifications = ref<any>([
  { href: '/', img: Avatar, name: 'saeed bayat', notif: 'let a comment', time: '1 hour ago' },
  { href: '/', img: Avatar, name: 'saeed bayat', notif: 'let a comment', time: '1 hour ago' },
  { href: '/', img: Avatar, name: 'saeed bayat', notif: 'let a comment', time: '1 hour ago' },
])

const accounts = ref<any>([
  { href: '/', img: Avatar, name: 'saeed bayat', gmail: 'saeedbayat@test.com' },
  { href: '/', img: Avatar, name: 'saeed bayat', gmail: 'saeedbayat@test.com' },
  { href: '/', img: Avatar, name: 'saeed bayat', gmail: 'saeedbayat@test.com' },
])

const Activity = ref<any>([{ name: 'Team' }, { name: 'Projects' }, { name: 'Schedule' }])

const sideBarOpened = reactive({
  maxWidth: 'calc(100% - 300px)',
  marginInlineStart: '300px',
})

const stripBodyItem = ref<any>([
  { icon: 'create-dashboard', title: 'title1' },
  { icon: 'folder-minus', title: 'title2' },
  { icon: 'compass', title: 'title3' },
  { icon: 'bell', title: 'title4' },
])

// sidebar

const { value, toggle: changeWrapperStatus } = useToggle()
const { value: stickyValue, toggle: changeStickyStatus } = useToggle()

const isActive = ref<number>(0)

function toggleWrapper(i: number) {
  value.value = true
  isActive.value = i
  if (value.value) {
    UIkit.offcanvas('#wrapper').show()
  }
}

onMounted(() => {
  UIkit.util.on('#pr-sticky-nav', 'inactive', function () {
    stickyValue.value = false
  })
})
</script>

<template>
  <div class="uk-background-muted">
    <div class="pr-sidebar">
      <strip :strip-body-item="stripBodyItem" @open-sidebar="(i) => toggleWrapper(i)" />
      <wrapper id="wrapper" :is-active="isActive" />
    </div>
    <main class="view-wrapper" :style="[value ? sideBarOpened : '']">
      <pr-section class="uk-padding-remove-top" muted default>
        <pr-sticky id="pr-sticky-nav" start="60" animation="uk-animation-slide-top-medium">
          <div class="pr-sticky-nav" :class="{ 'is-open': stickyValue }">
            <div class="pr-sticky-nav-parent" @click="changeStickyStatus()">
              <div
                class="pr-sticky-nav-button"
                :class="{ 'pr-sticky-nav-button-close': stickyValue }"
              >
                <span class="pr-sticky-nav-button-line-1"></span>
                <span class="pr-sticky-nav-button-line-2"></span>
                <span class="pr-sticky-nav-button-line-3"></span>
              </div>
            </div>
            <div>
              <div class="pr-sticky-nav-item" :class="{ one: stickyValue }">
                <a @click="changeMode()">
                  <pr-avatar small circle>
                    <pr-icon :icon="darkMode ? 'icon-mono-sun' : 'icon-mono-moon'" ratio="1.1" />
                  </pr-avatar>
                </a>
              </div>
              <div class="pr-sticky-nav-item" :class="{ two: stickyValue }">
                <pr-toggle target="#notification">
                  <pr-avatar small circle class="pr-primary-darktest-b-c">
                    <pr-icon icon="icon-mono-bell" />
                  </pr-avatar>
                </pr-toggle>
              </div>
              <div class="pr-sticky-nav-item" :class="{ three: stickyValue }">
                <pr-toggle target="#my-id">
                  <pr-avatar small circle class="pr-primary-darktest-b-c">
                    <pr-icon icon="icon-mono-create-dashboard" ratio=".8" />
                  </pr-avatar>
                </pr-toggle>
              </div>
              <div class="pr-sticky-nav-item" :class="{ four: stickyValue }">
                <pr-toggle target="#profile">
                  <pr-avatar small circle class="pr-cream-b-c pr-avatar-hover-primary">
                    <img :src="Avatar" alt="" class="uk-object-cover" />
                  </pr-avatar>
                </pr-toggle>
              </div>
            </div>
          </div>
        </pr-sticky>
        <div class="uk-margin-bottom">
          <div class="uk-navbar-container uk-navbar-transparent">
            <pr-container large>
              <nav ref="elNavbar">
                <div class="uk-navbar-left">
                  <ul class="uk-navbar-nav uk-flex-middle">
                    <li>
                      <div>
                        <pr-toggle target="#wrapper" @click="changeWrapperStatus">
                          <pr-avatar tag="div" class="tm-muted-b-c">
                            <div
                              class="pr-sidebar-button"
                              :class="{ 'pr-sidebar-button-close': value }"
                            >
                              <span class="pr-sidebar-button-line-1"></span>
                              <span class="pr-sidebar-button-line-2"></span>
                              <span class="pr-sidebar-button-line-3"></span>
                            </div>
                          </pr-avatar>
                        </pr-toggle>
                      </div>
                    </li>
                    <li>
                      <h1 class="uk-margin-remove uk-h2">shop name</h1>
                    </li>
                  </ul>
                </div>
                <div class="uk-navbar-right">
                  <ul class="uk-navbar-nav">
                    <li>
                      <a @click="changeMode()">
                        <pr-avatar small circle border>
                          <pr-icon
                            :icon="darkMode ? 'icon-mono-sun' : 'icon-mono-moon'"
                            ratio="1.1"
                          />
                        </pr-avatar>
                      </a>
                    </li>
                    <li>
                      <pr-toggle target="#notification">
                        <pr-avatar small circle border hover>
                          <pr-icon icon="icon-mono-bell" />
                        </pr-avatar>
                      </pr-toggle>
                    </li>
                    <li>
                      <pr-toggle target="#my-id">
                        <pr-avatar small circle border hover>
                          <pr-icon icon="icon-mono-create-dashboard" ratio=".8" />
                        </pr-avatar>
                      </pr-toggle>
                    </li>
                    <li>
                      <pr-toggle target="#profile">
                        <pr-avatar small circle class="pr-cream-b-c pr-avatar-hover-primary" hover>
                          <img :src="Avatar" alt="" class="uk-object-cover" />
                        </pr-avatar>
                      </pr-toggle>
                    </li>
                  </ul>
                </div>
              </nav>
            </pr-container>
          </div>
          <pr-drop
            close-on-scroll
            toggle=""
            id="notification"
            pos="bottom-right"
            mode="click"
            animate-out
          >
            <pr-card class="uk-border-rounded" border default>
              <div class="uk-card-header uk-flex uk-flex-middle uk-flex-between pr-padding-16">
                <h4 class="uk-h4 uk-margin-remove">Notification</h4>
                <pr-link to="">View All</pr-link>
              </div>
              <div class="uk-card-body uk-card-small uk-card-small pr-padding-16">
                <pr-link reset :to="n.href" v-for="(n, index) in notifications" :key="index">
                  <div class="pr-flex-items">
                    <div>
                      <pr-avatar small circle cls="pr-cream-b-c">
                        <img :src="n.img" alt="" class="uk-object-cover" />
                      </pr-avatar>
                    </div>
                    <div>
                      <span class="uk-text-bold uk-text-small">{{ n.name }}</span>
                      <span class="uk-text-meta" style="margin-left: 8px">{{ n.notif }}</span>
                      <div class="uk-text-meta">{{ n.time }}</div>
                    </div>
                  </div>
                </pr-link>
              </div>
            </pr-card>
          </pr-drop>
          <pr-drop
            close-on-scroll
            toggle=""
            id="profile"
            class="pr-width-256"
            pos="bottom-right"
            mode="click"
            animate-out
          >
            <pr-card class="uk-border-rounded" border default>
              <div class="uk-card-header uk-flex uk-flex-middle uk-flex-column">
                <div class="uk-margin-bottom">
                  <pr-avatar x-large circle cls="pr-cream-b-c">
                    <img :src="Avatar" />
                  </pr-avatar>
                </div>
                <div class="uk-text-center">
                  <div class="uk-text-bold uk-text-small">saeed bayat</div>
                  <div class="uk-text-small">saeedbayat@test.com</div>
                </div>
                <div class="uk-margin-small-top">
                  <pr-button class="uk-width-1-1" default>Manage Account</pr-button>
                </div>
              </div>
              <div class="uk-card-body" style="padding: 6px 24px">
                <pr-link reset :to="a.href" v-for="(a, index) in accounts" :key="index">
                  <div class="pr-flex-items">
                    <div>
                      <pr-avatar small circle cls="pr-cream-b-c">
                        <img :src="a.img" alt="" class="uk-object-cover" />
                      </pr-avatar>
                    </div>
                    <div>
                      <div class="uk-text-bold uk-text-small">{{ a.name }}</div>
                      <div class="uk-text-meta">{{ a.gmail }}</div>
                    </div>
                  </div>
                </pr-link>
              </div>
              <div class="uk-card-footer">
                <pr-button class="uk-width-1-1" default>Logout</pr-button>
              </div>
            </pr-card>
          </pr-drop>
          <pr-off-canvas flip overlay id="my-id">
            <template #title>
              <h3 class="uk-h3 uk-margin-remove">test</h3>
            </template>
            <template #content>
              <div>
                <pr-switcher class="uk-margin-medium-top" :list="Activity" />
                <div class="uk-switcher uk-margin-medium-top">
                  <div>
                    <pr-card
                      class="uk-border-rounded uk-margin-small-bottom"
                      border
                      body
                      small
                      default
                    >
                      <div class="uk-flex uk-flex-middle uk-flex-between">
                        <div class="pr-flex-items">
                          <pr-avatar small circle class="pr-cream-b-c">
                            <img :src="Avatar" />
                          </pr-avatar>
                          <div>
                            <div class="uk-text-small uk-text-bold">You</div>
                            <div class="uk-text-meta">Product Manager</div>
                          </div>
                        </div>
                        <pr-link to="/">
                          <pr-avatar small circle border border-hover>
                            <pr-icon icon="icon-line-arrow-right" ratio=".9" />
                          </pr-avatar>
                        </pr-link>
                      </div>
                    </pr-card>
                    <pr-card
                      class="uk-border-rounded uk-margin-small-bottom"
                      border
                      body
                      small
                      default
                    >
                      <div class="uk-flex uk-flex-middle uk-flex-between">
                        <div class="pr-flex-items">
                          <pr-avatar small circle class="pr-cream-b-c">
                            <img :src="Avatar" />
                          </pr-avatar>
                          <div>
                            <div class="uk-text-small uk-text-bold">You</div>
                            <div class="uk-text-meta">Product Manager</div>
                          </div>
                        </div>
                        <pr-link to="/">
                          <pr-avatar small circle border border-hover>
                            <pr-icon icon="icon-line-arrow-right" ratio=".9" />
                          </pr-avatar>
                        </pr-link>
                      </div>
                    </pr-card>
                    <pr-card
                      class="uk-border-rounded uk-margin-small-bottom"
                      border
                      body
                      small
                      default
                    >
                      <div class="uk-flex uk-flex-middle uk-flex-between">
                        <div class="pr-flex-items">
                          <pr-avatar small circle class="pr-cream-b-c">
                            <img :src="Avatar" />
                          </pr-avatar>
                          <div>
                            <div class="uk-text-small uk-text-bold">You</div>
                            <div class="uk-text-meta">Product Manager</div>
                          </div>
                        </div>
                        <pr-link to="/">
                          <pr-avatar small circle border border-hover>
                            <pr-icon icon="icon-line-arrow-right" ratio=".9" />
                          </pr-avatar>
                        </pr-link>
                      </div>
                    </pr-card>
                    <pr-card
                      class="uk-border-rounded uk-margin-small-bottom"
                      border
                      body
                      small
                      default
                    >
                      <div class="uk-flex uk-flex-middle uk-flex-between">
                        <div class="pr-flex-items">
                          <pr-avatar small circle class="pr-cream-b-c">
                            <img :src="Avatar" />
                          </pr-avatar>
                          <div>
                            <div class="uk-text-small uk-text-bold">You</div>
                            <div class="uk-text-meta">Product Manager</div>
                          </div>
                        </div>
                        <pr-link to="/">
                          <pr-avatar small circle border border-hover>
                            <pr-icon icon="icon-line-arrow-right" ratio=".9" />
                          </pr-avatar>
                        </pr-link>
                      </div>
                    </pr-card>
                  </div>
                  <div>
                    <pr-card
                      class="uk-border-rounded uk-margin-small-bottom"
                      border
                      body
                      small
                      default
                    >
                      <div class="uk-flex uk-flex-middle uk-flex-between uk-margin-bottom">
                        <div class="pr-flex-items">
                          <pr-avatar small rounded style="background-color: rgb(124 58 237)">
                            <pr-icon icon="icon-line-dollar-sign" style="color: white" />
                          </pr-avatar>
                          <div>
                            <div class="uk-text-small uk-text-bold">You</div>
                            <div class="uk-text-meta">Product Manager</div>
                          </div>
                        </div>
                        <pr-link to="/">
                          <pr-avatar small circle border border-hover>
                            <pr-icon icon="icon-line-arrow-right" ratio=".9" />
                          </pr-avatar>
                        </pr-link>
                      </div>
                      <div class="uk-margin-bottom">
                        <pr-progress value="18" />
                      </div>
                      <div class="uk-flex uk-flex-between uk-flex-middle">
                        <span class="uk-text-muted">5/24</span>
                        <div class="uk-flex">
                          <pr-avatar
                            class="uk-flex-inline"
                            x-small
                            circle
                            border
                            style="
                              background-color: #9a2de0;
                              border-width: 2px;
                              border-color: white;
                              margin-inline-start: -0.5rem;
                            "
                          >
                            <img :src="Avatar" />
                          </pr-avatar>
                          <pr-avatar
                            class="uk-flex-inline"
                            x-small
                            circle
                            border
                            style="
                              background-color: #edbd43;
                              border-width: 2px;
                              border-color: white;
                              margin-inline-start: -0.5rem;
                            "
                          >
                            <img :src="Avatar" />
                          </pr-avatar>
                          <pr-avatar
                            class="uk-flex-inline"
                            x-small
                            circle
                            border
                            style="
                              background-color: #30c689;
                              border-width: 2px;
                              border-color: white;
                              margin-inline-start: -0.5rem;
                            "
                          >
                            <img :src="Avatar" />
                          </pr-avatar>
                          <pr-avatar
                            class="uk-flex-inline"
                            x-small
                            circle
                            border
                            style="
                              background-color: #e2e8f0;
                              border-width: 2px;
                              border-color: white;
                              margin-inline-start: -0.5rem;
                            "
                          >
                            <span class="uk-text-small">+3</span>
                          </pr-avatar>
                        </div>
                      </div>
                    </pr-card>
                    <pr-card
                      class="uk-border-rounded uk-margin-small-bottom"
                      border
                      body
                      small
                      default
                    >
                      <div class="uk-flex uk-flex-middle uk-flex-between uk-margin-bottom">
                        <div class="pr-flex-items">
                          <pr-avatar small rounded style="background-color: rgb(124 58 237)">
                            <pr-icon icon="icon-line-dollar-sign" style="color: white" />
                          </pr-avatar>
                          <div>
                            <div class="uk-text-small uk-text-bold">You</div>
                            <div class="uk-text-meta">Product Manager</div>
                          </div>
                        </div>
                        <pr-link to="/">
                          <pr-avatar small circle border border-hover>
                            <pr-icon icon="icon-line-arrow-right" ratio=".9" />
                          </pr-avatar>
                        </pr-link>
                      </div>
                      <div class="uk-margin-bottom">
                        <pr-progress value="59" />
                      </div>
                      <div class="uk-flex uk-flex-between uk-flex-middle">
                        <span class="uk-text-muted">5/24</span>
                        <div class="uk-flex">
                          <pr-avatar
                            class="uk-flex-inline"
                            x-small
                            circle
                            border
                            style="
                              background-color: #9a2de0;
                              border-width: 2px;
                              border-color: white;
                              margin-inline-start: -0.5rem;
                            "
                          >
                            <img :src="Avatar" />
                          </pr-avatar>
                          <pr-avatar
                            class="uk-flex-inline"
                            x-small
                            circle
                            border
                            style="
                              background-color: #edbd43;
                              border-width: 2px;
                              border-color: white;
                              margin-inline-start: -0.5rem;
                            "
                          >
                            <img :src="Avatar" />
                          </pr-avatar>
                          <pr-avatar
                            class="uk-flex-inline"
                            x-small
                            circle
                            border
                            style="
                              background-color: #30c689;
                              border-width: 2px;
                              border-color: white;
                              margin-inline-start: -0.5rem;
                            "
                          >
                            <img :src="Avatar" />
                          </pr-avatar>
                          <pr-avatar
                            class="uk-flex-inline"
                            x-small
                            circle
                            border
                            style="
                              background-color: #e2e8f0;
                              border-width: 2px;
                              border-color: white;
                              margin-inline-start: -0.5rem;
                            "
                          >
                            <span class="uk-text-small">+3</span>
                          </pr-avatar>
                        </div>
                      </div>
                    </pr-card>
                    <pr-card
                      class="uk-border-rounded uk-margin-small-bottom"
                      border
                      body
                      small
                      default
                    >
                      <div class="uk-flex uk-flex-middle uk-flex-between uk-margin-bottom">
                        <div class="pr-flex-items">
                          <pr-avatar small rounded style="background-color: rgb(124 58 237)">
                            <pr-icon icon="icon-line-dollar-sign" style="color: white" />
                          </pr-avatar>
                          <div>
                            <div class="uk-text-small uk-text-bold">You</div>
                            <div class="uk-text-meta">Product Manager</div>
                          </div>
                        </div>
                        <pr-link to="/">
                          <pr-avatar small circle border border-hover>
                            <pr-icon icon="icon-line-arrow-right" ratio=".9" />
                          </pr-avatar>
                        </pr-link>
                      </div>
                      <div class="uk-margin-bottom">
                        <pr-progress value="87" />
                      </div>
                      <div class="uk-flex uk-flex-between uk-flex-middle">
                        <span class="uk-text-muted">5/24</span>
                        <div class="uk-flex">
                          <pr-avatar
                            class="uk-flex-inline"
                            x-small
                            circle
                            border
                            style="
                              background-color: #9a2de0;
                              border-width: 2px;
                              border-color: white;
                              margin-inline-start: -0.5rem;
                            "
                          >
                            <img :src="Avatar" />
                          </pr-avatar>
                          <pr-avatar
                            class="uk-flex-inline"
                            x-small
                            circle
                            border
                            style="
                              background-color: #edbd43;
                              border-width: 2px;
                              border-color: white;
                              margin-inline-start: -0.5rem;
                            "
                          >
                            <img :src="Avatar" />
                          </pr-avatar>
                          <pr-avatar
                            class="uk-flex-inline"
                            x-small
                            circle
                            border
                            style="
                              background-color: #30c689;
                              border-width: 2px;
                              border-color: white;
                              margin-inline-start: -0.5rem;
                            "
                          >
                            <img :src="Avatar" />
                          </pr-avatar>
                          <pr-avatar
                            class="uk-flex-inline"
                            x-small
                            circle
                            border
                            style="
                              background-color: #e2e8f0;
                              border-width: 2px;
                              border-color: white;
                              margin-inline-start: -0.5rem;
                            "
                          >
                            <span class="uk-text-small">+3</span>
                          </pr-avatar>
                        </div>
                      </div>
                    </pr-card>
                  </div>
                  <div>
                    <div class="pr-schedule">
                      <div class="pr-avatar-border">
                        <pr-avatar class="uk-box-shadow-small" tag="div" small circle border>
                          <pr-icon icon="icon-line-phone" ratio=".7" />
                        </pr-avatar>
                      </div>
                      <div class="uk-margin-medium-left">
                        <div class="uk-text-bold uk-text-small" style="">Call Danny at Colby's</div>
                        <div class="uk-text-meta">Today - 11:30am</div>
                      </div>
                    </div>
                    <div class="pr-schedule">
                      <div class="pr-avatar-border">
                        <pr-avatar class="uk-box-shadow-small" tag="div" small circle border>
                          <pr-icon icon="icon-line-phone" ratio=".7" />
                        </pr-avatar>
                      </div>
                      <div class="uk-margin-medium-left">
                        <div class="uk-text-bold uk-text-small">Call Danny at Colby's</div>
                        <div class="uk-text-meta">Today - 11:30am</div>
                      </div>
                    </div>
                    <div class="pr-schedule">
                      <div class="pr-avatar-border">
                        <pr-avatar class="uk-box-shadow-small" tag="div" small circle border>
                          <pr-icon icon="icon-line-phone" ratio=".7" />
                        </pr-avatar>
                      </div>
                      <div class="uk-margin-medium-left">
                        <div class="uk-text-bold uk-text-small">Call Danny at Colby's</div>
                        <div class="uk-text-meta">Today - 11:30am</div>
                      </div>
                    </div>
                    <div class="pr-schedule">
                      <div class="pr-avatar-border">
                        <pr-avatar class="uk-box-shadow-small" tag="div" small circle border>
                          <pr-icon icon="icon-line-phone" ratio=".7" />
                        </pr-avatar>
                      </div>
                      <div class="uk-margin-medium-left">
                        <div class="uk-text-bold uk-text-small">Call Danny at Colby's</div>
                        <div class="uk-text-meta">Today - 11:30am</div>
                      </div>
                    </div>
                    <div class="pr-schedule">
                      <div class="pr-avatar-border">
                        <pr-avatar class="uk-box-shadow-small" tag="div" small circle border>
                          <pr-icon icon="icon-line-phone" ratio=".7" />
                        </pr-avatar>
                      </div>
                      <div class="uk-margin-medium-left">
                        <div class="uk-text-bold uk-text-small">Call Danny at Colby's</div>
                        <div class="uk-text-meta">Today - 11:30am</div>
                      </div>
                    </div>
                    <div class="pr-schedule">
                      <div class="pr-avatar-border">
                        <pr-avatar class="uk-box-shadow-small" tag="div" small circle border>
                          <pr-icon icon="icon-line-phone" ratio=".7" />
                        </pr-avatar>
                      </div>
                      <div class="uk-margin-medium-left">
                        <div class="uk-text-bold uk-text-small">Call Danny at Colby's</div>
                        <div class="uk-text-meta">Today - 11:30am</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </pr-off-canvas>
        </div>
        <pr-container large>
          <router-view></router-view>
        </pr-container>
      </pr-section>
    </main>
  </div>
</template>

<style>
.uk-text-small {
  line-height: 1.25rem;
}

.uk-text-meta {
  line-height: 1rem;
}

.pr-schedule {
  display: flex;
  position: relative;
  padding-bottom: 32px;
}

.pr-schedule::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  border: 0 solid #e5e7eb;
  border-left-width: 1px;
  inset-inline-start: 1rem;
  top: 2.5rem;
  height: 100%;
  width: 1px;
}

.pr-avatar-border {
  position: relative;
}

.pr-avatar-border::after {
  box-sizing: border-box;
  content: '';
  border: 0 solid #e5e7eb;
  border-top-width: 1px;
  width: 1.25rem;
  height: 1px;
  top: 1rem;
  inset-inline-end: -2rem;
  position: absolute;
}

a:hover {
  text-decoration: none;
}

.pr-padding-8 {
  padding: 8px;
}

.pr-padding-16 {
  padding: 16px;
}

.uk-card {
  .uk-card-header {
    border-bottom: 1px solid #e5e5e5;
  }
  .uk-card-footer {
    border-top: 1px solid #e5e5e5;
  }
}

.pr-flex-items {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border-radius: 5px;
  transition: background-color 0.3s;
}

a {
  .pr-flex-items {
    padding: 8px;
  }
  .pr-flex-items:hover {
    background-color: #f0f4f7;
  }
}

.pr-navbar-item {
  border-radius: 999px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e7eb;
  transition: 0.3s ease-in-out;
  overflow: hidden;
}

.uk-navbar-nav > li > a {
  padding: 0;
}

.uk-navbar-nav {
  gap: 0.5rem;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.is-pushed {
  margin-left: 340px;
  width: calc(100% - 340px);
}

.post {
  height: 80px;
}

.post .avatar {
  float: right;
  width: 52px;
  height: 52px;
  background-color: #ccc;
  border-radius: 25%;
  margin: 8px;
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  animation: shine-avatar 1.6s infinite linear;
}

.post {
  .line {
    float: right;
    width: 140px;
    height: 16px;
    margin-top: 12px;
    border-radius: 7px;
    background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
    background-size: 600px;
    animation: shine-lines 1.6s infinite linear;
  }
}

.post .avatar + .line {
  margin-top: 11px;
  width: 100px;
}
.post .line ~ .line {
  background-color: #ddd;
}

@keyframes shine-lines {
  0% {
    background-position: -100px;
  }
  40%,
  100% {
    background-position: 140px;
  }
}
@keyframes shine-avatar {
  0% {
    background-position: -32px;
  }
  40%,
  100% {
    background-position: 208px;
  }
}
</style>
