import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// Set langCode
let langCode = ""
if (localStorage.langCode) {
  langCode = localStorage.langCode
} else {
  langCode = navigator.language||navigator.userLanguage;//常规浏览器语言和IE浏览器
  langCode = langCode.substr(0, 2);
}

export default new Vuex.Store({
  state: {
    langCode:localStorage.langCode || langCode,
  },
  getters: {
    langCode(state){
      return state.langCode
    }
  },
  mutations: {
    changeLang(state,payload){
      localStorage.langCode = payload
      state.langCode = payload
    }
  },
  actions: {
    changeLang({commit},payload){
      commit("changeLang",payload)
    }
  }
})
