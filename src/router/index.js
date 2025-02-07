import { createRouter, createWebHistory } from 'vue-router'
import ListView from '@/views/ListView.vue'
const routes = [
  {
    path: '/',
    name: 'list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
