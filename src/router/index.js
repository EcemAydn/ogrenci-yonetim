import { createRouter, createWebHistory } from 'vue-router'
import Liste from '../views/Listele.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ListeSayfasi',
      component: Liste
    },
    {
      path: '/olustur',
      name: 'OlusturSayfasi',
      component: () => import('../views/Olustur.vue')
    },
    {
      path: '/guncelle/:id',
      name: 'GuncellemeSayfasi',
      component: () => import('../views/Guncelle.vue')
    },
    {
      path: '/guncelle/',
      name: 'ListeleYönlendirme',
      component: () => import('../views/Guncelle.vue')
    },
  ]
})

export default router
