/**
 * we use this file for classes of the components
 * we send the props to xClassObject function, and
 * it will return us array of class that defined from props
 * we use this way to make our code clean
 * and reusable class for other semi-like components
 * we also define interface for each component classes
 * we will improve this way with future release of vue (type-based declaration export)
 */

/**
 * const still not assigned to their classObject's
 */
export const defaultIconCls = 'uk-icon'

export const defaultClsRtl = 'pr-direction-rtl'
export const defaultClsLtr = 'pr-direction-ltr'

/**
 * define background types, we use our main colors in
 * some components that take background color like button component,
 * so it's good to define it as global background types and extend from it
 */
export interface BackgroundTypes {
  default?: boolean
  muted?: boolean
  primary?: boolean
  secondary?: boolean
}

/**
 * we use background cls function to return all possible
 * background colors to every component we need it,
 * it will prevent us to define it for every component cls
 */
function backgroundCls(cls: string, props: { [key: string]: any }) {
  return [
    {
      [`${cls}-default`]: props.default,
      [`${cls}-muted`]: props.muted,
      [`${cls}-primary`]: props.primary,
      [`${cls}-secondary`]: props.secondary,
    },
  ]
}

/**
 * Grid Classes
 */
export interface GridClassType {
  small?: boolean
  medium?: boolean
  large?: boolean
  collapse?: boolean
  columnSmall?: boolean
  columnMedium?: boolean
  columnLarge?: boolean
  columnCollapse?: boolean
  rowSmall?: boolean
  rowMedium?: boolean
  rowLarge?: boolean
  rowCollapse?: boolean
  divider?: boolean
  match?: boolean
}

export const defaultGridCls = 'uk-grid'

export function gridClassObject(props: GridClassType, gridCls: string = defaultGridCls) {
  return [
    {
      [`${gridCls}-small`]: props.small,
      [`${gridCls}-medium`]: props.medium,
      [`${gridCls}-large`]: props.large,
      [`${gridCls}-collapse`]: props.collapse,
      [`${gridCls}-column-small`]: props.columnSmall,
      [`${gridCls}-column-medium`]: props.columnMedium,
      [`${gridCls}-column-large`]: props.columnLarge,
      [`${gridCls}-column-collapse`]: props.columnCollapse,
      [`${gridCls}-row-small`]: props.rowSmall,
      [`${gridCls}-row-medium`]: props.rowMedium,
      [`${gridCls}-row-large`]: props.rowLarge,
      [`${gridCls}-row-collapse`]: props.rowCollapse,
      [`${gridCls}-divider`]: props.divider,
      [`${gridCls}-match`]: props.match,
    },
  ]
}

/**
 * Button Classes
 */
export interface ButtonClassType {
  text?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
  rounded?: 'sm' | 'md' | 'lg' | 'full'
  mode?: 'solid' | 'pastel' | 'outline'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  spinner?: boolean
  badge?: boolean
  collapse?: boolean
  width?: string
  icon?: string
  iconButton?: boolean
  iconFlip?: boolean
}

export const defaultButtonCls = 'uk-button'
export const defaultPrButtonCls = 'pr-button'

export function buttonClassObject(
  props: ButtonClassType,
  hasDefaultSlot: boolean = true,
  buttonCls: string = defaultButtonCls,
  prButtonCls: string = defaultPrButtonCls,
) {
  return [
    {
      [defaultButtonCls]: !props.iconButton,
      [`${buttonCls}-text`]: props.text,
      [`${buttonCls}-${props.size}`]: props.size,
      [`${buttonCls}-rounded-${props.rounded}`]: props.rounded,
      [`${buttonCls}-${props.color}`]: props.color,
      [`${buttonCls}-${props.mode}`]: props.mode,
      [`${buttonCls}-collapse`]: props.collapse,
      [`${prButtonCls}-has-icon`]: props.icon && hasDefaultSlot,
      [`${prButtonCls}-icon-flip`]: props.iconFlip,
      [`${defaultIconCls}-button`]: props.iconButton,
      [`${prButtonCls}-has-spinner`]: props.spinner,
      [`uk-width-${props.width}`]: props.width,
    },
  ]
}

/**
 * Link Classes
 */
export interface LinkClassType {
  muted?: boolean
  text?: boolean
  heading?: boolean
  reset?: boolean
  toggle?: boolean
  icon?: string
}

export const defaultLinkCls = 'uk-link'
export const defaultPrLinkCls = 'pr-link'

export function linkClassObject(
  props: LinkClassType,
  hasDefaultSlot: boolean = true,
  linkCls: string = defaultLinkCls,
  prLinkCls: string = defaultPrLinkCls,
) {
  return [
    linkCls,
    {
      [`${linkCls}-muted`]: props.muted,
      [`${linkCls}-text`]: props.text,
      [`${linkCls}-heading`]: props.heading,
      [`${linkCls}-reset`]: props.reset,
      [`${linkCls}-toggle`]: props.toggle,
      [`${prLinkCls}-has-icon`]: props.icon && hasDefaultSlot,
    },
  ]
}

/**
 * Spinner Classes
 */
export const defaultSpinnerCls = 'uk-spinner'
export const defaultPrSpinnerCls = 'pr-spinner'

/**
 * Spinner Classes
 */
export interface SpinnerClassType {
  mode?: 'line' | 'circle'
}

export function spinnerClassObject(
  props: SpinnerClassType,
  spinnerCls: string = defaultPrSpinnerCls,
) {
  return [
    spinnerCls,
    {
      [`${spinnerCls}-${props.mode}`]: props.mode,
    },
  ]
}
