import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import { isDev } from '@u/util'
import devRoutes from '@/router/dev-routes'

// we use dynamic import
// which lazy-loaded when the route is visited.
const routes: RouteRecordRaw[] = []

// Prevent rendering of documentation routes and components in production mode.
isDev() && routes.push(...devRoutes())

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'uk-active',
    linkExactActiveClass: 'uk-active',
    routes
})

export default router