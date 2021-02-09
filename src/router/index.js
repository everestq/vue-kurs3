import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/new',
    name: 'new',
    component: () => import('@/views/New')
  },
  {
    path: '/tasks',
    name: 'tasks',
    alias: '/',
    component: () => import('@/views/Tasks')
  },
  {
    path: '/task/:taskId?',
    name: 'task',
    component: () => import('@/views/Task'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
