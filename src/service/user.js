import axios from 'axios'

function getMyInfo(username, token) {
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
