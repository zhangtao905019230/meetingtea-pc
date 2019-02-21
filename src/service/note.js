import axios from 'axios'

function getNoteByType(type) {
  return new Promise((resolve, reject)=>{
    let req = {
      type
    };
    axios.get("/api/note/explorer",req).then((res) => {
      resolve(res)
    })
  })
}

export default {
  getNoteByType
}
