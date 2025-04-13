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
      component: () => import('../views/KatyaAndNastyaView.vue'),
    },
    {
      path: '/valeriy-and-irina',
      name: 'bryukhovy',
      component: () => import('../views/ValeriyAndIrinaView.vue')
    },
    {
      path: '/alexander-and-natalya',
      name: 'alexander-and-natalya',
      component: () => import('../views/AlexandrAndNatalyaView.vue')
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
    {
      path: '/vladislav-and-valentina',
      name: 'vladislav-and-valentina',
      component: () => import('../views/VladislavAndValentina.vue')
    },
    {
      path: '/fedor-and-maria',
      name: 'fedor-and-maria',
      component: () => import('../views/FedorAndMariyaView.vue')
    },
    {
      path: '/dorogaya-anya',
      name: 'dorogaya-anya',
      component: () => import('../views/AnnaKhotnichukView.vue')
    },
  ],
})

export default router
