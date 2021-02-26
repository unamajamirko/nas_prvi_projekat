import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LogIn from '../components/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import PojedinacnaKategorija from '../components/PojedinacnaKategorija.vue'
import Proizvod from '../components/Proizvod.vue'
import Porudzbenica from '../components/Porudzbenica.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/SignUp',
    name:'SignUp',
    component: SignUp
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn

  },
  {
    path:'/PojedinacnaKategorija/:id',
    name: PojedinacnaKategorija,
    component:PojedinacnaKategorija
  },
  {
    path:'/Proizvod/:id',
    name: Proizvod,
    component:Proizvod
  },
  {
    path: '/Porudzbenica/:id',
    name: 'Porudzbenica',
    component: Porudzbenica

  },
 

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
