import { createRouter, createWebHistory } from 'vue-router'
import { authStore } from '@/pinia-provider'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/views/LoginView.vue'),
      meta: { requiresAuth: false }
    },
    {
      name: 'Register',
      path: '/register',
      component: () => import('@/views/RegisterView.vue'),
      meta: { requiresAuth: false }
    },
    {
      name: 'Home',
      path: '/',
      component: () => import('@/views/HomeView.vue'),
      meta: { requiresAuth: true }
    },
    {
      name: 'profile',
      path: '/profile',
      component: () => import('@/views/ProfileView.vue'),
      meta: { requiresAuth: true }
    },
    {
      name: 'verify-email',
      path: '/verify-email/:email',
      component: () => import('@/views/VerifyemailView.vue'),
      meta: { requiresAuth: false }
    },
    {
      name: 'reset-password',
      path: '/reset-password',
      component: () => import('@/views/ResetpasswordView.vue')
    },
    {
      name: 'settings',
      path: '/settings',
      component: () => import('@/views/SettingView.vue')
    },
    /* {
      name: 'policies',
      path: '/policies',
      component: () => import('@/views/PoliciesView.vue'),
      meta: { requiresAuth: false }
    },*/
    {
      name: 'NotFound',
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { requiresAuth: false }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (localStorage.getItem('token')) {
    if (to.name === 'Login' || to.name === 'Register') {
      next('/')
    } else if (to.meta.requiresAuth) {
      if (authStore.isLoggedIn) {
        next()
      } else {
        next('/login')
      }
    } else {
      next()
    }
  } else if (to.meta.requiresAuth) {
    next('/login')
  } else {
    next()
  }
})

export default router
