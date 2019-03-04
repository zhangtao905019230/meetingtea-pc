import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/explorer'
    },
    {
      path:'/explorer',
      component:()=> import('./views/explorer')
    },
    {
      path:'/discovery',
      component:()=> import('./views/discovery')
    },
    {
      path:'/upload',
      component:()=> import('./views/upload'),
      children:[
        {
          path:'normal',
          component: () => import('./views/upload/normal'),
        },
        {
          path:'video',
          component: () => import('./views/upload/video'),
        },
      ]
    },
    {
      path:'/my',
      component: () => import('./views/my'),
      meta:{auth:true},
      children:[
        {
          path:'focus',
          component: () => import('./views/my/my-right/focus'),
        },
        {
          path:'works',
          component: () => import('./views/my/my-right/works'),
        },
        {
          path:'collections',
          component: () => import('./views/my/my-right/collections'),
        },
        {
          path:'statistics',
          component: () => import('./views/my/my-right/statistics'),
        },
        {
          path:'setting',
          component: () => import('./views/my/my-right/setting'),
          meta:{auth:true}
        }
      ]
    },
  ]
})
