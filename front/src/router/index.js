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
      path: '/valeriy-and-irina',
      name: 'bryukhovy',
      component: () => import('../views/ValeriyAndIrina.vue')
    },
    {
      path: '/alexander-and-natalya',
      name: 'alexander-and-natalya',
      component: () => import('../views/AlexandrAndNatalya.vue')
    },
  ],
})

export default router
