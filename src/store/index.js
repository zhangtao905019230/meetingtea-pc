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
    te:false
  },
  getters: {
    langCode(state){
      return state.langCode
    },
    te(state){
      return state.te
    }
  },
  mutations: {
    changeLang(state,payload){
      localStorage.langCode = payload
      state.langCode = payload
    },
    checkPath(state,payload){
      console.log(payload)
      if (payload.name != 'home'){
        state.te = false
      }else {
        state.te = true
      }
    }
  },
  actions: {
    changeLang({commit},payload){
      commit("changeLang",payload)
    },
    checkPath({commit},payload){
      commit("checkPath",payload)
    }
  }
})
