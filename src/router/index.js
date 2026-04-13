import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ForsalePage from '../pages/ForsalePage.vue'
import DayCharterPage from '../pages/DayCharterPage.vue'
import TermCharterPage from '../pages/TermCharterPage.vue'
import DockagePage from '../pages/DockagePage.vue'
import BlogPage from '../pages/BlogPage.vue'
import BlogDetailPage from '../pages/BlogDetailPage.vue'
import AboutUsPage from '../pages/AboutUsPage.vue'
import OurTeamPage from '../pages/OurTeamPage.vue'
import EventsPage from '../pages/EventsPage.vue'
import ContactUsPage from '../pages/ContactUsPage.vue'
import BrokerDetailPage from '../pages/BrokerDetailPage.vue'
import EventDetailPage from '../pages/EventDetailPage.vue'
import ListingDetailPage from '../pages/LIstingDetailPage.vue'

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
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUsPage,
    meta: { title: 'About Us - Luxury Yacht Brokers Fort Lauderdale & Miami' }
  },
  {
    path: '/our-team',
    name: 'OurTeam',
    component: OurTeamPage,
    meta: { title: 'Our Team - Luxury Yacht Brokers Fort Lauderdale & Miami' }
  },
  {
    path: '/events',
    name: 'Events',
    component: EventsPage,
    meta: { title: 'Events - Luxury Yacht Brokers Fort Lauderdale & Miami' }
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUsPage,
    meta: { title: 'Contact Us - Luxury Yacht Brokers Fort Lauderdale & Miami' }
  },
  {
    path: '/broker/:id',
    name: 'BrokerDetail',
    component: BrokerDetailPage,
    meta: { title: 'Broker Detail - Luxury Yacht Brokers Fort Lauderdale & Miami' }
  },
  {
    path: '/event-detail',
    name: 'EventDetail',
    component: EventDetailPage,
    meta: { title: 'Event Detail - Luxury Yacht Brokers Fort Lauderdale & Miami' }
  },
  {
    path: '/listing-detail/:slug',
    name: 'ListingDetail',
    component: ListingDetailPage,
    meta: { title: 'Listing Detail - Luxury Yacht Brokers Fort Lauderdale & Miami' }
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