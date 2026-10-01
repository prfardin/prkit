<script setup lang="ts">
import { useDarkModeStore } from '@vd/stores/darkMode.ts'
import Sidebar from '@vd/sidebar.vue'
import 'highlight.js/styles/github-dark.css'

const darkMode = useDarkModeStore()
</script>

<template>
  <sidebar />

  <div class="uk-section" :class="darkMode.sectionMode()">
    <router-view />
    <div class="uk-height-viewport"></div>
  </div>
</template>

<style>
.pr-doc {
  pre {
    overflow: auto;
    padding: 0;
    border: 0;
    background: none;
    tab-size: 6;
    border-radius: 2px;
  }
  .pre code {
    padding: 25px;
  }
}
</style>
