import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 装载element ui
import ele from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ele);

Vue.config.productionTip = false;

// 实例化Vue对象并挂载到window
window.gApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// 将err id 挂在到windo
import ErrorObj from './assets/error-obj'
window.gApp.$errMsg = function (ErrId) {
  return ErrorObj['Error.' + ErrId]
};

// 全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.state.is_login) {
    next({
      path: '/',
    });
    return;
  }
  next();
});
