import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ForsalePage from '../pages/ForsalePage.vue'
import DayCharterPage from '../pages/DayCharterPage.vue'
import TermCharterPage from '../pages/TermCharterPage.vue'
import DockagePage from '../pages/DockagePage.vue'
import BlogPage from '../pages/BlogPage.vue'
import BlogDetailPage from '../pages/BlogDetailPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { title: 'High Seas Yachting - Luxury Yacht Brokers Fort Lauderdale & Miami' }
  },
  {
    path: '/forsale',
    name: 'Forsale',
    component: ForsalePage,
    meta: { title: 'For Sale - Luxury Yacht Brokers Fort Lauderdale & Miami' }
  },
  {
    path: '/day-charter',
    name: 'DayCharter',
    component: DayCharterPage,
    meta: { title: 'Day Charter - Luxury Yacht Brokers Fort Lauderdale & Miami' }
  },
  {
    path: '/term-charter',
    name: 'TermCharter',
    component: TermCharterPage,
    meta: { title: 'Term Charter - Luxury Yacht Brokers Fort Lauderdale & Miami' }
  },
  {
    path: '/dockage',
    name: 'Dockage',
    component: DockagePage,
    meta: { title: 'Dockage - Luxury Yacht Brokers Fort Lauderdale & Miami' }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
    meta: { title: 'Blog - Luxury Yacht Brokers Fort Lauderdale & Miami' }
  },
  {
    path: '/blog-detail',
    name: 'BlogDetail',
    component: BlogDetailPage,
    meta: { title: 'Blog Detail - Luxury Yacht Brokers Fort Lauderdale & Miami' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'High Seas Yachting'
  next()
})

export default router