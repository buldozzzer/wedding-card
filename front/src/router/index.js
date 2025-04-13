import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/katya-and-nastya',
      name: 'katya-nastya',
      component: () => import('../views/KatyaAndNastyaVirew.vue'),
    },
    {
      path: '/bryukhovy',
      name: 'bryukhovy',
      component: () => import('../views/BryukhovsView.vue')
    },
  ],
})

export default router
