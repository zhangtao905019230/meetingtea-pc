const mutation = {
  changeLang(state,payload){
    // console.log(payload,11111)
    localStorage.langCode = payload
    state.langCode = payload
    console.log(state)
  },
  checkPath(state,payload){
    if (payload.name != 'home'){
      state.isShowCategoryListContent = false
    }else {
      state.isShowCategoryListContent = true
    }
  },
  userLogin(state,payload){

    localStorage.setItem('user_info',JSON.stringify(payload.user_info))
    localStorage.setItem('token', payload.token)

    state.user_info = payload.user_info
    state.token = payload.token

    state.loginLogoutRegisterBtnStatus = [false,true,false]
  },
  userLogout(state,payload){
    state.token = ""
    state.user_info = ""
    localStorage.setItem('user_info','')
    localStorage.setItem('token','')

    state.loginLogoutRegisterBtnStatus = [true,false,true]
  }
}

export default mutation
