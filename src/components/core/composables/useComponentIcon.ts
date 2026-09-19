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
