import axios from 'axios'

const action = {
  changeLang({commit},payload){
    commit("changeLang",payload)
  },
  checkPath({commit},payload){
    commit("checkPath",payload)
  },
  userLogin({commit},payload){
    commit("userLogin",payload)
  },
  userLogout({commit},payload){
    commit("userLogout",payload)
  },
  checkLogin({commit}, payload) {
    axios({
      method:"get",
      url:payload.dataInterface+":3030/pc-check-auth"+"?"+localStorage.getItem('user_info'),
      headers:{
        "Authorization":localStorage.getItem('token')
      }
    })
      .then(res => {
        if (res.data.success == true){
          commit("userLogin",{token:localStorage.getItem('token'),user_info:JSON.parse(localStorage.getItem('user_info'))})
          payload.next()
        }else if (res.data.success == false) {
          if (payload.tips){
            if (localStorage.token!=''){
              alert('token已过期')
            } else {
              alert('您尚未登录')
            }
          }else {

          }
          payload.next('/login')
        }
      })
  }
}
export default action
