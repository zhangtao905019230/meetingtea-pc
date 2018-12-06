import Vue from 'vue'
import Router from 'vue-router'

import home from '../view/main/home'

import login from './../view/login'
import reg from './../view/register'
import main from './../view/main'
import productDetails from '../view/main/product-details'
import shoppingCart from '../view/main/shopping-cart'

import teaCultureMuseum from '../view/main/tea-culture-museum'
// import te

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
          path: 'tea-culture',
          component: resolve => require(['../view/main/tea-culture'], resolve),
          meta: {
            title: '遇茶-茶文化'
          }
        },
        {
          path: 'lecha-article-details',
          component: resolve => require(['../widget/lecha-article-details'], resolve),
          meta: {
            title: '遇茶-乐茶文章'
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
          path: 'category-list',
          name: 'category-list',
          component: resolve => require(['../widget/category-list'], resolve),
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
        }
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
