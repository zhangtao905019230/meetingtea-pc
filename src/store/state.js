// Set langCode
let langCode = ""
if (localStorage.langCode) {
  langCode = localStorage.langCode
} else {
  langCode = navigator.language||navigator.userLanguage;//常规浏览器语言和IE浏览器
  langCode = langCode.substr(0, 2);
}
// console.log(langCode)
const state = {
  langCode:langCode,
  isShowCategoryListContent:false,
  token:'',
  user_info:'',
  loginLogoutRegisterBtnStatus:[true,false,true]
}
export default state
