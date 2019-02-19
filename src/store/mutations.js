const mutation = {
  checkPath(state,payload){
    if (payload.path=='/login'){
      state.headerComponentStatus = false
    } else {
      state.headerComponentStatus = true
    }
  }
}

export default mutation
