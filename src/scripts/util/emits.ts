/**
 * we use type-based emit for most components
 * this file also created for this reason
 * vue support export type-based emit,
 * so we will use this types as exported emits types for components
 */

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
