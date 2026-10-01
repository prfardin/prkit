// These routes are defined only in development mode
// because the components and views in these routes should not be rendered in production mode.
import type { RouteRecordRaw } from 'vue-router'
import { docLinks } from '@vd/doc-configs.ts'

export default function devRoutes(): RouteRecordRaw[] {
  return [
    {
      name: 'Docs',
      path: '/docs',
      component: () => import('@vd/doc-index.vue'),
      children: docLinks.map((name) => {
        return {
          name: name,
          path: `/docs/${name.toLowerCase()}`,
          component: () => import(`../views/docs/components/${name}.md`),
        }
      }),
    },
  ]
}
