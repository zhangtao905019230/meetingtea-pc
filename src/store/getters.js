const getter = {
  langCode(state){
    return state.langCode
  },
  isShowCategoryListContent(state){
    return state.isShowCategoryListContent
  },
  userInfo(state){
    return state.user_info
  },
  loginLogoutRegisterBtnStatus(state){
    return state.loginLogoutRegisterBtnStatus
  }
}
export default getter
