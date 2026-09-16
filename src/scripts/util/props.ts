/**
 * we use type-based declaration for most components
 * this file also created for this reason
 * vue support export type-based declaration,
 * so we will use this props as export props for components
 * accordion to https://vuejs.org/guide/typescript/composition-api#typing-component-props
 */
import type { UIkitAccordionOptions } from '@u/types.ts'
import type {
  UIkitIconOptions,
} from 'uikit'

/**
 * Some of the components contains class like flex
 * and need we define the flex classes as props
 * so we defined them in the classes as type, and
 * we extend and combine them here with Type Options
 */
import type { GridClassType, ButtonClassType, LinkClassType, SpinnerClassType } from './classes'

/**
 * we import custom types here
 */
import type { RouteLocationRaw } from 'vue-router'
import type { RefElement, RefElementCallback } from '@u/util.ts'

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

export interface AccordionClassType {
  variant?: 'default' | 'hover' | 'line'
}

/**
 * Accordion Props Types
 * extended from Accordion Class Type
 * cause all button classes define as props
 */
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
 * Button Props Types
 * extended from Button Class Type
 * cause all button classes define as props
 */
export interface ButtonPropsType extends ButtonClassType {
  tag?: 'router-link' | 'a' | 'button'
  to?: string
  href?: string
  slotClass?: string
  ripple?: boolean
  spinner?: boolean
  spinnerMod?: 'line' | 'circle'
  icon?: string
  ratio?: string
  iconClass?: string
  spinnerClass?: string
  disabled?: boolean
}

/**
 * Grid Props Types
 * extended from Grid Class Type
 * cause all grid classes define as props
 */
export interface GridPropsType extends GridClassType {
  margin?: string
  firstColumn?: string
  masonry?: boolean
  parallax?: number
}

/**
 * Icon Props Types
 */
export interface IconPropsType extends /* @vue-ignore */ UIkitIconOptions {
  tag?: 'span' | string
}

export const IconDefaults: Partial<IconPropsType> = {
  tag: 'span',
}

/**
 * Link Props Types
 * extended from Link Class Type
 * cause all link classes define as props
 */
export interface LinkPropsType extends LinkClassType {
  tag?: 'router-link' | 'a'
  to?: RouteLocationRaw
  href?: string
  slotClass?: string
  iconClass?: string
  ratio?: string
}

/**
 * Spinner Props Types
 */
export interface SpinnerPropsType extends SpinnerClassType {
  tag?: 'span' | string
  mode?: 'line' | 'circle'
}
