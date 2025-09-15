/**
 * we use type-based declaration for most components
 * this file also created for this reason but
 * vue not support export type-based declaration at this time,
 * so we will use this props as export props for components with future release of vue
 */
import {
  GridClassType,
  ButtonClassType,
  LinkClassType,
  SpinnerClassType,
} from './classes'

import {
  UIkitAccordionOptions,
  UIkitIconOptions,
} from './types'

import { RouteLocationRaw } from 'vue-router'

/**
 * Button Props Types
 * extended from ------
 * cause all button classes -----
 */
export interface AccordionPropsType extends UIkitAccordionOptions {
  //
}







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
export interface IconPropsType extends UIkitIconOptions {
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
