import Vue from 'vue'
import VueRouter from 'vue-router'
import container from '../components/container'
import classify from '../components/classify'
import detail from '../components/detail'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'container',
    component: container
  },
  {
    path: '/classify',
    name: 'classify',
    component: classify
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
