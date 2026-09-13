// TODO: maybe need to change it in the future: move it from here

export const isDev = import.meta.env.DEV

export const isProd = import.meta.env.PROD


import { type MaybeRef, computed } from 'vue'

export function devComputed<T>(getter: () => T): MaybeRef<T> {

  if (isDev) {
    return computed(getter)
  }

  return getter()
}
