const mutation = {
  changeLang(state,payload){
    // console.log(payload,11111)
    localStorage.langCode = payload
    state.langCode = payload
    console.log(state)
  },
  checkPath(state,payload){
    console.log(payload)
    if (payload.name != 'home'){
      state.isShowCategoryListContent = false
    }else {
      state.isShowCategoryListContent = true
    }
  }
}

export default mutation
