/// <reference types="vite/client" />

// TODO: must move to another library (docs project)
declare module '*.md' {
  import type { Component } from 'vue'

  const component: Component

  export default component
}
