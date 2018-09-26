import Vue from 'vue'
import Router from 'vue-router'

import home from './../view/home'
import login from './../view/login'
import main from './../view/main'
import other from './../view/other'

Vue.use(Router)

export default new Router({
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
