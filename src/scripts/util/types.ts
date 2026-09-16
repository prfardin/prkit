import type {
  UIkitAlign,
  UIkitClickHoverMode,
  UIkitCssSelector,
  UIkitDropOptionsBase,
  UIkitElement,
  UIkitElementBase,
  UIkitLightboxOptionsBase,
  UIkitScrollspyOptionsBase,
  UIkitStretch,
} from 'uikit'

export type UIkitBoolean = boolean extends infer T ? T : never

export interface UIkitAccordionOptions {
  active?: number
  animation?: UIkitBoolean
  collapsible?: UIkitBoolean
  content?: string
  duration?: number
  multiple?: UIkitBoolean
  targets?: string
  toggle?: string
  transition?: string
  offset?: number
}

interface UIkitAlertOptions {
  animation?: UIkitBoolean | string
  duration?: number
  selClose?: UIkitCssSelector
}

interface UIkitCountdownOptions {
  date?: string | Date | UIkitBoolean | number
  reload?: UIkitBoolean
}

interface UIkitCoverOptions {
  automute?: UIkitBoolean
  width?: number
  height?: number
}

type UIkitDropOptions = UIkitDropOptionsBase

interface UIkitDropElement extends UIkitElementBase {
  show(): void
  hide(delay?: UIkitBoolean): void
}

type UIkitDropdownOptions = UIkitDropOptionsBase

interface UIkitDropdownElement extends UIkitElementBase {
  show(): void
  hide(delay?: UIkitBoolean): void
}

interface UIkitDropnavOptions extends
  Pick<
    UIkitDropOptionsBase,
    | "stretch"
    | "mode"
    | "delayShow"
    | "delayHide"
    | "boundary"
    | "target"
    | "targetX"
    | "targetY"
    | "offset"
    | "animation"
    | "animateOut"
    | "bgScroll"
    | "closeOnScroll"
    | "duration"
    | "container"
  >
{
  align?: UIkitAlign
  dropbar?: UIkitBoolean
  dropbarAnchor?: UIkitCssSelector | undefined
}

interface UIkitFilterOptions {
  target?: string
  selActive?: string | UIkitBoolean
  animation?: "slide" | "fade" | "delayed-fade" | false
  duration?: number
}

interface UIkitFormOptions {
  target?: UIkitCssSelector | UIkitBoolean
}

interface UIkitGridOptions {
  margin?: string
  firstcolumn?: string
  masonry?: string | UIkitBoolean
  parallax?: number
  parallaxStart?: string
  parallaxEnd?: string
  parallaxJustify?: UIkitBoolean
}

interface UIkitHeightViewportOptions {
  offsetTop?: UIkitBoolean | UIkitCssSelector
  offsetBottom?: UIkitBoolean | number | UIkitCssSelector
  expand?: UIkitBoolean
  min?: number
  property?: string
}

interface UIkitHeightMatchOptions {
  target?: string
  row?: UIkitBoolean
}

interface UIkitIconOptions {
  icon?: string
  ratio?: number | string
}

interface UIkitImageOptions {
  dataSrc?: string
  dataSrcset?: string | UIkitBoolean
  sources?: string
  loading?: "lazy" | "eager"
  margin?: string
  sizes?: string | UIkitBoolean
  width?: string | UIkitBoolean
  height?: string | UIkitBoolean
  offsetTop?: string
  offsetLeft?: string | number
  target?: string | UIkitBoolean
}

interface UIkitInverseOptions {
  target?: UIkitCssSelector
  selActive?: UIkitCssSelector
}

interface UIkitLeaderOptions {
  fill?: string
  media?: UIkitBoolean | number | string
}

interface UIkitLightboxOptions extends UIkitLightboxOptionsBase {
  toggle?: UIkitCssSelector
}

interface UIkitMarginOptions {
  margin?: string
  firstColumn?: string
}

interface UIkitModalOptions {
  escClose?: UIkitBoolean
  bgClose?: UIkitBoolean
  stack?: UIkitBoolean
  container?: UIkitElement | UIkitBoolean
  clsPage?: string
  clsPanel?: string
  selClose?: string
}

interface UIkitNavOptions {
  targets?: UIkitCssSelector
  toggle?: UIkitCssSelector
  content?: UIkitCssSelector
  collapsible?: UIkitBoolean
  multiple?: UIkitBoolean
  transition?: string
  animation?: string | UIkitBoolean
  duration?: number
}

interface UIkitNavbarOptions {
  align?: UIkitAlign
  dropbar?: UIkitBoolean
  dropbarAnchor?: UIkitCssSelector
  dropbarTransparentMode?: "behind" | "remove" | UIkitBoolean
  stretch?: UIkitStretch
  mode?: UIkitClickHoverMode
  delayShow?: number
  delayHide?: number
  boundary?: UIkitCssSelector
  target?: UIkitCssSelector | UIkitBoolean
  targetX?: UIkitBoolean | UIkitCssSelector
  targetY?: UIkitBoolean | UIkitCssSelector
  offset?: number
  animation?: string
  animateOut?: UIkitBoolean
  bgScroll?: UIkitBoolean
  closeOnScroll?: UIkitBoolean
  duration?: number
  container?: UIkitElement | UIkitBoolean
  "boundary-align"?: UIkitBoolean
}

interface UIkitNotificationOptions {
  message?: string
  status?: string | "primary" | "success" | "warning" | "danger"
  timeout?: number
  group?: string
  pos?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"
}

interface UIkitOffcanvasOptions {
  mode?: "slide" | "reveal" | "push" | "none"
  flip?: UIkitBoolean
  overlay?: UIkitBoolean
  escClose?: UIkitBoolean
  bgClose?: UIkitBoolean
  container?: UIkitElement | UIkitBoolean
}

interface UIkitParallaxOptions {
  easing?: number
  target?: UIkitCssSelector
  start?: number | string
  end?: number | string
  media?: UIkitBoolean | number | string
}

interface UIkitScrollOptions {
  offset?: number
}

interface UIkitScrollspyOptions extends UIkitScrollspyOptionsBase {
  hidden?: UIkitBoolean
  margin?: string
  repeat?: UIkitBoolean
  delay?: number
  "offset-top"?: number
  "offset-left"?: number
}

interface UIkitScrollspyNavOptions extends UIkitScrollspyOptionsBase {
  closest?: UIkitBoolean | UIkitCssSelector
  scroll?: UIkitBoolean
  offset?: number
  overflow?: UIkitBoolean
}

interface UIkitSliderOptions {
  autoplay?: UIkitBoolean
  autoplayInterval?: number
  center?: UIkitBoolean
  draggable?: UIkitBoolean
  easing?: string
  finite?: UIkitBoolean
  index?: number
  active?: string
  pauseOnHover?: UIkitBoolean
  sets?: UIkitBoolean
  velocity?: number
}

interface UIkitSlideshowOptions {
  animation?: "slide" | "fade" | "scale" | "pull" | "push"
  autoplay?: UIkitBoolean
  autoplayInterval?: number
  draggable?: UIkitBoolean
  easing?: string
  finite?: UIkitBoolean
  pauseOnHover?: UIkitBoolean
  index?: number
  velocity?: number
  ratio?: string | number
  minHeight?: UIkitBoolean | number
  maxHeight?: UIkitBoolean | number
}

interface UIkitSortableOptions {
  group?: string
  animation?: UIkitBoolean | string
  duration?: number
  threshold?: number
  clsItem?: string
  clsPlaceholder?: string
  clsDrag?: string
  clsDragState?: string
  clsBase?: string
  clsNoDrag?: string
  clsEmpty?: string
  clsCustom?: string
  handle?: string
}

interface UIkitStickyOptions {
  position?: "top" | "bottom"
  start?: number | string
  end?: UIkitBoolean | number | string
  offset?: number | string
  overflowEnd?: number
  overflowFlip?: UIkitBoolean
  animation?: string | UIkitBoolean
  clsActive?: string
  clsInactive?: string
  showOnUp?: UIkitBoolean
  media?: number | string | UIkitBoolean
  targetOffset?: UIkitBoolean | number
  "show-on-up"?: UIkitBoolean
  "width-element"?: string | UIkitBoolean
}

interface UIkitSvgOptions {
  src?: string
  strokeAnimation?: UIkitBoolean
}

interface UIkitSwitcherOptions {
  connect?: UIkitCssSelector
  toggle?: UIkitCssSelector
  itemNav?: UIkitCssSelector
  active?: number
  animation?: string
  duration?: number
  swiping?: UIkitBoolean
  followFocus?: UIkitBoolean
}

interface UIkitTabOptions {
  connect?: UIkitCssSelector
  toggle?: UIkitCssSelector
  active?: number
  animation?: string
  duration?: number
  swiping?: UIkitBoolean
  media?: number | string
}

interface UIkitToggleOptions {
  target?: UIkitElement
  mode?: string
  cls?: string
  media?: number | string
  animation?: string
  duration?: number
  queued?: UIkitBoolean
}

interface UIkitTooltipOptions {
  title?: string
  pos?: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" | "left" | "right"
  offset?: number | UIkitBoolean
  animation?: string
  duration?: number
  delay?: number
  cls?: string
  container?: UIkitElement
}

interface UIkitUploadOptions {
  url?: string
  multiple?: UIkitBoolean
  name?: string
  params?: object
  allow?: string | UIkitBoolean
  mime?: string | UIkitBoolean
  concurrent?: number
  type?: string
  method?: string
  invalidMime?: string
  invalidName?: string
  clsDragover?: string
  abort?: object
  beforeAll?: object
  beforeSend?: object
  complete?: object
  completeAll?: object
  error?: object
  load?: object
  loadEnd?: object
  loadStart?: object
  progress?: object
  fail?: object
}

interface UIkitVideoOptions {
  autoplay?: UIkitBoolean | string
  automute?: UIkitBoolean
}
