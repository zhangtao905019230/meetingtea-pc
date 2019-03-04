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

// 进行自动登录校验
import AuthService from './service/auth'
if(localStorage.getItem('token')!=null){
  AuthService.autoLogin().then(res=>{
    window.gApp.$message({
      message: 'token校验通过，自动登录成功！',
      type: 'success'
    });
    // console.log(res)
    window.gApp.$store.dispatch('setUser',res);
  }).catch(error=>{
    window.gApp.$message.error(error);
    window.gApp.$store.dispatch('clearUser');
  })
}

// 全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.state.isLogin) {
    next({
      path: '/',
    });
    return;
  }
  next();
});
