import UIkit from 'uikit'
import type { Ref } from 'vue'
import type { AccordionIconType, AccordionPropsType, IconPropsType } from '@u/props'

// Types: Define Types for UIkit or HTML elements
// ========================================================================

export type Element = object | Ref | HTMLElement | string

export type RefElement = Element | null

export type InputElement = object | Ref | HTMLInputElement | string

// Configuration
// ========================================================================

// Icons used by components or referenced dynamically must be registered here.
// The build plugin uses these lists to import only the required icons instead
// of bundling the entire icon library.
//
// TODO: Move icon definitions into a separate icon library package.
export type IconStyles =
  | 'fa-duotone'
  | 'fa-duotoneli'
  | 'fa-duotoneso'
  | 'fa-duotoneth'
  | 'fa-light'
  | 'fa-regular'
  | 'fa-sharp'
  | 'fa-sharpduotone'
  | 'fa-sharpduotoneli'
  | 'fa-sharpduotoneso'
  | 'fa-sharpduotoneth'
  | 'fa-sharpli'
  | 'fa-sharpso'
  | 'fa-sharpth'
  | 'fa-solid'
  | 'fa-thin'
  | 'huge-bulk'
  | 'huge-duotone'
  | 'huge-regular'
  | 'huge-rounded'
  | 'huge-sharp'
  | 'huge-solid'
  | 'huge-solidsh'
  | 'huge-twotone'
  | 'iconoir-regular'
  | 'iconoir-solid'
  | 'ion-outline'
  | 'ion-sharp'
  | 'isocons-left'
  | 'isocons-right'
  | 'isocons-top'
  | 'isocons-duotoneleft'
  | 'isocons-duotoneright'
  | 'isocons-duotonetop'
  | 'isocons-duotonesharpleft'
  | 'isocons-duotonesharpright'
  | 'isocons-duotonesharptop'
  | 'isocons-sharpleft'
  | 'isocons-sharpright'
  | 'isocons-sharptop'
  | 'isocons-solidleft'
  | 'isocons-solidright'
  | 'isocons-solidtop'
  | 'isocons-solidsharpleft'
  | 'isocons-solidsharpright'
  | 'isocons-solidsharptop'
  | 'lucide-regular'
  | 'magi-duotone'
  | 'magi-light'
  | 'magi-regular'
  | 'magi-solid'
  | 'md-outlined'
  | 'md-round'
  | 'md-sharp'
  | 'md-solid'
  | 'md-twotone'
  | 'ming-cute'
  | 'ming-cutefi'
  | 'ming-cuteli'
  | 'ming-duotone'
  | 'ming-light'
  | 'ming-regular'
  | 'ming-sharp'
  | 'ming-solid'
  | 'ming-twotone'
  | 'ph-bold'
  | 'ph-duotone'
  | 'ph-light'
  | 'ph-regular'
  | 'ph-solid'
  | 'ph-thin'
  | 'solar-broken'
  | 'solar-duotone'
  | 'solar-duotoneso'
  | 'solar-regular'
  | 'solar-solid'
  | 'uni-light'
  | 'uni-mono'
  | 'uni-regular'
  | 'uni-solid'

export const defaultIconStyle: IconStyles = 'huge-bulk'

export const defaultIconComponentPrefix = 'component'

export const componentIcons = [
  'default-accordion-chevron'
]

export const dynamicIcons = []

export const accordionIconType = ['default', 'plus', 'chevron', 'circle']


// Utilities
// ========================================================================

// TODO: maybe need to change it in the future: move it from here
export function isDev() {
  return process.env.NODE_ENV === 'development'
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

export function setAccordion(el: RefElement, options: AccordionPropsType) {
  return UIkit.accordion(el as Element, { ...options })
}





// set icon
export function setIcon(el: RefElement, options: IconPropsType) {
  return UIkit.icon(el as Element, { ...options })
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

// set util
// need import
// export function util() {
//   return UIkit.util()
// }
