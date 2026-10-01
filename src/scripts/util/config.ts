/**
 * Configs and Icon Configs
 * ========================================================================
 *
 * the icon library will move into another library in future
 * and we will install with npm and use it.
 *
 * TODO:
 *  The way that we want to separate the icon (PrKit-Icons) library
 *  and component library (PrKit) The future plan has some question:
 *  1. default icon style for components must be predefined in component
 *  library, so how do this.
 *  2. how compile icon build process will work on the component
 *  library, what must be the structure of icon library and the build process
 *
 * For icons we use structure of UIKit icon library, the current build process
 * will create uikit-icons.ts file in .temp folder and search for used
 * icons in all files located in ./src folder and compile them into
 * uikit-icons.ts.
 *
 * We do this cause we don't want to import all svg files and we don't
 * wont use something like font-icons etc. its too lean also.
 *
 * The example of build process is like this:
 * icon="icon-IconLibraryName-IconLibraryStyle-IconName" or
 * icon="component-IconLibraryName-IconLibraryStyle-IconName" will find the icon from:
 * ./images/core/IconLibraryName/IconLibraryStyle/icons|components/IconName.svg
 * ex: icon-fa-duotone-user will be:
 * ./images/core/fa/duotone/icons/user.svg
 * and will add it as object in to uikit-icons.ts as:
 * 'icon-fa-duotone-user': 'svg' or 'component-fa-duotone-user'|: 'svg'
 *
 * For using default icon style we must use icon name like: icon-default-user
 * so if we change the defaultIconStyle value it will change
 * all icons to defined style.
 *
 * For changing default style of usages we must change the value of
 * const defaultIconStyle in this file and build process will replace all icon
 * in all usages that named like this: icon-default-user
 * ex: if defaultIconStyle = "huge-bulk" then
 * icon-default-user will search for this path:
 * ./images/core/huge/bulk/icons/user.svg
 *
 * For component icons we also use component prefix instead of icon prefix
 * ex: component-default-ComponentNameStyle and it will search for this path:
 * ./images/core/huge/bulk/components/ComponentNameStyle.svg
 * like: component-default-accordion-chevron will search for this path:
 * ./images/core/huge/bulk/components/accordion-chevron.svg
 * it will render in uikit-icon.ts like this: 'component-default-accordion-chevron': 'svg'
 *
 * Main components like accordion which contains icons itself accepts props icon
 * so we can use default defined icon type for each component (located in icon-style/icons/components)
 * or we can use name of icon for changing icon style of component.
 * components that include icons also accept icon-ratio and stroke-ratio props. default size
 * of icons is: 24px * 24px and icon-ratio will change the calculated size of icon to: iconRatio * 24.
 * the default size of stroke-width for icon library defined in svg file attribute (if exists). stroke-ratio
 * will change calculated width of icon to: strokeRatio * stroke-width-attribute.
 * example: <PrAccordion icon="none | chevron | icon-fa-regular-chevron-down" :icon-ratio="1.5" :stroke-ratio="2" />
 *
 * If we want to change all stroke-width of icons we can also define stroke-width value with CSS in icon.less
 * to override the stroke-width svg attribute
 *
 * For components which includes icons like accordion we define composable component (useComponentIcon)
 * which handle process of default icons of component and custom icons. we are not using PrIcon
 * component inside them cause its bad for performance refer
 * to: https://vuejs.org/guide/best-practices/performance.html#avoid-unnecessary-component-abstractions
 * example (accordion component):
 * PrAccordion.vue
 * const { iconName } = useComponentIcon(props, getAccordionIconName)
 * utils.ts
 * const accordionIconMap = { default: 'component-default-accordion-default', chevron: 'component-default-accordion-chevron', ...styles } as const
 * type AccordionIconType = keyof typeof accordionIconMap | 'none' | IconNames
 * export function getAccordionIconName(icon: AccordionIconType) {
 *   // for component without icon style
 *   if (icon === 'none') {
 *     return false
 *   }
 *
 *   return icon in accordionIconMap ? accordionIconMap[icon as keyof typeof accordionIconMap] : icon
 * }
 * at last we defined icon and icon-ratio as props and it will be done.
 *
 * For dynamic process of importing svg files we can't find icon names because of build process
 * so when we use a dynamic icon name we must add the name to dynamicIcons const here.
 * example: dynamic icons that defined like: ${xIcon}-icon
 *
 * ========================================================================
 */

export interface BaseIconStyles {
  'default': true
  'uikit-regular': true
  'fa-duotone': true
  'fa-duotoneli': true
  'fa-duotoneso': true
  'fa-duotoneth': true
  'fa-light': true
  'fa-regular': true
  'fa-sharp': true
  'fa-sharpduotone': true
  'fa-sharpduotoneli': true
  'fa-sharpduotoneso': true
  'fa-sharpduotoneth': true
  'fa-sharpli': true
  'fa-sharpso': true
  'fa-sharpth': true
  'fa-solid': true
  'fa-thin': true
  'fa-brand': true
  'huge-bulk': true
  'huge-duotone': true
  'huge-regular': true
  'huge-rounded': true
  'huge-sharp': true
  'huge-solid': true
  'huge-solidro': true
  'huge-solidsh': true
  'huge-twotone': true
  'iconoir-regular': true
  'iconoir-solid': true
  'ion-regular': true
  'ion-outline': true
  'ion-sharp': true
  'ion-logo': true
  'isocons-left': true
  'isocons-right': true
  'isocons-top': true
  'isocons-duotoneleft': true
  'isocons-duotoneright': true
  'isocons-duotonetop': true
  'isocons-duotonesharpleft': true
  'isocons-duotonesharpright': true
  'isocons-duotonesharptop': true
  'isocons-sharpleft': true
  'isocons-sharpright': true
  'isocons-sharptop': true
  'isocons-solidleft': true
  'isocons-solidright': true
  'isocons-solidtop': true
  'isocons-solidsharpleft': true
  'isocons-solidsharpright': true
  'isocons-solidsharptop': true
  'lucide-regular': true
  'magi-duotone': true
  'magi-light': true
  'magi-regular': true
  'magi-solid': true
  'md-outlined': true
  'md-round': true
  'md-sharp': true
  'md-solid': true
  'md-twotone': true
  'ming-cute': true
  'ming-cutefi': true
  'ming-cuteli': true
  'ming-duotone': true
  'ming-light': true
  'ming-regular': true
  'ming-sharp': true
  'ming-solid': true
  'ming-twotone': true
  'ph-bold': true
  'ph-duotone': true
  'ph-light': true
  'ph-regular': true
  'ph-solid': true
  'ph-thin': true
  'solar-bold': true
  'solar-bolddu': true
  'solar-broken': true
  'solar-linear': true
  'solar-linedu': true
  'solar-outline': true
  'uni-line': true
  'uni-mono': true
  'uni-solid': true
  'uni-thin': true
}

export type IconStyles =
  keyof BaseIconStyles extends never
    ? string
    : keyof BaseIconStyles

export const defaultIconStyle: IconStyles = 'ming-cute' // ming-solid-twotone

export const dynamicIcons = []
