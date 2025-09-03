<script setup lang="ts">
import { modal, tooltip } from '@u/util'
import { onMounted, ref } from 'vue'
import UIkit from 'uikit'

// components
import PrLink from '@c/core/PrLink.vue'
import { useRouter } from 'vue-router'

// images
import Avatar from '@i/avatar.png'
import Logo from '@i/logo-inverse.png'
import PrIcon from '@c/core/PrIcon.vue'
import PrAvatar from '@c/core/PrAvatar.vue'
import PrDrop from '@c/core/PrDrop.vue'
import PrCard from '@c/core/PrCard.vue'
import PrSearchModal from '@c/core/form/PrSearchModal.vue'

const router = useRouter()

interface StripBody {
  icon: string
  title?: any
  id?: string
  href?: string
}

interface Props {
  stripBodyItem: [{ icon: string; title: string }]
}

const emit = defineEmits(['openSidebar'])

const props = withDefaults(defineProps<Props>(), {})

function test() {
  console.log('test')
}

// open and focus search box after open search modal
const isFocus = ref<boolean>(false)

function openSearch() {
  modal('#search').show()
  isFocus.value = true
}

function goSettings() {
  router.push({ name: 'settings' })
}

const stripFooterItem = ref([
  { icon: 'icon-mono-paint-tool', title: 'Customize', click: test },
  { icon: 'icon-mono-search', title: 'Search', click: openSearch },
  { icon: 'icon-mono-setting', title: 'Setting', click: goSettings },
])

onMounted(() => {
  // tooltip
  document
    .querySelectorAll('.pr-sidebar-strip-body > .pr-sidebar-strip-item > a')
    .forEach((e, key) => {
      tooltip(e, {
        title: props.stripBodyItem[key].title,
        pos: 'right',
        animation: 'uk-animation-slide-right-small',
        duration: 150,
        offset: 10,
      })
    })
  document
    .querySelectorAll('.pr-sidebar-strip-footer > .pr-sidebar-strip-item > a')
    .forEach((e, key) => {
      tooltip(e, {
        title: stripFooterItem.value[key].title,
        pos: 'right',
        animation: 'uk-animation-slide-right-small',
        duration: 150,
        offset: 10,
      })
    })

  // Before closing the search modal, reset the isFocus value to ensure that the search input can regain focus when the modal is opened again.
  UIkit.util.on('#search', 'beforehide', (e: any) => {
    isFocus.value = false
  })
})

const isActive = ref<number>(0)

function toggleSidebar(i: number) {
  isActive.value = i
  emit('openSidebar', i)
}

const userShortcuts = ref<any>([
  { href: '/', icon: 'icon-mono-user', name: 'saeed bayat', gmail: 'saeedbayat@test.com' },
  { href: '/', icon: 'icon-mono-briefcase', name: 'saeed bayat', gmail: 'saeedbayat@test.com' },
  { href: '/', icon: 'icon-mono-users-alt', name: 'saeed bayat', gmail: 'saeedbayat@test.com' },
  { href: '/', icon: 'icon-mono-setting', name: 'saeed bayat', gmail: 'saeedbayat@test.com' },
])
</script>

<template>
  <div class="pr-sidebar-strip">
    <div class="pr-sidebar-strip-header">
      <pr-link to="/" class="uk-flex uk-flex-center uk-flex-middle">
        <img :src="Logo" alt="logo" width="35" height="40" />
      </pr-link>
    </div>
    <ul class="pr-sidebar-strip-body" ref="listTooltip">
      <li class="pr-sidebar-strip-item" v-for="(item, index) in stripBodyItem" :key="index">
        <a role="button" @click="toggleSidebar(index)" :class="{ 'uk-active': index === isActive }">
          <div>
            <pr-icon :icon="item.icon" ratio=".9" />
          </div>
        </a>
      </li>
    </ul>
    <ul class="pr-sidebar-strip-footer">
      <li class="pr-sidebar-strip-item" v-for="(item, index) in stripFooterItem" :key="index">
        <a @click="item.click">
          <div>
            <pr-icon :icon="item.icon" ratio=".9" />
          </div>
        </a>
      </li>
      <li class="pr-sidebar-strip-item">
        <div>
          <a>
            <pr-avatar hover circle class="pr-cream-b-c pr-avatar-hover-primary">
              <img :src="Avatar" alt="" class="uk-object-cover" />
            </pr-avatar>
          </a>
          <pr-drop
            class="pr-width-256"
            pos="tight-top"
            mode="click"
            :offset="55"
            :animate-out="true"
          >
            <pr-card class="uk-border-rounded" border default>
              <div class="uk-background-muted" style="padding: 24px">
                <div class="pr-flex-items">
                  <div>
                    <pr-avatar medium circle cls="pr-cream-b-c" style="--avatar-size: 56px">
                      <img :src="Avatar" alt="" class="uk-object-cover" />
                    </pr-avatar>
                  </div>
                  <div>
                    <div class="uk-text-bold uk-text-small">saeed bayat</div>
                    <div class="uk-text-meta">IT Team</div>
                  </div>
                </div>
              </div>
              <div class="uk-card-body" style="padding: 0.5rem">
                <pr-link reset :to="uS.href" v-for="(uS, index) in userShortcuts" :key="index">
                  <div class="pr-flex-items">
                    <div>
                      <pr-icon :icon="uS.icon" ratio=".8" />
                    </div>
                    <div>
                      <div class="uk-text-bold uk-text-small">{{ uS.name }}</div>
                      <div class="uk-text-meta">{{ uS.gmail }}</div>
                    </div>
                  </div>
                </pr-link>
              </div>
            </pr-card>
          </pr-drop>
        </div>
      </li>
    </ul>
  </div>
  <pr-search-modal id="search" :autofocus="isFocus" />
</template>

<style></style>
