/**
 * Configs and Icon Configs
 * ========================================================================
 *
 * the icon library will move into another library in future
 * and we will install with npm and use it.
 *
 * TODO:
 * The way that we want to separate the icon (PrKit-Icons) library
 * and component library (PrKit) The future plan has some question:
 * 1. default icon style for components must be predefined in component
 * library, so how do this.
 * 2. how compile icon build process will work on the component
 * library, what must be the structure of icon library and the build process
 *
 * For icons we use structure of UIKit icon library, the current build process
 * will create uikit-icons.ts file in .temp folder and search for used
 * icons in all files located in ./src folder and compile them into
 * uikit-icons.ts.
 *
 * We do this cause we dont want to import all svg files and we dont
 * wont use something like font-icons etc. its too lean also.
 *
 * The example of build process is like this:
 * icon="icon-ICONLIBRARYNAME-ICONLIBRARYSTYLE-ICONNAME" or
 * icon="component-ICONLIBRARYNAME-ICONLIBRARYSTYLE-ICONNAME" will find the icon from:
 * ./images/core/ICONLIBRARYNAME/ICONLIBRARYSTYLE/icons|components/ICONNAME.svg
 * ex: icon-fa-duotone-user will be:
 * ./images/core/fa/duotone/icons/user.svg
 * and will add it as object in to uikit-icons.ts as:
 * 'icon-fa-duotone-user': 'svg' or 'component-fa-duotone-user'|: 'svg'
 *
 * For using default icon style we must use icon name like: icon-default-user
 * so if we change the defaultIconStyle value it will change
 * all icons to defined style.
 *
 * For changing defual style of useages we must change the value of
 * const defaultIconStyle in this file and build process will replace all icon
 * in all useages that named like this: icon-default-user
 * ex: if defaultIconStyle = "huge-bulk" then
 * icon-default-user will search for this path:
 * ./images/core/huge/bulk/icons/user.svg
 *
 * For component icons we also use component perfeix instead of icon prefix
 * ex: component-default-COMPONENTNAMESTYLE and it will search for this path:
 * ./images/core/huge/bulk/components/COMPONENTNAMESTYLE.svg
 * like: component-default-accordion-chevron will search for this path:
 * ./images/core/huge/bulk/components/accordion-chevron.svg
 * it will render in uikit-icon.ts like this: 'component-default-accordion-chevron': 'svg'
 *
 * Main components like accordion wich contains icons intself accepts props icon
 * so we can use default defined icon type for each component (located in icon-style/icons/components)
 * or we can use name of icon for changing icon style of component.
 * components that include icons also accept icon-ratio and stroke-ratio props. default size
 * of icons is: 24px * 24px and icon-ratio will change the calculated size of icon to: iconRatio * 24.
 * the default size of stroke-width for icon library defined in svg file attribute (if exists). stroke-ratio
 * will change calculated width of icon to: strokeRatio * stroke-width-attributte.
 * example: <PrAccordion icon="none | chevron | icon-fa-regular-chevron-down" :icon-ratio="1.5" :stroke-ratio="2" />
 *
 * If we want to change all stroke-width of icons we can also define stroke-width value with CSS in icon.less
 * to ovveride the stroke-width svg attribute
 *
 * For compnents wich includes icons like accordion we define composable component (useComponentIcon)
 * wich handle process of defualt icons of compnent and custom icons. we are not using PrIcon
 * compnent inside them cuase its bad for performance refere
 * to: https://vuejs.org/guide/best-practices/performance.html#avoid-unnecessary-component-abstractions
 * example (accordion component):
 * PrAccordion.vue
 * const { iconName } = useComponentIcon(props, getAccordionIconName)
 * utils.ts
 * const accordionIconMap = { default: 'component-default-accordion-default', chevron: 'component-default-accordion-chevron', ...styles } as const
 * type AccordionIconType = keyof typeof accordionIconMap | 'none' | (string & {})
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
 * For dynamic process of importing svg files we can't find icon names becuase of build process
 * so when we use a dynamic icon name we must add the name to dynamicIcons const here.
 * example: dynamic icons that defined like: ${xIcon}-icon
 *
 * ========================================================================
 */

export type IconStyles =
  | 'uikit-'
  | 'fa-duotone'
  | 'fa-duotoneli'
  | 'fa-duotoneso'
  | 'fa-duotoneth'
  | 'fa-light'
  | 'fa-regular'
  | 'fa-sharp'
  | 'fa-sharpduotone'
  | 'fa-sharpduotoneli'
  | 'fa-sharpduotoneso'
  | 'fa-sharpduotoneth'
  | 'fa-sharpli'
  | 'fa-sharpso'
  | 'fa-sharpth'
  | 'fa-solid'
  | 'fa-thin'
  | 'huge-bulk'
  | 'huge-duotone'
  | 'huge-regular'
  | 'huge-rounded'
  | 'huge-sharp'
  | 'huge-solid'
  | 'huge-solidro'
  | 'huge-solidsh'
  | 'huge-twotone'
  | 'iconoir-regular'
  | 'iconoir-solid'
  | 'ion-outline'
  | 'ion-sharp'
  | 'isocons-left'
  | 'isocons-right'
  | 'isocons-top'
  | 'isocons-duotoneleft'
  | 'isocons-duotoneright'
  | 'isocons-duotonetop'
  | 'isocons-duotonesharpleft'
  | 'isocons-duotonesharpright'
  | 'isocons-duotonesharptop'
  | 'isocons-sharpleft'
  | 'isocons-sharpright'
  | 'isocons-sharptop'
  | 'isocons-solidleft'
  | 'isocons-solidright'
  | 'isocons-solidtop'
  | 'isocons-solidsharpleft'
  | 'isocons-solidsharpright'
  | 'isocons-solidsharptop'
  | 'lucide-regular'
  | 'magi-duotone'
  | 'magi-light'
  | 'magi-regular'
  | 'magi-solid'
  | 'md-outlined'
  | 'md-round'
  | 'md-sharp'
  | 'md-solid'
  | 'md-twotone'
  | 'ming-cute'
  | 'ming-cutefi'
  | 'ming-cuteli'
  | 'ming-duotone'
  | 'ming-light'
  | 'ming-regular'
  | 'ming-sharp'
  | 'ming-solid'
  | 'ming-twotone'
  | 'ph-bold'
  | 'ph-duotone'
  | 'ph-light'
  | 'ph-regular'
  | 'ph-solid'
  | 'ph-thin'
  | 'solar-broken'
  | 'solar-duotone'
  | 'solar-duotoneso'
  | 'solar-regular'
  | 'solar-solid'
  | 'uni-light'
  | 'uni-mono'
  | 'uni-regular'
  | 'uni-solid'

export const defaultIconStyle: IconStyles = 'huge-twotone'

export const dynamicIcons = []
