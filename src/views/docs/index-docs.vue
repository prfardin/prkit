<script setup lang="ts">
import { useDarkModeStore } from '@vd/stores/darkMode.ts'
import Sidebar from '@vd/sidebar.vue'

const darkMode = useDarkModeStore()
</script>

<template>
  <sidebar />

  <div
    class="uk-section"
    :class="darkMode.light === 'uk-dark' ? 'uk-section-secondary' : 'uk-section-default'"
  >

    <router-view />

    <!-- End -->
    <div class="uk-height-viewport"></div>
  </div>
</template>
