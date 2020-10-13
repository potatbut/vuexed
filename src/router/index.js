import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category1',
    name: 'Category1',
    component: () => import('../views/Category1.vue')
  },
  {
    path: '/category2',
    name: 'Category2',
    component: () => import('../views/Category2.vue')
  },
  {
    path: '/Bag',
    name: 'Bag',
    component: () => import('../views/Bag.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
