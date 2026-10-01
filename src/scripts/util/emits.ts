/**
 * Emits
 * ========================================================================
 *
 * We are helping from UIKit to create components in vue
 * so for main component that'ts every UI Framework must have
 * we're get help from UIKit to defined them.
 *
 * TODO:
 * We must find a way to use emits name once, but we are duplicating them
 * like: accordionEmits = ['beforeshow', 'show', ...]
 * interface AccordionEmitsType {e: 'beforeshow', e: 'show', ....}
 *
 * So when we use a component like: accordion (base from UIKit) it has
 * some emits like: show, beforeshow, beforehide, hide and ...
 * so we have base structure for all component (not those just use CSS classes, those
 * must define with uk- prefix in HTML element tags like <ul uk-accordion>)
 * and heres the emits help us we define component emits here
 * and import them into propose component and pass them to
 * composable component (useComponentEmit) and then we can use
 * emit when Event happened at component action
 *
 * We're using composable component for emits cause
 * its much more lean for production build, and component will be clean
 *
 * For define emits we declare emitted events using pure type annotations
 * refer to: https://vuejs.org/guide/typescript/composition-api.html#typing-component-emits
 *
 * We also define type for each component Emits
 *
 * Structure:
 * const xEmits = [UIKitComponentEvents1, UIKitComponentEvents2, ....]
 * interface xEmitsType { (e: UIKitComponentEvents1, event: Event, ...args, e: UIKitComponentEvents2, event: Event, ...args) }
 *
 * ...args: is how many arguments we will define for emits, for example:
 * we will always pass value in emits for accordion components cause
 * component have defineModel
 *
 * then we will use it in components like:
 * const emit = defineEmits<xEmitsType>()
 * useComponentEmit(el, handler, xEmits)
 *
 * ========================================================================
 */


/**
 * Accordion Component Emits
 * emits: beforeshow, show, shown, beforehide, hide, hidden
 * ======================================================================== */

export const accordionEmits = [
  'beforeshow',
  'show',
  'shown',
  'beforehide',
  'hide',
  'hidden',
] as const

export interface AccordionEmitsType {
  (e: 'beforeshow', event: Event, value: unknown): void
  (e: 'show', event: Event, value: unknown): void
  (e: 'shown', event: Event, value: unknown): void
  (e: 'beforehide', event: Event, value: unknown): void
  (e: 'hide', event: Event, value: unknown): void
  (e: 'hidden', event: Event, value: unknown): void
}
