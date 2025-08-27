<script setup lang="ts">
import { PaginationPropsType } from '@u/props'
import { PaginationClassObject } from '@u/classes'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PrIcon from '@c/core/PrIcon.vue'

const route = useRoute()
const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<PaginationPropsType>(), {
  baseUrl: '/test',
})

const PaginationClass = computed(() => PaginationClassObject(props))

function setRoute(page: number) {
  const url = '/api' + props.baseUrl + props.table + '?page=' + page + '&per_page=9'
  emit('update:modelValue', url)
}
</script>

<template>
  <div :class="PaginationClass">
    <ul class="pr-pagination-list">
      <li v-for="(page, index) in paginate.totalPages" :key="index">
        <router-link
          :to="{ query: { page } }"
          :class="{ ttt: route.query.page ? page === Number(route.query.page) : page === 1 }"
          >{{ page }}</router-link
        >
      </li>
    </ul>
    <div class="pr-pagination-buttons">
      <router-link
        class="pr-pagination-button"
        aria-current="page"
        tabindex="0"
        :to="{ query: { page: props.paginate.current - 1 } }"
        @click="setRoute(props.paginate.current - 1)"
      >
        <pr-icon icon="line-angle-left" />
      </router-link>
      <router-link
        class="pr-pagination-button"
        aria-current="page"
        tabindex="0"
        :to="{ query: { page: props.paginate.current + 1 } }"
        @click="setRoute(props.paginate.current + 1)"
      >
        <pr-icon icon="line-angle-right" />
      </router-link>
    </div>
  </div>
</template>
