/**
 * Props:
 * Vue support exported type-based declaration for props refer to
 * https://vuejs.org/guide/typescript/composition-api#typing-component-props
 * so We use type-based declaration define for props, and it also keeps our
 * main component clean, and we can manage all props at one file and import
 * them at main component.
 *
 * Component props itself has three part:
 * 1. xPropsType: the main props of component (PrKit Props)
 * 2. xClassType: will return CSS class of main component (extended into xPropsType)
 * 3. UIKitXOptions: UIKit JavaScript Component options (just useable for
 * components that has UIKit JavaScript Component - extended into xPropsType)
 * ex: interface xPropsType extends UIkitXOptions, xClassType { ... }
 *
 * refer to RefElementCallback description in types.ts file (line: 32 to 49) every
 * main prop types (xPropsType) must have props with this define: refElement?: RefElementCallback
 * so we can use access the component element and use UIKit JavaScript methods of that component
 *
 * Also, some of component props has default value, so same as props we define them
 * here after defining props and import them when defning component props (the defaultValue
 * type must be: satisfies Partial<xPropsType>)
 * for ex:
 * const xDefaults = { ... props default values } satisfies Partial<xPropsType>
 * and use it like:
 * const props = withDefaults(defineProps<xPropsType>(), xDefaults) in component
 *
 * For usage of props we need to import all UIKit JavaScript Component
 * types and all Component Class Types
 *
 * Structure:
 * interface xPropsType extends UIkitXOptions, xClassType { ... props of stated of component }
 * const xDefaults = { ... props default values } satisfies Partial<xPropsType>
 * useage in compoonent:
 * const props = withDefaults(defineProps<xPropsType>(), xDefaults)
 *
 */

import type {
  RefElementCallback,
  UIkitAccordionOptions,
  UIkitIconOptions
} from '@u/types.ts'

import type {
  AccordionClassType,
} from './classes'


/**
 * Accordion Prop Types
 * Props: active, animation, collapsible, content, duration, multiple, targets,
 * toggle, transition, offset, variant, refElement, tag, list, icon, iconRatio
 * Child Components: accordion-title | accordion-content
 * ======================================================================== */

export interface AccordionItemType {
  /** Model value when opened/clicked/selected */
  value?: unknown
  /** Title/header of an item */
  title: string
  /** Hidden part of item that will show when item opened */
  content: string
}

/** Icon Type of item - each has its own animation when open/close */
export type AccordionIconType = 'none' | 'default' | 'plus' | 'chevron' | 'circle' | (string & {})

export interface AccordionPropsType extends UIkitAccordionOptions, AccordionClassType {
  /** Equal to element ref of component for accessing component element from parent */
  refElement?: RefElementCallback
  /** Render tag of elements: ul-li | div-div */
  tag?: 'ul' | 'div'
  /** List of array to render with default structure */
  list?: AccordionItemType[]
  /** Icon type of item */
  icon?: AccordionIconType
  /** The icon size */
  iconRatio?: number
}

export const accordionDefaults = {
  tag: 'ul',
  variant: 'default',
  icon: 'default',
  iconRatio: 0.7,
} satisfies Partial<AccordionPropsType>


/**
 * Icon Prop Types
 * Props: icon, ratio, tag
 * ======================================================================== */

export interface IconPropsType extends UIkitIconOptions {
  tag?: 'span' | string
}

export const IconDefaults: Partial<IconPropsType> = {
  tag: 'span',
}
