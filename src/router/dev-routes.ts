// These routes are defined only in development mode
// because the components and views in these routes should not be rendered in production mode.
import type { RouteRecordRaw } from 'vue-router'

export default function devRoutes(): RouteRecordRaw[] {
  return [
    {
      name: 'Docs',
      path: '/docs',
      component: () => import('@vd/index-docs.vue'),
      children: [
        { name: 'Accordion', path: '/docs/accordion', component: () => import('@vd/compoents/accordion-doc.vue') },
        { name: 'Icon', path: '/docs/icon', component: () => import('@vd/compoents/icon-doc.vue') }
      ]
    }
  ]
}
