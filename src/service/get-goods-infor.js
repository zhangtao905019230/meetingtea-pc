import axios from 'axios'

function GetEightHotGoods(url) {
  return new Promise((resolve, reject) => {
    axios.get(url + ":3030/goods/getEightHotGoods")
      .then(res => {
        // console.log(res)
        resolve(res.data)
      })
      .catch(err=>{
        reject(err)
      });
  });
}
function GetAllTypesOfTea() {
  return new Promise((resolve, reject) => {
    axios.get("/static/json/allTypesOfTea.json")
      .then(res => {
        // console.log(res)
        resolve(res.data)
      })
      .catch(err=>{
        reject(err)
      });
  });
}

export default {
  GetEightHotGoods,
  GetAllTypesOfTea
}
