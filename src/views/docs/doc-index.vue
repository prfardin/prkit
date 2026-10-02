<script setup lang="ts">
import { useDarkModeStore } from '@vd/stores/darkMode.ts'
import Sidebar from '@vd/doc-sidebar.vue'

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
.uk-section:not(.uk-section-secondary) {
  pre code {
    background: #f8f8f8;
  }
}

.pr-doc {
  pre {
    overflow: auto;
    padding: 0;
    border: 0;
    background: none;
    tab-size: 6;
    border-radius: 2px;
  }
  pre code {
    padding: 25px;
  }
  .hljs {
    display: block;
    color: #333;
  }

  .hljs-comment,
  .hljs-meta {
    color: #969896;
  }

  .hljs-emphasis,
  .hljs-quote,
  .hljs-string,
  .hljs-strong,
  .hljs-template-variable,
  .hljs-variable {
    color: #63a35c;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-type {
    color: #1f34aa;
  }

  .hljs-attribute,
  .hljs-bullet,
  .hljs-literal,
  .hljs-symbol {
    color: #0086b3;
  }

  .hljs-name,
  .hljs-section {
    color: #f0506e;
  }

  .hljs-tag {
    color: #333;
  }

  .hljs-attr,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-selector-pseudo,
  .hljs-title {
    color: #795da3;
  }

  .hljs-addition {
    color: #55a532;
    background-color: #eaffea;
  }

  .hljs-deletion {
    color: #bd2c00;
    background-color: #ffecec;
  }

  .hljs-link {
    text-decoration: underline;
  }
}
</style>
