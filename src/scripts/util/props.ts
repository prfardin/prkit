/**
 * we use type-based declaration for most components
 * this file also created for this reason
 * vue support export type-based declaration,
 * so we will use this props as export props for components
 * accordion to https://vuejs.org/guide/typescript/composition-api#typing-component-props
 */
import {
  UIkitAccordionOptions,
  UIkitAlertOptions,
  UIkitCountdownOptions,
  UIkitCoverOptions,
  UIkitDropOptions,
  UIkitDropdownOptions,
  UIkitDropnavOptions,
  UIkitFilterOptions,
  UIkitFormOptions,
  UIkitGridOptions,
  UIkitHeightViewportOptions,
  UIkitHeightMatchOptions,
  UIkitIconOptions,
  UIkitImageOptions,
  UIkitInverseOptions,
  UIkitLeaderOptions,
  UIkitLightboxOptions,
  UIkitMarginOptions,
  UIkitModalOptions,
  UIkitNavOptions,
  UIkitNavbarOptions,
  UIkitNotificationOptions,
  UIkitOffcanvasOptions,
  UIkitParallaxOptions,
  UIkitScrollOptions,
  UIkitScrollspyOptions,
  UIkitScrollspyNavOptions,
  UIkitSliderOptions,
  UIkitSlideshowOptions,
  UIkitSortableOptions,
  UIkitStickyOptions,
  UIkitSvgOptions,
  UIkitSwitcherOptions,
  UIkitTabOptions,
  UIkitToggleOptions,
  UIkitTooltipOptions,
  UIkitUploadOptions,
  UIkitVideoOptions,
} from './types'

/**
 * Some of the components contains class like flex
 * and need we define the flex classes as props
 * so we defined them in the classes as type, and
 * we extend and combine them here with Type Options
 */
import { GridClassType, ButtonClassType, LinkClassType, SpinnerClassType } from './classes'

/**
 * We import custom types here
 */
import { RouteLocationRaw } from 'vue-router'


/**
 * Accordion Props Types
 * extended from UIkit Accordion Options
 * cause all UIkit Accordion Options as props
 * has child component: accordion-title and accordion-content
 */

// Accordion Item Type
export interface AccordionItemType {
  title: string
  content: string
}

// Accordion Props Types
export interface AccordionPropsType extends UIkitAccordionOptions {
  tag?: 'ul' | 'div'
  list?: AccordionItemType[]
}

// Accordion Defaults
export const AccordionDefaults: Partial<AccordionPropsType> = {
  tag: 'ul',
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
