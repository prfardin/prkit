import UIkit from 'uikit'
import { Ref } from 'vue'
import {
  UIkitGridOptions,
  UIkitIconOptions,
  UIkitHeightViewportOptions,
  UIkitNavOptions,
  UIkitNavbarOptions,
  UIkitDropOptions,
  UIkitOffcanvasOptions,
  UIkitToggleOptions,
  UIkitModalOptions,
  UIkitSwiterOptions,
  UIkitSwitcherOptions,
  UIkitTooltipOptions,
  UIkitTabOptions,
  UIkitStickyOptions,
  UIkitAccordionOptions,
  UIkitNotificationOptions,
} from './types'

// Types: Define Types for UIkit or HTML elements
// ========================================================================

export type Element = object | Ref | HTMLElement | string

export type RefElement = Element | null

// define type for HTML input elements
export type InputElement = object | Ref | HTMLInputElement | string

// Utils: Define Usable Functions
// ========================================================================

// check if app is in develop mode
export function isDev() {
  return process.env.NODE_ENV === 'development'
}

//
// UIKit Functions
//

// set grid
export function grid(el: Element, options?: UIkitGridOptions) {
  return UIkit.grid(el, options)
}

// set icon
export function icon(el: Element, options?: UIkitIconOptions) {
  return UIkit.icon(el, options)
}

// set height viewport
export function heightViewport(el: Element, options?: UIkitHeightViewportOptions) {
  return UIkit.heightViewport(el, options)
}

// set nav
export function nav(el: Element, options?: UIkitNavOptions) {
  return UIkit.nav(el, options)
}

// set navbar
export function navbar(el: Element, options?: UIkitNavbarOptions) {
  return UIkit.navbar(el, options)
}

// set drop
export function drop(el: Element, options?: UIkitDropOptions) {
  return UIkit.drop(el, options)
}

// set offcanvas
export function offcanvas(el: Element, options?: UIkitOffcanvasOptions) {
  return UIkit.offcanvas(el, options)
}

// set toggle
export function toggle(el: Element, options?: UIkitToggleOptions) {
  return UIkit.toggle(el, options)
}

// set modal
export function modal(el: Element, options?: UIkitModalOptions) {
  return UIkit.modal(el, options)
}

// set switcher
export function switcher(el: Element, options?: UIkitSwitcherOptions | UIkitSwiterOptions) {
  return UIkit.switcher(el, options)
}

// set toggle
export function tooltip(el: Element, options?: UIkitTooltipOptions) {
  return UIkit.tooltip(el, options)
}

// set tab
export function tab(el: Element, options?: UIkitTabOptions) {
  return UIkit.tab(el, options)
}

// set sticky
export function sticky(el: Element, options?: UIkitStickyOptions) {
  return UIkit.sticky(el, options)
}

// set accordion
export function accordion(el: Element, options?: UIkitAccordionOptions) {
  return UIkit.accordion(el, options)
}

// show notification
export function notify(
  messageOrOptions: UIkitNotificationOptions | string,
  optionsOrStatus?: UIkitNotificationOptions | string,
) {
  if (typeof messageOrOptions === 'string') {
    return UIkit.notification(messageOrOptions, optionsOrStatus)
  } else {
    return UIkit.notification(messageOrOptions)
  }
}

// set util
// need import
// export function util() {
//   return UIkit.util()
// }
