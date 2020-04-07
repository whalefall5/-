import Vue from 'vue'
import VueRouter from 'vue-router'
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

