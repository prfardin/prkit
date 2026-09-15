import type { MaybeRef, Ref } from 'vue'
import UIkit from 'uikit'
import type { AccordionIconType, AccordionPropsType, IconPropsType } from '@u/props'

// Types: Define Types for UIkit or HTML elements
// ========================================================================

export type RefElement = MaybeRef

export type InputElement = object | Ref | HTMLInputElement | string

// Configuration
// ========================================================================

export const defaultIconComponentPrefix = 'component'

export const accordionIconType = ['default', 'plus', 'chevron', 'circle']


// Utilities
// ========================================================================

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
  return UIkit.accordion(el, { ...options, active })
}

export function accordionToggle(el: RefElement, index: number, animate?: boolean) {
  return UIkit.accordion(el).toggle(index, animate)
}





// set icon
export function setIcon(el: RefElement, options: IconPropsType) {
  return UIkit.icon(el, { ...options })
}









// set alert
export function alert(el: RefElement, options: any) {
  return UIkit.accordion(el, {
    active: options.active,
    animation: options.animation,
    collapsible: options.collapsible,
    content: options.content,
    duration: options.duration,
    multiple: options.multiple,
    targets: options.targets,
    toggle: options.toggle,
    transition: options.transition,
    offset: options.offset,
  })
}

// set grid
export function grid(el: RefElement, options?: any) {
  return UIkit.grid(el, options)
}

// set util
// need import
// export function util() {
//   return UIkit.util()
// }
