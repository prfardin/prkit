/**
 * Env:
 * We still don't have plan for this setting to locate them in another file
 * so we keep them here
 *
 * TODO: need to change the name and move to another directory ( maybe main )
 *
 * Sometimes we need if and some ref just run in computed mod and we dont want
 * them to be reactive or run in production build see we use isDev const and
 * devComputed to reduce bundle size refere to https://vuejs.org/guide/best-practices/performance.html#bundle-size-and-tree-shaking
 *
 * For a value be reactive just in dev mode and be simple const in production build we use: devComputed
 * ex: const devReactive = devComputed(() => .....)
 *
 * For a section to not be compiled in production build we use isDev with an if
 * ex: if (isDev) { ... }
 *
 * Component that's contains UIKit initialization methods for build need to
 * watch props changes (just in dev mod). wich props? nearly close to all props
 * instead of some. so we use devPropsWatch to pass props for watch and filter unneeded props
 * in it.
 * ex: devPropsWatch(props, () => { ... }, ['unneededWatchProps1', 'unneededWatchProps2'])
 *
 */

import { type MaybeRef, type Reactive, computed, watch } from 'vue'

export const isDev = import.meta.env.DEV
export const isProd = import.meta.env.PROD

export function devComputed<T>(getter: () => T): MaybeRef<T> {
  if (isDev) {
    return computed(getter)
  }

  return getter()
}

export function devPropsWatch(
  props: Reactive<Record<string, unknown>>,
  callback: () => void,
  exclude: readonly string[] = [],
) {
  const sources = Object.keys(props)
    .filter((key) => !exclude.includes(key))
    .map((key) => () => props[key])

  return watch(sources, callback)
}
