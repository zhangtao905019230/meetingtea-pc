import axios from 'axios'
import ErrorHandler from './../common/error-handler'

function login(phoneNumber, password) {
  return new Promise((resolve, reject) => {
    let req = {
      phoneNumber,
      password
    };
    axios.post("/api/auth/common", req).then((res) => {
      resolve(res.data)
    }, res => {
      ErrorHandler.restApiErrorHandler(res, reject)
    })
  })
}

function autoLogin() {
  return new Promise((resolve, reject) => {
    let req = {
      userInfo: localStorage.getItem('userInfo'),
      token: localStorage.getItem('token')
    };
    axios.post("/api/auth/token", req).then((res) => {
      resolve(res.data)
    })
  })
}

export default {
  login,
  autoLogin
}
