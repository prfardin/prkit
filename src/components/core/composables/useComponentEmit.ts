/**
 * Component Emit Composable
 * ========================================================================
 *
 * For default UIKit emits we define useComponentEmit composable.
 * nearly all UIKit JavaScript Component expose events that are emitted when
 * their state changes.
 * for example accordion comopnent includes: beforeshow show, shown,
 * beforehide, hide, hidden. if we want to define these events in compnent itself
 * This would create unnecessary duplication and make the component structure harder
 * to maintain. so if we want to prevent duplication and keep our component
 * clean we useComponentEmit.
 *
 * useComponentEmit define emit for each event of UIKit JavaScript Component and
 * remove it when component unmounted. the first step of precess is we declare emits
 * like:
 * export interface AccordionEmitsType {
 *   (e: 'beforeshow', event: Event, value: unknown): void
 *   (e: 'show', event: Event, value: unknown): void
 *   ...
 * }
 * then define it in component:
 * const emit = defineEmits<accordionEmitsType>()
 * then add handler in compnent (we add it cuase handler for most of compnents is diffrent):
 * const handler = (event: Event) => { emit(event.type as any, event, selected.value) }
 * at last call useComponentEmit:
 * useComponentEmit(el, accordionEmits, emitHandler)
 *
 * TODO:
 * maybe handler structure for most component be like:
 * handler = (event: Event) => { emit(event.type as any, event) } without any extra arguments
 * so After seeing duplication of event handler we need to define defual handler
 * to prevent of calling everytime it in the component (before adding it we need to check
 * production build and preformance)
 *
 */

import type { RefElement } from '@u/types.ts'
import { onBeforeUnmount, onMounted, type Ref } from 'vue'

export function useComponentEmit(
  el: Readonly<Ref<RefElement>>,
  componentEmits: readonly string[],
  handler: EventListener,
) {
  onMounted(() => {
    componentEmits.forEach((eventName) => {
      el.value!.addEventListener(eventName, handler)
    })
  })

  onBeforeUnmount(() => {
    componentEmits.forEach((eventName) => {
      el.value!.removeEventListener(eventName, handler)
    })
  })
}
