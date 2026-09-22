/**
 * Icon Composable
 * ========================================================================
 *
 * Some of UIKit/PrKit component contains icons in itself. for rendering the icon
 * inside component we are using useComposableIcon. its keep our code clean and avoid duplication.
 *
 * We can use PrIcon component for this, but we are not because of
 * vue suggestion: Avoid Unnecessary Component Abstractions refer to:
 * https://vuejs.org/guide/best-practices/performance.html#avoid-unnecessary-component-abstractions
 *
 * The proccess is we define HTML elemt to icon render insde it.
 * like: <span ref="icon" />
 * then we define component icon names inside util.ts for
 * like: const accordionIconMap = {
 *   default: 'component-default-accordion-default',
 *   plus: 'component-default-accordion-plus'
 * } as const
 * then we must define icon props for component:
 * like: type accordionIconType = keyof typeof accordionIconMap | 'none' | (string & {})
 * also for condition icon compile and access the full name of icon we define function that return icon name
 * like: export function getAccordionIconName(icon: AccordionIconType) {
 *   if (icon === 'none') {
 *     return false
 *   }
 *   return icon in accordionIconMap ? accordionIconMap[icon as keyof typeof accordionIconMap] : icon
 * }
 * then in component props: interface AccordionPropsType { icon?: AccordionIconType, iconRatio?: number }
 * at last we need to call useComponentIcon in compnoent:
 * like: const { icon, iconName } = useComponentIcon(props, getAccordionIconName)
 * now we can call icon in props and use specific types:
 * <PrAccordion icon="none | plus | icon-fa-regular-chevron-down" icon-ratio="1.5" />
 *
 * size of rendered icon is 24 * 24 so icon-ratio value will be Multiplied to it.
 *
 * Structure:
 * Pr-x: <span ref="icon" />
 * util.ts: const xIconMap = { icon1: iconName1, ... } as const
 * util.ts: type xIconType = keyof typeof xIconMap | ...
 * util.ts: export function getXIconName(icon: xIconType) {
 *  // ...conditions
 *   return icon in xIconMap ? xIconMap[icon as keyof typeof xIconMap] : icon
 * }
 * props.ts: interface xPropsType { icon?: xIconType, iconRatio?: number }
 * const { icon, iconName } = useComponentIcon(props, getXIconName)
 * <Pr-x icon="icon1|..." icon-ratio="number(* 24)" />
 *
 * ========================================================================
 */

import { onMounted, unref, useTemplateRef } from 'vue'
import type { ComponentIconProps, IconNameResolver, RefElement } from '@u/types.ts'
import { devComputed, devPropsWatch, isDev } from '@u/env.ts'
import { setIcon } from '@u/util.ts'

export function useComponentIcon<T extends string>(
  props: ComponentIconProps<T>,
  resolveIconName?: IconNameResolver<T>,
) {
  const icon = useTemplateRef<RefElement>('icon')

  const iconName = devComputed(() =>
    resolveIconName ? resolveIconName(props.icon as T) : props.icon || false,
  )

  function updateIcon() {
    const name = unref(iconName)

    if (name) {
      setIcon(icon.value, {
        icon: name,
        ratio: props.iconRatio,
      })
    }
  }

  onMounted(() => {
    updateIcon()

    if (isDev) {
      devPropsWatch(
        props,
        () => {
          updateIcon()
        },
        { only: ['icon', 'iconRatio'] },
      )
    }
  })

  return {
    icon,
    iconName,
  }
}
