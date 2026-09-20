/**
 * Utilities
 * ========================================================================
 *
 * We define all UIKit JavaScript Component and related methods
 * and other functions here.
 *
 * For example UIKit accordion component has JavaScript component and
 * for preventing using UIKit component like: <ul uk-accordion=>...</ul> we
 * will use all UIKit JavaScript component instead of uk-* in HTML tag. it
 * will help us to make our finale HTML output clean from any uk-* HTML attribute.
 *
 * The process is We define a function that start with 'set' prefix and component name
 * and accept refElement (component main element that defined as ref) as HTML element and
 * options (component props) as UIKit JavaScript options. just sometimes we need to pass
 * other args for some operation.
 * ex: setAccordion(el: RefElement, options: AccordionPropsType, active?: number) then we
 * pass options to the UIKit JavaScript Component
 * like: UIkit.accordion(el!, { ...omitUndefined(options), active })
 *
 * Why we omit undefined options?
 * when we want to use the options as props for our compnent (ex: PrAccordion)
 * it returns some value as vue default value refere to: https://vuejs.org/guide/components/props.html#boolean
 * or some value as undefined value, and it will replace the UIKit JavaScript component value
 * when we're trying to call the UIKit JavaScript function, for example if a component defualt option be like:
 * v-bind = { active = false, animation = true, duration = 200 } it will be replaced with
 * { active = false, animation = false, duration = undefined } and when we calling it with
 * UIKit.accordion(el, props) the UIKit JavaScript component will be broke.
 * for fixing that we need to do 2 thing:
 * 1. define all UIKit boolean function like: boolean extends infer T ? T : never
 * and change all UIKit type option from boolean to UIkitBoolean. vue can't change
 * this boolean to false, and also we don't have propblem when we useing boolean
 * value at calling component (it will accept just boolean)
 * 2. before we seend them to UIKit JavaScript Function we filter them using
 * omitUndefined function in the util.ts, it will remove the undefined props before
 * its recive to UIKit JavaScript Function
 * omitUndefined function will remove the undefined props before
 * its recive to UIKit JavaScript Function
 *
 * Refere to configs.ts line 48 to 73 components wich contains icons in their template must follow this
 * structre:
 * const xIconMap = { style1: 'component-default-x-style1', style2: 'component-default-x-style2', ... } as const
 * type AccordionIconType = keyof typeof xIconMap | 'none' (if component style include: without icon) | (string & {})
 * function getXIconName(icon: xIconType) {
 *   // if component style include: without icon
 *   if (icon === 'none') {
 *     return false
 *   }
 *   return icon in xIconMap ? xIconMap[icon as keyof typeof xIconMap] : icon
 * }
 *
 * Also, most of UIKit JavaScript Components has some methods to change state
 * of component programmatically, so we define thos methods here too, for
 * example: accordionToggle
 *
 * Structure:
 * Main UIKit JavaScript Component:
 * function setComponentName(el: RefElement, options: ComponentNamePropsType, ...relatedArgs) {
 *   UIkit.componentName(el!, { ...omitUndefined(options), ...relatedArgs })
 * }
 * Structure For Methods:
 * componentNameMethodName(el: RefElement, ...args: the UIKit arguments for methods) {
 *   UIkit.componentName(el!).methodName(...args)
 * }
 *
 */

import UIkit from 'uikit'
import type { RefElement } from '@u/types.ts'
import type { AccordionPropsType, IconPropsType } from '@u/props'


/**
 * Miscellaneous functions and configs
 * ======================================================================== */

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


// ========================================================================
// UIkit JavaScript Components and related methods
// ========================================================================

/** Accordion
 * ======================================================================== */

/** Javascript Component */

export function setAccordion(el: RefElement, options: AccordionPropsType, active?: number) {
  return UIkit.accordion(el!, { ...omitUndefined(options), active })
}


/** Methods */

export function accordionToggle(el: RefElement, index: number, animate?: boolean) {
  return UIkit.accordion(el!).toggle(index, animate)
}

/** Miscellaneous */

export const accordionIconMap = {
  default: 'component-default-accordion-default',
  plus: 'component-default-accordion-plus',
  chevron: 'component-default-accordion-chevron',
  circle: 'component-default-accordion-circle',
} as const

export type AccordionIconType = keyof typeof accordionIconMap | 'none' | (string & {})

export function getAccordionIconName(icon: AccordionIconType) {
  if (icon === 'none') {
    return false
  }

  return icon in accordionIconMap ? accordionIconMap[icon as keyof typeof accordionIconMap] : icon
}


/** Icon
 * ======================================================================== */

/** Javascript Component */

export function setIcon(el: RefElement, options: IconPropsType) {
  return UIkit.icon(el!, { ...omitUndefined(options) })
}
