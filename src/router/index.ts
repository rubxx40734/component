import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import FromPage from '@/views/FromPage.vue'
import RestfulPage from '@/views/RestfulPage.vue'
import JsPage from '@/views/JsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: 'default' },
    },
    {
      path: '/FromPage',
      name: 'fromPage',
      component: FromPage,
      meta: { layout: 'default' },
    },
    {
      path: '/RestfulPage',
      name: 'restfulPage',
      component: RestfulPage,
      meta: { layout: 'default' },
    },
    {
      path: '/JsPage',
      name: 'jsPage',
      component: JsPage,
      meta: { layout: 'default' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound,
      meta: { layout: 'blank' }
    }
  ]
})

export default router
