import axios from 'axios'

function ValidateLogon(url,val) {
  let data = 'user_name='+encodeURIComponent(val.user_name)+'&user_password='+encodeURIComponent(val.user_password)
  return new Promise((resolve, reject) => {
    axios.post(url+":3030/pc-user/login",data)
      .then(res => {
        resolve(res.data)
      })
      .catch(err=>{
        reject(err)
      });
  });
}
function RegisteredAccount(url,val) {
  let data =
    'phone_number='+encodeURIComponent(val.phone_number) +
    '&user_name='+encodeURIComponent(val.user_name) +
    '&user_password='+encodeURIComponent(val.user_password) +
    '&mailbox='+encodeURIComponent(val.mailbox)
    // console.log(data)
  return new Promise((resolve, reject) => {
    axios.post(url+":3030/pc-user/reg",data)
      .then(res => {
        resolve(res.data)
      })
      .catch(err=>{
        reject(err)
      });
  });
}
export default {
  ValidateLogon,
  RegisteredAccount
}
