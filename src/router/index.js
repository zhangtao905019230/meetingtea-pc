import Vue from 'vue'
import Router from 'vue-router'

import home from './../view/home'
import login from './../view/login'
import main from './../view/main'

import teaCultureMuseum from './../view/tea-culture-museum'
import other from './../view/other'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: "/main/home"
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children:[
        {
          path: 'home',
          name:'home',
          component: home
        },
        {
          path: 'teaCultureMuseum',
          name: 'teaCultureMuseum',
          component: teaCultureMuseum
        },
        {
          path: 'other',
          name:'other',
          component: other
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ],
  // mode: 'history'
})

export default router
