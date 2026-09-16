import { type MaybeRef, type Reactive, type Ref, watch } from 'vue'
import UIkit from 'uikit'
import type { AccordionIconType, AccordionPropsType, IconPropsType } from '@u/props'

// Types: Define Types for UIkit or HTML elements
// ========================================================================

export type RefElement = HTMLElement | null
export type RefElementCallback = (el: RefElement) => void

// Configuration
// ========================================================================

export const defaultIconComponentPrefix = 'component'

export const accordionIconType = ['default', 'plus', 'chevron', 'circle']

// Utilities
// ========================================================================

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

export function omitUndefined<T extends object>(object: T) {
  const result = {} as Partial<T>

  for (const key in object) {
    const value = object[key]

    if (value !== undefined) {
      result[key] = value
    }
  }

  return result
}

export function getIconName(iconName: string, prefix: string) {
  return `${defaultIconComponentPrefix}-default-${prefix}-${iconName}`
}

export function getAccordionIconName(iconName: AccordionIconType) {
  if (iconName === 'none') {
    return false
  }

  if (accordionIconType.includes(iconName)) {
    return getIconName(iconName, 'accordion')
  }

  return iconName
}

// UIkit Helpers
// ========================================================================

export function setAccordion(el: RefElement, options: AccordionPropsType, active?: number) {
  return UIkit.accordion(el!, { ...omitUndefined(options), active })
}

export function accordionToggle(el: RefElement, index: number, animate?: boolean) {
  return UIkit.accordion(el!).toggle(index, animate)
}

export function setIcon(el: RefElement, options: IconPropsType) {
  return UIkit.icon(el!, { ...options })
}
