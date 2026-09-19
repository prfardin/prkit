/**
 * Configs and Icon Configs
 * the icon library will move into another library in future
 * and we will install with npm and use it.
 *
 * TODO: The way that we want to separate the icon (PrKit-Icons) library
 * and component library (PrKit) The future plan has some question:
 * 1. default icon style for components must be predefined in component
 * library, so how do this.
 * 2. how compile icon build process will work on the component
 * library, what must be the structure of icon library
 *
 * For icons we use structure of UIKit icon library, the build process
 * will create uikit-icons.ts file in .temp folder and search for used
 * icons in all files located in ./src folder and compile them into
 * uikit-icons.ts.
 *
 * We do this cause we dont want to import all svg files and we dont
 * want use something like font-icons, its too lean also.
 *
 * The example of build process is like this:
 * icon="icon-ICONLIBRARYNAME-ICONLIBRARYSTYLE-ICONNAME" will find the icon from:
 * ./images/core/ICONLIBRARYNAME/ICONLIBRARYSTYLE/icons/ICONNAME.svg
 * ex: icon-fa-duotone-user will be:
 * ./images/core/fa/duotone/icons/user.svg
 * and will add it as object in to uikit-icons.ts as 'icon-fa-duotone-user': 'svg'
 *
 * For changing defual style of component icons we must change the default
 * const defaultIconStyle in this file and we will replace all icon in our
 * compoments that named like this: icon-default-user
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
 * Component icons is dynamic so we must import icons name here
 * ex: default-accordion-cehvron || default-accordion-plus
 *
 * So if we change the defaultIconStyle value it will change
 * all icons to defined style.
 *
 * Main components like accordion that contains icons has icon props
 * that we can define our icon.
 *
 * For dynamic process of importing svg files we can't find component icons and
 * dynamic icons that defined like: ${xIcon}-icon so when we use a dynamic icon name
 * we must add the name in dynamicIcons const.
 */

export type IconStyles =
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

export const defaultIconStyle: IconStyles = 'huge-bulk'

export const dynamicIcons = []
