<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { isDev, devComputed, devPropsWatch } from '@u/env.ts'
import type { RefElement } from '@u/types.ts'
import { type AccordionPropsType, accordionDefaults } from '@u/props'
import { type AccordionEmitsType, accordionEmits } from '@u/emits.ts'
import { setAccordion, getAccordionIconName } from '@u/util'
import { useComponentEmit } from '@cc/useComponentEmit.ts'
import { useComponentIcon } from '@cc/useComponentIcon.ts'
import { accordionClasses } from '@u/classes'

/**
 * PrAccordion
 * Create a list of items that can be shown individually by clicking an item's header.
 * with default (UIKit), line and hover style, default (UIKit), chevron, plus and
 * circle icon styles, and an item disabling property. can render with array list and
 * child slot. also can compile as ul-li tang or div-div tag.
 * ========================================================================
 *
 * The PrKit component(here as accordion) structure is based on UIKit component structure + some defined
 * style/ide from PrKit to make accordion component more usable. we explain the component and styles and
 * other property in the first comment of component.
 *
 * We follow this structture(here as accordion) for most component.
 *
 * If components wich has JavaScript UIKit Component like Accordion:
 * We define setAccordion(setX) and useComponentEmit(with const accordionEmits in @u/emits).
 *
 * For UIKit JavaScript Component:
 * we need to define RefElement for the main element of component.
 *
 * For component wich contains icon:
 * we define getAccordionIconName(getXIconName) and useComponentIcon.
 *
 * For component that has some of UIKit classes + some of PrKit classes:
 * we use accordionClasses(xClasses).
 *
 * For defining props:
 * we use AccordionPropsType(xPropsType) and accordionDefaults(xDefaults).
 *
 * For just run a code in development mode:
 * we use isDev, it will be treeshaking bye vite and will remove in production build.
 *
 * For improving the performance in production build:
 * we use devComputed so values are reactive in development but remain non-reactive
 * in production build (ex: classes, icon name and icon ratio).
 *
 * For improving development experience and development-time behavior:
 * we use devPropsWatch to watch some props change in development but
 * not in production build. must be sournded with if(isDev).
 *
 * So final import for components is like:
 * isDev: imported when The component include section of code that will be run just in development
 * mode and will be treeshaking in production build.
 *
 * devComputed: imported when a value should be reactive in development mode but non-reactive
 * in the production build.
 *
 * devPropsWatch: imported when props will watch changes in development mode but not in production
 * build and for treeshaking must be surrounded with if(isDev). Do not use devPropsWatch for
 * behavior that is required in production.
 *
 * RefElement: imported when the component needs access to its root element, especially for
 * UIKit JavaScript Components.
 *
 * AccordionPropsType(xPropsType): imported when the component contains props.
 *
 * accordionDefaults(xDefaults): imported when the component has default props.
 *
 * setAccordion(setX): imported when the component contains UIKit JavaScript Component.
 *
 * useComponentEmit|AccordionEmitsType(xEmitsType)|accordionEmits(xEmits):
 * useComponentEmit imported when UIKit JavaScript events need to be forwarded as
 * Vue emits, AccordionEmitsType(xEmitsType) defines the TypeScript signatures for those Vue
 * emits and accordionEmits(xEmits) contains the runtime list of UIKit JavaScript events.
 *
 * useComponentIcon: imported when component contains icon.
 *
 * getAccordionIconName(getXIconName): imported when component has multiple style for icon or
 * conditional icon compile.
 *
 * accordionClasses(xClasses): imported when component contains multiple styles and other things
 * that connected to CSS class names.
 *
 * We try our best to get the best performance and must lean production build and keep our code
 * clean and reusable. our goal is also keep components to have the best performance and lean
 * production build.
 *
 * ========================================================================
 * */

/**
 * Props:
 * UIKit JavaScript Component props:
 * active?: number
 * animation?: UIkitBoolean
 * collapsible?: UIkitBoolean
 * content?: string
 * duration?: number
 * multiple?: UIkitBoolean
 * targets?: string
 * toggle?: string
 * transition?: string
 * offset?: number
 *
 * Icon Props:
 * icon: default | plus | chevron | circle | none | string(CustomIconName | ex: icon-fa-duotone-plus)
 * iconRatio: number
 * strokeRatio: number
 *
 * Class Props:
 * variant?: 'default' | 'hover' | 'line'
 *
 * Component Props:
 * - if we want access the component refElement from parent we use refElement
 * - most usage is when we have UIKit JavaScript Component, and we want to access
 * - the element from parent to use UIKit methods of component.
 * refElement?: RefElementCallback
 * tag?: 'ul' | 'div'
 * list?: [value?: unknown, title: string, content: string, disabled?: boolean]
 *
 * Defaults:
 * tag: 'ul'
 * variant: 'default'
 * icon: 'default'
 * iconRatio: 0.7
 *
 * ========================================================================
 *
 * We define props for components with this structure:
 * const props = withDefaults(defineProps<xPropsType>(), xDefaults)
 *
 * xPropsType contains:
 * 1. UIKit JavaScript Component Props (if exists). structure: UIKitxOptions
 * 2. CSS Classes of components (UIKit classes and PrKit Classes for that component). structure: xClassType
 * 3. Component-specific props used for conditional rendering and other component logic. structure:
 * interface xPropsType extends
 *   UIkitxOptions, xClassType {
 *   ...component-specific-props
 * }
 *
 * xPropsType will extend the types from UIKitxOptions and xClassType. It should also avoid type
 * duplication when types are shared. for example AccordionPropsType also extend
 * AccordionTitlePropsType becuase it is used by PrAccordionTiyle.vue component props.
 *
 * For components that use UIKit JavaScript Options in their script or template, for accessing
 * the default value of UIKit Component Option we need to define it in xDefaults. for
 * example: accordion need to access collapsible value in the template like:
 * ...(selected = selected === item.value && collapsible ? null : item.value) so we need to
 * define collapse default value in accordionDefaults to access its value in accordion script
 * or template. it will always return undefined if we not define default value and will get
 * default value from UIKit when we want to set the UIKit JavaScript Component with setX (setAccordion).
 *
 * For components that not contains defaults we will not define xDefaults and structre is:
 * const props = defineProps<xPropsType>()
 *
 * ========================================================================
 */

const props = withDefaults(defineProps<AccordionPropsType>(), accordionDefaults)

/**
 * Component Ref and Props Ref Element:
 * el, props.refElement
 * ========================================================================
 *
 * We define component ref element in two-way. first if we want to access the component Element
 * from parent and second if it's not important to access the component Element from parent (we can still
 * access it but with vue way not with our way).
 *
 * For first way we use If we want to access the component Element from parent we must define
 * function setElement and its props refElement. most usage is when we have UIKit JavaScript
 * Component, and we want to access the element from parent to use UIKit methods of component.
 * the structre is:
 * const el = ref<RefElement>(null)
 * function setElement(value: RefElement) {
 *   el.value = value
 *   props.refElement?.(value)
 * }
 * <template><div|component :ref="setElement">...</tamplate>
 *
 * For second way if it's not too important to access the component element from parent we will keep
 * our component clean and more lean, and we will not define prop refElement and function setElement
 * the structre is:
 * import { useTemplateRef } from 'vue'
 * const el = useTemplateRef<RefElement>('el')
 * <template><div|component ref="el"></tamplate>
 *
 * ========================================================================
 */

const el = ref<RefElement>(null)

function setElement(value: RefElement) {
  el.value = value
  props.refElement?.(value)
}

/**
 * Emits:
 * emits: beforeshow | show | shown | beforehide | hide | hidden
 * types: (e: 'emit', event: Event, value: unknown): void
 * ========================================================================
 *
 * We Define emits for components with this structure:
 * const emit = defineEmits<xEmitsType>()
 * const emitHandler = (event: Event) => {
 *   emit(event.type as any, event, ...if any other orgument defined)
 * }
 * useComponentEmit(el, xEmits, emitHandler)
 *
 * xEmits contains all UIKit JavaScript Component events that defined as vue emits type in emits.ts
 * for example accordionEmits is like:
 * const accordionEmits = [ 'beforeshow', 'show', 'shown', 'beforehide', 'hide', 'hidden' ] as const
 *
 * xEmitsType is the vue emits defined as pure type annotations. for exmaple:
 * interface AccordionEmitsType {
 *   (e: 'beforeshow', event: Event, value: unknown): void
 *   (e: 'show', event: Event, value: unknown): void
 *   (e: 'shown', event: Event, value: unknown): void
 *   (e: 'beforehide', event: Event, value: unknown): void
 *   (e: 'hide', event: Event, value: unknown): void
 *   (e: 'hidden', event: Event, value: unknown): void
 * }
 *
 * emitHandler is same for most components but if emits pass additional argumanet
 * we must add it to emit handled also. for exmaple accordion also pass addtional arg in
 * emit:
 * const emitHandler = (event: Event) => {
 *   emit(event.type as any, event, ...adintional arguments goes here)
 * }
 *
 * For components that not contains UIKit JavaScript Compnoents we will not use this structure,
 * and we will use the simple way of vue for defining emit. most time we will not use emit if
 * there is no event.
 *
 * ========================================================================
 */

const emit = defineEmits<AccordionEmitsType>()

const emitHandler = (event: Event) => {
  emit(event.type as never, event, selected.value)
}

useComponentEmit(el, accordionEmits, emitHandler)

/**
 * CSS Classes:
 * uk-accordion-default | pr-accordion-hover | pr-accordion-line
 * ========================================================================
 *
 * We Define CSS classes for components if they have some with this structure:
 * const xClass = devComputed(() => xClasses(props))
 * <div|component :class="xClass">....</div|component>
 *
 * If component contains multiple appearance/style/mode that is connected to CSS classes like
 * accordion variant (default: uk-accordion-default | hover: pr-accordion-hover | line: pr-accordion-line)
 * for must lean production build and best performance we will use this way.
 *
 * The xClasses function receive props that point to xClassType and for each of xClassType key we
 * must define x[xClassTypeKey]Map. for example accordionClassType is like:
 * interface AccordionClassType {
 *   variant?: 'default' | 'hover' | 'line'
 * }
 *
 * const accordionVariantMap = {
 *   default: 'uk-accordion-default',
 *   hover: 'pr-accordion-hover',
 *   line: 'pr-accordion-line',
 * } as const
 *
 * function accordionClasses(props: AccordionClassType) {
 *   return accordionVariantMap[props.variant!]
 * }
 *
 * If component contains mutle xClassTypeKey the structure for component in classes.ts will be:
 * interface xClassType {
 *   class1?: value1 | value2
 *   class2?: value1 | value2
 *   ...
 * }
 *
 * const xClass1Map = {
 *   value1: 'css-class-1',
 *   value2: 'css-class-2',
 *   ...
 * } as const
 *
 * xClass2Map = {
 *   value1: 'css-class-1',
 *   value2: 'css-class-2',
 *   ...
 * } as const
 *
 * function xClasses(props: xClassType) {
 *   return [
 *     xClass1Map[props.class1!],
 *     xClass2Map[props.class2!],
 *     ...
 *   ]
 * }
 *
 * We also use devComputed because we want props that converts to class name just be reactive in
 * development mod, and it will be static at production build.
 *
 * xPropsType extends xClassType so class-related props are available directly through props.
 *
 * If there is no classes for component we will not use this section for component.
 *
 * ========================================================================
 */

const accordionClass = devComputed(() => accordionClasses(props))

/**
 * Icons:
 * default | plus | chevron | circle | none | string(CustomIconName | ex: icon-fa-duotone-plus)
 * ========================================================================
 *
 * We Define icons for components with this structure:
 * const { iconName } = useComponentIcon(props, getXIconName)
 * <span v-if="iconName" ref="icon" />
 *
 * useComponentIcon will recive 2 argument:
 * 1. props: it will use icon, iconRatio and strokeRatio defined in props to define props for icon
 * render function.
 *
 * 2. getXIconName: its condtional rendering for structure of icon name. sometimes needed becuase
 * we want to define our icon style for component, and sometimes we just pass the props default
 * icon name or props defined icon name. if we have style or condition rendering icon name we need
 * to define getXIconName. for example, we define icon type/style for accordion component so the
 * structre of getXIconName is like:
 * export const accordionIconMap = {
 *   default: 'component-default-accordion-default',
 *   plus: 'component-default-accordion-plus',
 *   chevron: 'component-default-accordion-chevron',
 *   circle: 'component-default-accordion-circle',
 * } as const
 * export type AccordionIconType = keyof typeof accordionIconMap | 'none' | (string & {})
 * export function getAccordionIconName(icon: AccordionIconType) {
 *   if (icon === 'none') {
 *     return false
 *   }
 *
 *   return icon in accordionIconMap ? accordionIconMap[icon as keyof typeof accordionIconMap] : icon
 * }
 * most component will follow the same role as getAccordionIconName if they have multiple icon
 * style/type or conditional icon render.
 *
 * if they dosnt have multiple icon style/type or conditional icon rendering they will use
 * this structure (best for performance - Use the direct resolver for simple icons):
 * const xIconName = () => props.icon
 * const { iconName } = useComponentIcon(props, xIconName)
 * <span v-if="iconName" ref="icon" />
 *
 * Use getXIconName only when the component needs icon mapping or conditional icon resolution.
 *
 * If component contain icons we use the one of the structre above. otherwise, this section
 * is not needed.
 *
 * ========================================================================
 */

const { iconName } = useComponentIcon(props, getAccordionIconName)

/**
 * Component-specific Logic:
 * itemTag: For set component main and child tag.
 * selected/getActive(): if accordion use array list to render items set selected
 * value of item onClick.
 * setAccordion(): UIKit JavaScript Component
 * devPropsWatch(): watch props change and update the JavaScript Component and icon changes
 * ========================================================================
 *
 * For UIKit JavaScript Components, initialize the component in onMounted:
 * setX(el.value, props, ...additional-args)
 *
 * The setX is function wich defined in util.js and will render UIKit JavaScript component
 * into element (like UIKit HTML attribute uk-x).
 *
 * The structure of setX function is:
 * export function setX(el: RefElement, options: xPropsType, ...additional-args) {
 *   return UIkit.x(el!, { ...omitUndefined(options), ...additional-args })
 * }
 * The omitUndefined will remove undefined value to not pass to the UIKit JavaScript Component
 * function so only explicitly provided options are forwarded to UIKit JavaScript Component.
 *
 * We use devPropsWatch to watch props change and recompile the UIKit JavaScript Component.
 * the structure of devPropsWatch is:
 * if (isDev) {
 *   devPropsWatch(
 *     props,
 *     () => {
 *       setX(el.value, props, ...additional-args)
 *     },
 *     { exclude: [...do not recompile component when these items changed] },
 *     { only: [...update component when just these items changed] },
 *   )
 * }
 * Why do we use devPropsWatch? Some prop changes, such as the active accordion item, are not
 * automatically synchronized with the initialized UIKit component, so we recompile the component
 * when those props change during development. it will just happend in development mode
 * (becuase of isDev) and we don't need it at production build.
 *
 * For most UIKit JavaScript Component we will use setX and devPropsWatch but for rest of them
 * we will prevent to using these methods.
 *
 * The remaining logic is component-specific and should not be treated as a reusable pattern for
 * other components.
 *
 * ========================================================================
 */

const itemTag = props.tag === 'ul' ? 'li' : 'div'

const selected = defineModel<unknown>()

function getActive() {
  return selected.value != null && props.list
    ? props.list.findIndex((item) => item.value == selected.value)
    : props.active
}

onMounted(() => {
  setAccordion(el.value, props, getActive())

  if (isDev) {
    devPropsWatch(
      props,
      () => {
        setAccordion(el.value, props, getActive())
      },
      { exclude: ['modelValue', 'refElement'] },
    )
  }
})
</script>

<template>
  <component :class="accordionClass" :is="tag" :ref="setElement">
    <template v-if="list">
      <template v-for="(item, key) in list" :key>
        <component :is="itemTag" :class="{ 'pr-accordion-item-disabled': item.disabled }">
          <a
            class="uk-accordion-title"
            href=""
            @click="
              !item.disabled &&
              (selected = selected === item.value && collapsible ? null : item.value)
            "
          >
            {{ item.title }}
            <span v-if="iconName" class="pr-accordion-icon uk-accordion-icon" ref="icon" />
          </a>
          <div class="uk-accordion-content">{{ item.content }}</div>
        </component>
      </template>
    </template>
    <slot v-else />
  </component>
</template>
