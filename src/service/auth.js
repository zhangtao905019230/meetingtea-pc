import axios from 'axios'

function login(phoneNumber, password) {
  return new Promise((resolve, reject)=>{
    let req = {
      phoneNumber,
      password
    };
    axios.post("/api/auth",req).then((res) => {
      let token = res.data.token;
      resolve(res.data)
    })
  })
}

export default {
  login
}
