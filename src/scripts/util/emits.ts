/**
 * we use type-based emit for most components
 * this file also created for this reason
 * vue support export type-based emit,
 * so we will use this types as exported emits types for components
 */
import type { RefElement } from '@u/util.ts'

export const accordionEmits = ['beforeshow', 'show', 'shown', 'beforehide', 'hide', 'hidden'] as const

export interface AccordionEmitsType {
  (e: 'beforeshow', event: Event, value: unknown): void
  (e: 'show', event: Event, value: unknown): void
  (e: 'shown', event: Event, value: unknown): void
  (e: 'beforehide', event: Event, value: unknown): void
  (e: 'hide', event: Event, value: unknown): void
  (e: 'hidden', event: Event, value: unknown): void
}

export function emitHandler(emit: (...args: any[]) => void) {
  return (event: Event) => {
    emit(event.type, event)
  }
}

export function addComponentEmit(
  el: RefElement,
  handler: EventListener,
  componentEmits: readonly string[],
) {
  componentEmits.forEach((eventName) => {
    el.addEventListener(eventName, handler)
  })
}

export function removeComponentEmit(
  el: RefElement,
  componentEmits: readonly string[],
  handler: EventListener,
) {
  componentEmits.forEach((eventName) => {
    el.removeEventListener(eventName, handler)
  })
}
