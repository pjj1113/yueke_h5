import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pay',
    component: () => import(/* webpackChunkName: "about" */ '../views/pay'),
    meta: {
      title: "",
    },
  },
  {
    path: '/detail',
    name: 'pay-detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/pay/detail'),
    meta: {
      title: "",
    },
  },
  {
    path: '/pay/add',
    name: 'pay-add',
    component: () => import(/* webpackChunkName: "about" */ '../views/pay/add'),
    meta: {
      title: "",
    },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/user'),
    meta: {
      title: "",
    },
  },
  {
    path: '/succeed',
    name: 'succeed',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/succeed'),
    meta: {
      title: "奖品领取",
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/user')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
