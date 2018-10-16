import Vue from 'vue'
import Router from 'vue-router'

import home from './../view/home'

import login from './../view/login'
import reg from './../view/register'
import main from './../view/main'
import productDetails from './../view/product-details'
import shoppingCart from './../view/shopping-cart'

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
      meta: { requiresAuth: true },
      children:[
        {
          path: 'home',
          name:'home',
          component: home
        },
        {
          path: 'teaCultureMuseum',
          name: 'teaCultureMuseum',
          component: teaCultureMuseum,
          meta: {
            title: '遇茶-茶文化馆'
          }
        },
        {
          path: 'productDetails',
          name: 'productDetails',
          component: productDetails,
          meta: {
            title: '遇茶-商品详情页'
          }
        },
        {
          path: 'shoppingCart',
          name: 'shoppingCart',
          component: shoppingCart,
          meta: {
            title: '遇茶-购物车'
          }
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
      component: login,
      meta: {
        title: '遇茶-欢迎登陆'
      }
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg,
      meta: {
        title: '遇茶-欢迎注册'
      }
    },

  ],
  // mode: 'history'
})

export default router
