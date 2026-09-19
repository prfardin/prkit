/**
 * The CSS Class Generator for main and child components
 *
 * We use this file for classes of the main and child components
 * we return main CSS class from xClassObject function to
 * main component, its recive props and return classes
 *
 * we also define xClassTypes here and extend them with
 * xPropsType in props.ts and define props as pure type annotations
 * refere to: https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
 *
 * we use xClassMap for each class style
 * The reason for using xClassMap is more lean for production
 * build instead of using all map in componentClasses
 * so we define each style in a xClassMap and use it in
 * xClass Function
 *
 * It's also make our components clean and make classes
 * reusable for other semi-like components
 *
 * We also define type for each component classes
 *
 * The CSS class its: UIKit CSS classes that defined for
 * compnents + PrKit CSS classes (all defined in ./src/less/default/COMPONENTNAME|*.less)
 *
 * Structure:
 * interface xClassType { class1: value1 | value2, class2: value1, value2 }
 * const xClass1Map = { value1: 'CSS class', value2: 'CSS class' }
 * const xClass2Map = { ...value1: 'CSS class', value2: 'CSS class' }
 * function xClasses(props) { return [xClass1Map[props.class], xClass2Map[props.class2]] }
 * .
 */


/**
 * Accordion Class Generator
 * Classes: variant
 * Child Components: accordion-title | accordion-content
 * ======================================================================== */

export interface AccordionClassType {
  variant?: 'default' | 'hover' | 'line'
}

const accordionVariantMap = {
  default: 'uk-accordion-default',
  hover: 'pr-accordion-hover',
  line: 'pr-accordion-line',
} as const

export function accordionClasses(props: AccordionClassType) {
  return accordionVariantMap[props.variant!]
}
