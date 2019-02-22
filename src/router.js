import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/explorer',
      component:()=> import('./views/explorer')
    },
    {
      path:'/discovery',
      component:()=> import('./views/discovery')
    },
    {
      path:'/my',
      component: () => import('./views/my'),
      children:[
        {
          path:'setting',
          component: () => import('./views/my/container-area-right/setting'),
        }
      ]
    },
  ]
})
