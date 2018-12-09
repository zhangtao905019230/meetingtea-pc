import Vue from 'vue'
import Router from 'vue-router'

import productDetails from '../view/main/product-details'
import shoppingCart from '../view/main/shopping-cart'

import teaCultureMuseum from '../view/main/tea-culture-museum'

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
      component: resolve => require(['../view/main'], resolve),
      meta: { requiresAuth: true },
      children:[
        {
          path: 'look',
          name:'look',
          component: resolve => require(['../view/main/look'], resolve),
        },
        {
          path: 'home',
          name:'home',
          component: resolve => require(['../view/main/home'], resolve),
        },
        {
          path: 'teaCultureMuseum',
          name: 'teaCultureMuseum',
          component: resolve => require(['../view/main/tea-culture-museum'], resolve),
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
          path: 'goods-list',
          name: 'goods-list',
          component: resolve => require(['../widget/goods-list'], resolve),
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
      component: resolve => require(['../view/login'], resolve),
      meta: {
        title: '遇茶-欢迎登陆'
      }
    },
    {
      path: '/reg',
      name: 'reg',
      component: resolve => require(['../view/register'], resolve),
      meta: {
        title: '遇茶-欢迎注册'
      }
    },
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['../view/test'], resolve),
      meta: {
        title: '测试'
      }
    },

  ],
})

export default router
