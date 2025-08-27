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
export const defaultPreserveCls = 'uk-preserve-color'

export const defaultPaddingCls = 'uk-padding'

export const defaultIconCls = 'uk-icon'

export const defaultClsRtl = 'pr-direction-rtl'
export const defaultClsLtr = 'pr-direction-ltr'

type RoundedType = 'none' | 'md' | 'lg' | 'full'

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
 * Container Classes
 */
export interface ContainerClassType {
  xsmall?: boolean
  small?: boolean
  large?: boolean
  xlarge?: boolean
  expand?: boolean
}

export const defaultContainerCls = 'uk-container'

export function containerClassObject(
  props: ContainerClassType,
  containerCls: string = defaultContainerCls,
) {
  return [
    containerCls,
    {
      [`${containerCls}-xsmall`]: props.xsmall,
      [`${containerCls}-small`]: props.small,
      [`${containerCls}-large`]: props.large,
      [`${containerCls}-xlarge`]: props.xlarge,
      [`${containerCls}-expand`]: props.expand,
    },
  ]
}

/**
 * List Classes
 */
export interface ListClassType {
  disc?: boolean
  circle?: boolean
  square?: boolean
  decimal?: boolean
  hyphen?: boolean
  muted?: boolean
  emphasis?: boolean
  primary?: boolean
  secondary?: boolean
  bullet?: boolean
  divider?: boolean
  striped?: boolean
  large?: boolean
  collapse?: boolean
}

export const defaultListCls = 'uk-list'

export function listClassObject(props: ListClassType, listCls: string = defaultListCls) {
  return [
    listCls,
    {
      [`${listCls}-disc`]: props.disc,
      [`${listCls}-circle`]: props.circle,
      [`${listCls}-square`]: props.square,
      [`${listCls}-decimal `]: props.decimal,
      [`${listCls}-hyphen`]: props.hyphen,
      [`${listCls}-muted`]: props.muted,
      [`${listCls}-emphasis`]: props.emphasis,
      [`${listCls}-primary `]: props.primary,
      [`${listCls}-secondary`]: props.secondary,
      [`${listCls}-bullet`]: props.bullet,
      [`${listCls}-divider`]: props.divider,
      [`${listCls}-striped `]: props.striped,
      [`${listCls}-large`]: props.large,
      [`${listCls}-collapse`]: props.collapse,
    },
  ]
}

/**
 * Section Classes
 */
export interface SectionClassType extends BackgroundTypes {
  default?: boolean
  muted?: boolean
  primary?: boolean
  secondary?: boolean
  preserve?: boolean
  xsmall?: boolean
  small?: boolean
  large?: boolean
  xlarge?: boolean
  paddingRemove?: boolean
}

export const defaultSectionCls = 'uk-section'

export function sectionClassObject(
  props: SectionClassType,
  sectionCls: string = defaultSectionCls,
  preserveCls: string = defaultPreserveCls,
  paddingCls: string = defaultPaddingCls,
) {
  return [
    sectionCls,
    ...backgroundCls(sectionCls, props),
    {
      preserveCls: props.preserve,
      [`${sectionCls}-default`]: props.default,
      [`${sectionCls}-muted`]: props.muted,
      [`${sectionCls}-primary`]: props.primary,
      [`${sectionCls}-secondary`]: props.secondary,
      [`${sectionCls}-xsmall`]: props.xsmall,
      [`${sectionCls}-small`]: props.small,
      [`${sectionCls}-large`]: props.large,
      [`${sectionCls}-xlarge`]: props.xlarge,
      [`${paddingCls}-remove-vertical`]: props.paddingRemove,
    },
  ]
}

/**
 * Tile Classes
 */
export interface TileClassType extends BackgroundTypes {
  xsmall?: boolean
  small?: boolean
  large?: boolean
  xlarge?: boolean
  paddingRemove?: boolean
}

export const defaultTileCls = 'uk-tile'

export function tileClassObject(
  props: TileClassType,
  tileCls: string = defaultTileCls,
  paddingCls: string = defaultPaddingCls,
) {
  return [
    tileCls,
    ...backgroundCls(tileCls, props),
    {
      [`${tileCls}-xsmall`]: props.xsmall,
      [`${tileCls}-small`]: props.small,
      [`${tileCls}-large`]: props.large,
      [`${tileCls}-xlarge`]: props.xlarge,
      [`${paddingCls}-remove`]: props.paddingRemove,
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
 * Form Classes
 */
export const defaultFormCls = 'uk-form'

/**
 * Input Classes
 */
export interface InputClassType {
  danger?: boolean
  success?: boolean
  warning?: boolean
  disabled?: boolean
  large?: boolean
  small?: boolean
  width?: string
  blank?: boolean
  cls?: string
}

export const defaultInputCls = 'uk-input'
export const defaultPrInputCls = 'pr-link'

export function inputClassObject(
  props: InputClassType,
  inputCls: string = defaultInputCls,
  prInputCls: string = defaultPrInputCls,
  formCls: string = defaultFormCls,
) {
  return [
    props.cls,
    inputCls,
    {
      [`${formCls}-danger`]: props.danger,
      [`${formCls}-success`]: props.success,
      [`${formCls}-warning`]: props.warning,
      [`${formCls}-disabled`]: props.disabled,
      [`${formCls}-large`]: props.large,
      [`${formCls}-small`]: props.small,
      [`${formCls}-blank`]: props.blank,
      [`${formCls}-width-${props.width}`]: props.width,
    },
  ]
}

/**
 * Input Classes
 */
export interface TextareaClassType {
  danger?: boolean
  success?: boolean
  warning?: boolean
  disabled?: boolean
  large?: boolean
  small?: boolean
  width?: string
  blank?: boolean
  cls?: string
}

export const defaultTextareaCls = 'uk-textarea'
export const defaultPrTextareaCls = 'pr-link'

export function textareaClassObject(
  props: TextareaClassType,
  textareaCls: string = defaultTextareaCls,
  prTextareaCls: string = defaultPrTextareaCls,
  formCls: string = defaultFormCls,
) {
  return [
    props.cls,
    textareaCls,
    {
      [`${formCls}-danger`]: props.danger,
      [`${formCls}-success`]: props.success,
      [`${formCls}-warning`]: props.warning,
      [`${formCls}-disabled`]: props.disabled,
      [`${formCls}-large`]: props.large,
      [`${formCls}-small`]: props.small,
      [`${formCls}-blank`]: props.blank,
      [`${formCls}-width-${props.width}`]: props.width,
    },
  ]
}

/**
 * Form Icon Classes
 */
export const defaultFormIconCls = 'uk-form-icon'

/**
 * Input Icon Classes
 */
export interface InputIconClassType {
  iconClass?: string
  iconFlip?: boolean
}

export function inputIconClassObject(
  props: InputIconClassType,
  formIconCls: string = defaultFormIconCls,
) {
  return [
    formIconCls,
    props.iconClass,
    {
      [`${formIconCls}-flip`]: props.iconFlip,
    },
  ]
}

/**
 * Label Classes
 */
export interface LabelClassType {
  //
}

export const defaultLabelCls = 'uk-form-label'

export function labelClassObject(props: LabelClassType, labelCls: string = defaultLabelCls) {
  return [labelCls]
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

/**
 * Avatar Classes
 */

export interface AvatarClassType {
  xSmall?: boolean
  small?: boolean
  medium?: boolean
  large?: boolean
  xLarge?: boolean
  border?: boolean
  hover?: boolean
  rounded?: boolean
  circle?: boolean
}

export const defaultAvatarCls = 'pr-avatar'

export function avatarClassObject(props: AvatarClassType, AvatarCls: string = defaultAvatarCls) {
  return [
    AvatarCls,
    {
      [`${AvatarCls}-xsmall`]: props.xSmall,
      [`${AvatarCls}-small`]: props.small,
      [`${AvatarCls}-medium`]: props.medium,
      [`${AvatarCls}-large`]: props.large,
      [`${AvatarCls}-xlarge`]: props.xLarge,
      [`${AvatarCls}-border`]: props.border,
      [`${AvatarCls}-hover`]: props.hover,
      [`${AvatarCls}-rounded`]: props.rounded,
      [`${AvatarCls}-circle`]: props.circle,
    },
  ]
}

/**
 * Card Classes
 */
export interface CardClassType {
  default?: boolean
  muted?: boolean
  primary?: boolean
  secondary?: boolean
  body?: boolean
  border?: boolean
  hover?: boolean
  small?: boolean
  large?: boolean
}

export const defaultCardCls = 'uk-card'

export function cardClassObject(props: CardClassType, CardCls: string = defaultCardCls) {
  return [
    CardCls,
    {
      [`${CardCls}-default`]: props.default,
      [`${CardCls}-muted`]: props.muted,
      [`${CardCls}-primary`]: props.primary,
      [`${CardCls}-secondary`]: props.secondary,
      [`${CardCls}-body`]: props.body,
      [`${CardCls}-border`]: props.border,
      [`${CardCls}-hover`]: props.hover,
      [`${CardCls}-small`]: props.small,
      [`${CardCls}-large`]: props.large,
    },
  ]
}

/**
 * Label Classes
 */
export interface ChipClassType {
  size?: 'sm'
  mode: 'solid' | 'pastel' | 'outline'
  rounded: 'none' | 'sm' | 'md' | 'lg' | 'full'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}

export const defaultChipCls = 'pr-chip'

export function chipClassObject(props: ChipClassType, ChipCls: string = defaultChipCls) {
  return [
    ChipCls,
    {
      [`${ChipCls}-${props.size}`]: props.size,
      [`${ChipCls}-${props.mode}`]: props.mode,
      [`${ChipCls}-rounded-${props.rounded}`]: props.rounded,
      [`${ChipCls}-${props.color}`]: props.color,
    },
  ]
}

/**
 * Radio Classes
 */
export interface RadioClassType {
  mode?: 'square' | 'rounded' | 'circle'
}

export const defaultRadioCls = 'pr-radio'

export function radioClassObject(props: RadioClassType, radioCls: string = defaultRadioCls) {
  return [
    radioCls,
    {
      [`${radioCls}-${props.mode}`]: props.mode,
    },
  ]
}

/**
 * Checkbox Classes
 */
export interface CheckboxClassType {
  mode?: 'square' | 'rounded' | 'circle'
}

export const defaultCheckboxCls = 'pr-checkbox-mask'

export function checkboxClassObject(
  props: CheckboxClassType,
  checkboxCls: string = defaultCheckboxCls,
) {
  return [
    checkboxCls,
    {
      [`${checkboxCls}-${props.mode}`]: props.mode,
    },
  ]
}

/**
 * Accordion Classes
 */

export interface AccordionClassType {
  rounded: RoundedType
  titleMode: 'dot' | 'chevron' | 'plus'
}

export const defaultAccordionCls = 'pr-accordion'

export function AccordionClassObject(
  props: AccordionClassType,
  checkboxCls: string = defaultAccordionCls,
) {
  return [
    checkboxCls,
    {
      [`${checkboxCls}-rounded-${props.rounded}`]: props.rounded,
      [`${checkboxCls}-${props.titleMode}`]: props.titleMode,
    },
  ]
}

/**
 * Table Classes
 */
export interface TableClassType {
  size?: 'small' | 'large'
  divider?: boolean
  striped?: boolean
  hover?: boolean
  justify?: boolean
  middle?: boolean
  responsive?: boolean
}

export const defaultTableCls = 'uk-table'

export function TableClassObject(props: TableClassType, tableCls: string = defaultTableCls) {
  return [
    tableCls,
    {
      [`${tableCls}-${props.size}`]: props.size,
      [`${tableCls}-divider`]: props.divider,
      [`${tableCls}-striped`]: props.striped,
      [`${tableCls}-hover`]: props.hover,
      [`${tableCls}-justify`]: props.justify,
      [`${tableCls}-middle`]: props.middle,
      [`${tableCls}-responsive`]: props.responsive,
    },
  ]
}

/**
 * Pagination Classes
 */
export interface PaginationClassType {
  rounded?: 'sm' | 'md' | 'lg' | 'full'
}

export const defaultPaginationCls = 'pr-pagination'

export function PaginationClassObject(
  props: PaginationClassType,
  paginationCls: string = defaultPaginationCls,
) {
  return [
    paginationCls,
    {
      [`${paginationCls}-rounded-${props.rounded}`]: props.rounded,
    },
  ]
}
