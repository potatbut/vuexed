import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
    path: '/Cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
