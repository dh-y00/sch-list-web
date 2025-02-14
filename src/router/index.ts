import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ListView from '@/views/ListView.vue'
import DragAndDropVue from '@/views/DragAndDrop.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/:listId',
    name: 'list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ListView
  },
  {
    path: '/list/edit/drag/:listId',
    name: 'listDragAdnDrop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DragAndDropVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
