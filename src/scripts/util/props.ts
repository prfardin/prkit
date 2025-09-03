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
  ListClassType,
  ContainerClassType,
  SectionClassType,
  TileClassType,
  InputClassType,
  TextareaClassType,
  LabelClassType,
  SpinnerClassType,
  AvatarClassType,
  CardClassType,
  RadioClassType,
  CheckboxClassType,
  ChipClassType,
  AccordionClassType,
  TableClassType,
  PaginationClassType,
} from './classes'

import { RouteLocationRaw } from 'vue-router'
import { InferDefaults } from 'vue'

/**
 * Section Props Types
 */
export interface SectionPropsType extends SectionClassType {
  //
}

/**
 * Container Props Types
 */
export interface ContainerPropsType extends ContainerClassType {
  //
}

/**
 * Tile Props Types
 */
export interface TilePropsType extends TileClassType {
  //
}

/**
 * List Props Types
 * extended from List Class Type
 * cause all list classes define as props
 */
export interface ListPropsType extends ListClassType {
  tag?: 'ul' | 'div' | string
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
 * Icon Props Types
 */
export interface IconPropsType {
  tag?: 'span' | string
  icon?: string
  ratio?: string | number
}

/**
 * Nav Props Types
 */
export interface NavPropsType {
  hasNavTag?: boolean
  targets?: string
  toggle?: string
  content?: string
  collapsible?: boolean
  multiple?: boolean
  transition?: string
  animation?: string | boolean
  duration?: number
}

/**
 * Nav Props Types
 */
export interface NavBar {
  prContainer?: string
  align?: string
  dropbar?: boolean
  dropbarAnchor?: string | boolean
  dropbarTransparentMode?: string | boolean
  stretch?: string | boolean
  mode?: string
  delayShow?: number
  delayHide?: number
  boundary?: string | boolean
  target?: string | boolean
  targetX?: string | boolean
  targetY?: string | boolean
  offset?: number
  animation?: string
  animateOut?: boolean
  bgScroll?: boolean
  closeOnScroll?: boolean
  duration?: number
  container?: boolean
}

/**
 * Input Props Types
 */
export interface InputPropsType extends InputClassType {
  type?: 'text' | string
  name: string
  id?: string
  label?: string
  ariaLabel?: string
  autofocus?: boolean
  icon?: string
  ratio?: number
  iconClass?: string
  iconFlip?: boolean
}

/**
 * Input Props Types
 */
export interface SelectBoxPropsType {
  type?: 'text' | string
  name: string
  id?: string
  label?: string
  ariaLabel?: string
  icon?: string
  ratio?: number
  iconClass?: string
  iconFlip?: boolean
  mode?: string
  lists?: string[] | undefined
  node?: any
  d?: string | null | string[]
  searchable?: boolean
  divider?: boolean
}

/**
 * Textarea Props Types
 */

export interface TextareaPropsType extends TextareaClassType {
  type?: 'text' | string
  name: string
  id?: string
  label?: string
  ariaLabel?: string
  autofocus?: boolean
  icon?: string
  ratio?: number
  iconClass?: string
  iconFlip?: boolean
  rows?: number
}

/**
 * Label Props Types
 */
export interface LabelPropsType extends LabelClassType {
  for: string
  icon?: string
  ratio?: number
  iconClass?: string
}

/**
 * Spinner Props Types
 */
export interface SpinnerPropsType extends SpinnerClassType {
  tag?: 'span' | string
  mode?: 'line' | 'circle'
}

/**
 * Avatar Props Types
 */

export interface AvatarPropsType extends AvatarClassType {
  tag?: string
  cls?: string
}

/**
 * Card Props Types
 */

export interface CardPropsType extends CardClassType {}

/**
 * Card Props Types
 */

export interface ChipPropsType extends ChipClassType {}

/**
 * Offcanvas Props Types
 */

export interface OffcanvasPropsType {
  mode?: 'slide' | 'reveal' | 'push' | 'none'
  flip?: boolean | undefined
  overlay?: boolean | undefined
  escClose?: boolean | undefined
  bgClose?: boolean | undefined
  container?: string | boolean | undefined
  id: string
  closeButton?: boolean
  notNav?: boolean
}

/**
 * Modal Props Types
 */

export interface ModalPropsType {
  escClose?: boolean | undefined
  bgClose?: boolean | undefined
  stack?: boolean | undefined
  container?: string | boolean | undefined
  clsPage?: string | undefined
  clsPanel?: string | undefined
  selClose?: string | undefined
  id: string
  cls?: string
}

export interface StickyPropsType {
  position?: 'top' | 'bottom'
  start?: number | string
  end?: boolean | number | string
  offset?: number | string
  overflowFlip?: boolean
  animation?: string | boolean
  clsActive?: string
  clsInactive?: string
  widthElement?: string | boolean
  showOnUp?: boolean
  media?: number | string | boolean
  targetOffset?: boolean | number
}

/**
 * Drop Props Types
 */

export interface DropPropsType {
  toggle?: string | boolean
  pos?: string
  stretch?: 'x' | 'y' | boolean | string
  mode?: 'click' | 'hover' | string
  delayShow?: number
  delayHide?: number
  autoUpdate?: boolean
  display?: 'dynamic' | 'static'
  boundary?: string
  boundaryX?: string
  boundaryY?: string
  boundaryAlign?: boolean
  target?: string | boolean
  targetX?: string | boolean
  targetY?: string | boolean
  inset?: boolean
  flip?: boolean | string
  shift?: boolean
  offset?: number
  animation?: string
  animateOut?: boolean
  bgScroll?: boolean
  closeOnScroll?: boolean
  duration?: number
  container?: boolean
}

/**
 * Radio Props Types
 */

export interface RadioPropsType extends RadioClassType {
  value: any
  name: string
  id?: string
}

/**
 * Checkbox Props Types
 */

export interface CheckboxPropsType extends CheckboxClassType {
  name: string
  id?: string
  value?: string | number | undefined
}

/**
 * Switcher Props Types
 */

export interface SwitcherPropsType {
  connect?: string
  toggle?: string
  itemNav?: string
  active?: number
  animation?: string
  duration?: number
  swiping?: boolean
  followFocus?: boolean
  list: [
    {
      name: string
    },
  ]
}

/**
 * Progress Props Types
 */

export interface ProgressPropsType {
  value: string | number
  max?: string | number
  id?: string
}

/**
 * Progress Props Types
 */

export interface Tab {
  connect?: string
  toggle?: string
  active?: number
  animation?: string
  duration?: number
  swiping?: boolean
  media?: number | string
  tabs: [
    {
      title: string
      href: string
    },
  ]
}

/**
 * Search Props Types
 */

export interface SearchPropsType {
  label?: string
  placeholder?: string
  labelCls?: string
  id: string
  autofocus?: boolean
}

/**
 * accordion Props Types
 */

export interface AccordionPropsType extends AccordionClassType {
  items: [{ title: string; content: string }]
  active?: number
  animation?: boolean
  collapsible?: boolean
  content?: string
  duration?: number
  multiple?: boolean
  targets?: string
  toggle?: string
  transition?: string
  offset?: number
}

export const AccordionDefaults: InferDefaults = {
  rounded: 'none',
  titleMode: 'dot',
  animation: true,
  collapsible: true,
  content: '> .uk-accordion-content',
  duration: 300,
  multiple: false,
  targets: '> *',
  toggle: '> .uk-accordion-title',
  transition: 'cubic-bezier(.4,0,.2,1)',
  offset: 0,
}

export const IconDefaults: InferDefaults = {
  tag: 'span',
}

/**
 * table Props Types
 */

export interface TablePropsType extends TableClassType {}

/**
 * pagination Props Types
 */

export interface PaginationPropsType extends PaginationClassType {
  modelValue: string | null
  table: string
  baseUrl?: string | null
  paginate: {
    current: number
    total: number
    totalPages: number
    loader: boolean
    perPage: number
    from: number
    to: number
  }
}
