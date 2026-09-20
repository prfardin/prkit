/**
 * Env
 * ========================================================================
 * TODO:
 * need to change the name and move to another directory ( maybe main )
 * We still don't have plan for this setting to keep it here or
 * locate these configs in another files, so until that we keep them here
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
 * ========================================================================
 */

import { type MaybeRef, computed, watch } from 'vue'

/** Types */

export type StringKeyOf<T> = Extract<keyof T, string>

type DevPropsWatchKey<T> = StringKeyOf<T> | 'modelValue'

export type DevPropsWatchOptions<T extends object> =
  | { only: readonly StringKeyOf<T>[]; exclude?: never }
  | { only?: never; exclude?: readonly DevPropsWatchKey<T>[] }


/** Utils */

export const isDev = import.meta.env.DEV
export const isProd = import.meta.env.PROD

export function devComputed<T>(getter: () => T): MaybeRef<T> {
  if (isDev) {
    return computed(getter)
  }

  return getter()
}

export function devPropsWatch<T extends object>(
  props: T,
  callback: () => void,
  options: DevPropsWatchOptions<T> = {},
) {
  const keys =
    'only' in options && options.only
      ? options.only
      : (Object.keys(props) as StringKeyOf<T>[]).filter((key) => !options.exclude?.includes(key))

  const sources = keys.map((key) => () => props[key])

  return watch(sources, callback)
}
