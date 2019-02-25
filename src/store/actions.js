const action = {
  login({commit},payload){
    commit("login",payload)
  },
  setUser({commit},payload){
    commit("setUser",payload)
  },
  clearUser({commit},payload){
    commit("clearUser",payload)
  }
}
export default action
