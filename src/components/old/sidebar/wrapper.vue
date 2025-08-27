<script setup lang="ts">
import { computed, ref } from 'vue'
import PrOffcanvas from '@c/core/PrOffcanvas.vue'
import PrNav from '@c/core/PrNav.vue'
import PrIcon from '@c/core/PrIcon.vue'
import PrLink from '@c/core/PrLink.vue'

interface Props {
  id: string
  isActive: number
}

const props = withDefaults(defineProps<Props>(), {})

// data
// We preferred to use the nav items inside the component because it is easier to manage it here
// But I don't know if the best way to use them is inside the component or not
const navItem1 = ref<any>({
  title: 'index1',
  body: [
    {
      parentTitle: 'Dashboard2',
      subItems: [
        { title: 'products', href: '/' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'Shop',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'Production',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'test',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'test1',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'test3',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
  ],
  divider: 2,
})

const navItem2 = ref<any>({
  title: 'index2',
  body: [
    {
      parentTitle: 'Dashboard2',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'Shop',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'test3',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
  ],
})

const navItem3 = ref<any>({
  title: 'index3',
  body: [
    {
      parentTitle: 'Dashboard2',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'Shop',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'Production',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'test',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'test1',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'test3',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
  ],
  divider: 3,
})

const navItem4 = ref<any>({
  title: 'index4',
  body: [
    {
      parentTitle: 'Dashboard2',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'Shop',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'Production',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'test',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'test1',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
    {
      parentTitle: 'test3',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
      ],
    },
  ],
  divider: 5,
})

const navItems = ref([navItem1, navItem2, navItem3, navItem4])

const data = computed(() => {
  const item = navItems.value[props.isActive]
  return item ? item.value : null
})

const findLastIndex = computed(() => {
  return data.value?.body.length - 1
})
</script>

<template>
  <pr-offcanvas
    class="pr-sidebar-wrapper"
    :close-button="false"
    :id="id"
    :bg-close="false"
    :esc-close="false"
  >
    <template #title>
      <h3 class="uk-margin-small-bottom uk-h3">{{ data?.title }}</h3>
    </template>
    <template #content>
      <pr-nav multiple>
        <template v-for="(item, index) in data?.body" :key="index">
          <li class="uk-parent">
            <a>
              <span>{{ item.parentTitle }}</span>
              <pr-icon class="pr-nav-parent" icon="line-angle-down" ratio=".9" />
            </a>
            <ul class="uk-nav-sub">
              <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
                <pr-link :to="subItem.href">
                  <div class="uk-flex uk-flex-middle uk-padding-small-right">
                    <pr-icon icon="line-bell" ratio=".84" />
                    <span class="pr-margin-left-2">{{ subItem.title }}</span>
                  </div>
                </pr-link>
              </li>
            </ul>
          </li>
          <li
            v-if="(index + 1) % data.divider === 0 && index !== findLastIndex"
            class="uk-nav-divider"
            role="presentation"
          ></li>
        </template>
      </pr-nav>
    </template>
  </pr-offcanvas>
</template>

<style>
.uk-parent {
  .pr-nav-parent {
    margin-left: auto;
    transition: all 0.2s ease-out;
  }
  &.uk-open a .pr-nav-parent {
    transform: rotate(180deg);
  }
}
</style>
