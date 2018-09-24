import axios from 'axios'

function GetEightHotGoods(url) {
  return new Promise((resolve, reject) => {
    axios.get(url + ":3030/pc-goods/getEightHotGoods")
      .then(res => {
        let obj = {
          '00':[],'01':[],'02':[],'03':[],'04':[],
          '05':[],'06':[],'07':[],'08':[],'09':[],
        }
        for(let i=0;i<res.data.length;i++){
          if (JSON.parse(res.data[i].classification).largeclass == '00'){
            obj['00'].push(res.data[i])
          } else if (JSON.parse(res.data[i].classification).largeclass == '01'){
            obj['01'].push(res.data[i])
          } else if (JSON.parse(res.data[i].classification).largeclass == '02'){
            obj['02'].push(res.data[i])
          } else if (JSON.parse(res.data[i].classification).largeclass == '03'){
            obj['03'].push(res.data[i])
          } else if (JSON.parse(res.data[i].classification).largeclass == '04'){
            obj['04'].push(res.data[i])
          } else if (JSON.parse(res.data[i].classification).largeclass == '05'){
            obj['05'].push(res.data[i])
          } else if (JSON.parse(res.data[i].classification).largeclass == '06'){
            obj['06'].push(res.data[i])
          } else if (JSON.parse(res.data[i].classification).largeclass == '07'){
            obj['07'].push(res.data[i])
          } else if (JSON.parse(res.data[i].classification).largeclass == '08'){
            obj['08'].push(res.data[i])
          } else if (JSON.parse(res.data[i].classification).largeclass == '09'){
            obj['09'].push(res.data[i])
          } else {

          }
        }
        resolve(obj)
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
