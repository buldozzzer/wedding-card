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
      component: () => import('../views/ValeriyAndIrinaView.vue')
    },
    {
      path: '/alexander-and-natalya',
      name: 'alexander-and-natalya',
      component: () => import('../views/AlexandrAndNatalya.vue')
    },
    {
      path: '/vitaliy-and-sofia',
      name: 'vitaliy-and-sofia',
      component: () => import('../views/VitaliyAndSofiaView.vue')
    },
    {
      path: '/maxim-and-tatyana',
      name: 'maxim-and-tatyana',
      component: () => import('../views/MaximAndTatyanaView.vue')
    },
  ],
})

export default router
