import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
// import About from '../views/About.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home' // 强制跳转
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
