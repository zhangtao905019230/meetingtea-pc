import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ele from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ele);

Vue.config.productionTip = false;


window.gApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

import ErrorObj from './assets/error-obj'
window.gApp.$errMsg = function (ErrId) {
  return ErrorObj['Error.' + ErrId]
};
