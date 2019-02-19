import axios from 'axios'

function login(username, password) {
  return new Promise((resolve, reject)=>{
    let req = {
      username,
      password
    };
    axios.post("/api/auth",req).then((res) => {
      let token = res.data.token;
      resolve(res)
    })
  })
}

export default {
  login
}
