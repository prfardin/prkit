/**
 * we use this file for classes of the components
 * we send the props to xClassObject function, and
 * it will return class that defined from props
 * we use this way to make our code clean
 * and reusable class for other semi-like components
 * we also define interface for each component classes
 */

/**
 * accordion class generator
 * get accordion props and return all available CSS classes
 */

export interface AccordionClassType {
  variant?: 'default' | 'hover' | 'line'
}

const accordionClassMap = {
  default: 'uk-accordion-default',
  hover: 'pr-accordion-hover',
  line: 'pr-accordion-line',
} as const

export function accordionClasses(props: AccordionClassType) {
  return accordionClassMap[props.variant!]
}
