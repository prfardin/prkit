<script setup lang="ts">
import PrSearch from '@c/core/form/PrSearch.vue'
import PrModal from '@c/core/PrModal.vue'
import { ref } from 'vue'
import PrLink from '@c/core/PrLink.vue'
import PrList from '@c/core/PrList.vue'
import { modal } from '@u/util'
import router from '@/router'

const searchValue = ref('')

interface SearchModalType {
  id: string
  autofocus: boolean
}

const props = withDefaults(defineProps<SearchModalType>(), {})

const test = ref([{}, {}, {}, {}, {}, {}])

function goToResult() {
  router.push('#')
  modal(`#${props.id}`).hide()
}
</script>

<template>
  <pr-modal :id="id" class="uk-flex-top" cls="uk-width-large pr-border-rounded-xl uk-padding-small">
    <div style="padding: 0 0.5rem 0.5rem 0.5rem">
      <pr-search
        id="search-modal"
        name="search-modal"
        label="Search"
        label-cls="uk-text-muted uk-text-bold"
        :autofocus="autofocus"
        v-model="searchValue"
      />
    </div>
    <div>
      <div style="padding-top: 0.5rem; padding-left: 0.75rem; padding-right: 0.75rem">
        <span class="uk-text-meta">result</span>
      </div>
      <pr-list class="uk-margin-remove">
        <li v-for="i in 5" :key="i">
          <a reset class="pr-link-hover-list" @click="goToResult">
            <span>aaa</span>
          </a>
        </li>
      </pr-list>
    </div>
  </pr-modal>
</template>

<style scoped></style>
