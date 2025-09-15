import UIkit from 'uikit'
import { Ref } from 'vue'
import {
  AccordionPropsType,
  IconPropsType
} from '@u/props'

// Types: Define Types for UIkit or HTML elements
// ========================================================================

export type Element = object | Ref | HTMLElement | string

export type RefElement = Element | null

// define type for HTML input elements
export type InputElement = object | Ref | HTMLInputElement | string

// Utils: Define Usable Functions
// ========================================================================

// check if app is in develop mode
// maybe need to change it in the future: move it from here
export function isDev() {
  return process.env.NODE_ENV === 'development'
}

//
// UIKit Functions
//

// set accordion
export function accordion(el: Element, options: AccordionPropsType) {
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

// set alert
export function alert(el: Element, options: AlertPropsType) {
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
export function grid(el: Element, options?: UIkitGridOptions) {
  return UIkit.grid(el, options)
}

// set icon
export function icon(el: Element, options: IconPropsType) {
  return UIkit.icon(el, { icon: options.icon, ratio: options.ratio as number })
}

// set util
// need import
// export function util() {
//   return UIkit.util()
// }
