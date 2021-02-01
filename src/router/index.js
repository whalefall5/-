import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use

const showblog = () =>import  ('./../components/showblogs')
const addblog = () =>import ('./../components/addblog')
const home = () =>import('./../components/home')
const blog = () =>import('./../components/blog')

Vue.use(mavonEditor)
Vue.use(VueRouter)

  

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    { path:'',
    redirect: '/home'},
    { path: '/home', component: home },
  { path: '/showblog', component: showblog },
  { path: '/add', component: addblog },
  { path: '/blog',name:'blog', component: blog }
 ]
})

export default router

=======
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
>>>>>>> 88e11add22a0a7ca5cd86d4a14f6381e13ba5b98
