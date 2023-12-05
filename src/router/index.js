import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContactIndex from '../pages/ContactIndex.vue'
import ContactDetails from '../pages/ContactDetails.vue'
import ContactEdit from '../pages/ContactEdit.vue'
import Chart from '../pages/Chart.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'ContactIndex',
      component: ContactIndex,
    },
    {
      path: '/contact/:_id',
      name: 'ContactDetails',
      component: ContactDetails,
    },
    {
      path: '/contact/edit/:_id?',
      name: 'ContactEdit',
      component: ContactEdit,
    },
    {
      path: '/stats',
      name: 'Chart',
      component: Chart,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/About.vue')
    }
  ]
})

export default router
