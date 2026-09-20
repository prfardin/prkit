<script setup lang="ts">
import { useDarkModeStore } from '@vd/stores/darkMode.ts'
import Sidebar from '@vd/sidebar.vue'

const darkMode = useDarkModeStore()
</script>

<template>
  <sidebar />

  <div class="uk-section" :class="darkMode.sectionMode()">
    <router-view />
    <div class="uk-height-viewport"></div>
  </div>
</template>
