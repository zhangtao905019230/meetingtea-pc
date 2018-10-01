

const action = {
  changeLang({commit},payload){
    // console.log(payload)
    commit("changeLang",payload)
  },
  checkPath({commit},payload){
    commit("checkPath",payload)
  }
}
export default action
