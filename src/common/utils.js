function setUpWebpageLanguage() {
  // Set up webpage language
  let langCode = ""
  if (localStorage.langCode) {
    langCode = localStorage.langCode
  } else {
    langCode = navigator.language||navigator.userLanguage;//常规浏览器语言和IE浏览器
    langCode = langCode.substr(0, 2);
    localStorage.langCode = langCode
  }
}

export default {
  setUpWebpageLanguage
}