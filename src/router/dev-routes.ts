// These routes are defined only in development mode
// because the components and views in these routes should not be rendered in production mode.
import { RouteRecordRaw } from 'vue-router'

export default function devRoutes(): RouteRecordRaw[] {
  return [{ path: '/docs', component: () => import('@vd/index-docs.vue') }]
}
