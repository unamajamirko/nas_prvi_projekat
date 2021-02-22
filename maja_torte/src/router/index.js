import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LogIn from '../components/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import PojedinacnaKategorija from '../components/PojedinacnaKategorija.vue'
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
  /* {
    path: '/kids/singleLesson/:id',
    name: 'KidsLesson',
    component: KidsLesson
  }, */

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
