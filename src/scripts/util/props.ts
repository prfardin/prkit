/**
 * we use type-based declaration for most components
 * this file also created for this reason
 * vue support export type-based declaration,
 * so we will use this props as export props for components
 * accordion to https://vuejs.org/guide/typescript/composition-api#typing-component-props
 */
import type {
  UIkitAccordionOptions,
} from '@u/types.ts'
import type {
  UIkitIconOptions,
} from 'uikit'

/**
 * Some of the components contains class like grid
 * and need we define the grid classes as props
 * so we defined them in the classes as type, and
 * we extend and combine them here with Type Options
 */
import type {
  AccordionClassType,
} from './classes'

/**
 * we import custom types here
 */
import type { RefElementCallback } from '@u/util.ts'

/**
 * accordion props types
 * extended from UIkit accordion options
 * cause all UIkit accordion options is props
 * has child component: accordion-title and accordion-content
 */

export interface AccordionItemType {
  value?: unknown
  title: string
  content: string
}

export type AccordionIconType = 'none' | 'default' | 'plus' | 'chevron' | 'circle' | (string & {})

export interface AccordionPropsType extends UIkitAccordionOptions, AccordionClassType {
  refElement?: RefElementCallback
  tag?: 'ul' | 'div'
  list?: AccordionItemType[]
  icon?: AccordionIconType
  iconRatio?: number
}

export const accordionDefaults = {
  tag: 'ul',
  variant: 'default',
  icon: 'default',
  iconRatio: 0.7,
} satisfies Partial<AccordionPropsType>

/**
 * Icon Props Types
 */
export interface IconPropsType extends /* @vue-ignore */ UIkitIconOptions {
  tag?: 'span' | string
}

export const IconDefaults: Partial<IconPropsType> = {
  tag: 'span',
}
