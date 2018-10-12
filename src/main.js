// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Import Vue.js core libraries
import router from './router'
import store from './store'

// Import element-ui library
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enMessages from './locale/en'
import zhMessages from './locale/zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enMessages,
    ...enLocale
  },
  zh: {
    ...zhMessages,
    ...zhLocale
  }
}

// Set up webpage language
let langCode = ""
if (localStorage.langCode) {
  langCode = localStorage.langCode
} else {
  langCode = navigator.language||navigator.userLanguage;//常规浏览器语言和IE浏览器
  langCode = langCode.substr(0, 2);
  localStorage.langCode = langCode
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: localStorage.langCode, // set locale
  messages, // set locale messages
})

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})


// Configuring different environment data request paths
Vue.prototype.dataInterface = process.env.API_ROOT
Vue.prototype.phpStaticFilePath = 'http://101.132.46.146:8080'

Vue.config.productionTip = false

store.dispatch('checkLogin',{next:function next(){console.log(1)},dataInterface:process.env.API_ROOT,tips:false})

router.beforeEach((to, from, next) => {
  store.dispatch('checkPath',{name:to.name})
  if (to.meta.title){
    document.title = to.meta.title
  }else {
    document.title = '遇见茶，遇见你——生活累了，坐下来一起喝杯茶吧。'
  }
  if (to.path=='/login'||to.path=='/reg'||to.path=='/main/home'){
    next()
  } else {
    store.dispatch('checkLogin',{next:next,dataInterface:process.env.API_ROOT,tips:true})
  }
})

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
