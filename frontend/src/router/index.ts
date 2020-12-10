import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Reservations from '../views/Reservations.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: 'Reservations',
  },
  {
    path: '/Reservations',
    name: 'Reservations',
    component: Reservations
  },
  {
    path: '/Availability',
    name: 'Availability',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Availability.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
