<template>
  <router-view></router-view>
</template>
<style>
  :root{
    /*--main-color: #ff0036;天猫红*/

    /*支付宝蓝*/
    /*--main-color: #108EE9;*/

    /*严选金*/
    --main-color: #b4a078;
    /*--main-color: #409eff;*/
    --main-bg: rgb(255, 255, 255);
    --logo-border-color: rebeccapurple;

    --header-height: 68px;
    --content-padding: 10px 20px;

    --base-line-height: 1.428571429;
    --transition-duration: .35s;
    --external-link: "external link";
    --margin-top: calc(2vh + 20px);
  }
  @font-face {
    font-family: 'iconfont';  /* project id 957236 */
    src: url('//at.alicdn.com/t/font_957236_pp0e23q34hj.eot');
    src: url('//at.alicdn.com/t/font_957236_pp0e23q34hj.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_957236_pp0e23q34hj.woff') format('woff'),
    url('//at.alicdn.com/t/font_957236_pp0e23q34hj.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_957236_pp0e23q34hj.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family:"iconfont" !important;
    font-size:14px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-buycart:before{ content: "\e60c" }
  .icon-search:before{ content: "\e603" }
  .icon-collection:before{ content: "\e65a" }
  /*&#xe603;*/

  .margin{margin: 0 auto;width: 1226px}

</style>
