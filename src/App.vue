<template>
  <router-view></router-view>
</template>
<style>
  @font-face {
    font-family: 'iconfont';  /* project id 803857 */
    src: url('//at.alicdn.com/t/font_803857_fvhq65jcg96.eot');
    src: url('//at.alicdn.com/t/font_803857_fvhq65jcg96.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_803857_fvhq65jcg96.woff') format('woff'),
    url('//at.alicdn.com/t/font_803857_fvhq65jcg96.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_803857_fvhq65jcg96.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family:"iconfont" !important;
    font-size:14px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-cart:before{ content: "\e660" }
  .icon-en:before{ content: "\e712" }
  .icon-zh:before{ content: "\e713" }
  .icon-list:before{ content: "\e618" }
  .icon-right:before{ content: "\e6bf" }
  .icon-more:before{ content: "\e69c" }

  .margin{margin: 0 auto;width: 1226px}
  .ul-li_a>li{color: #b0b0b0}
  .ul-li_a>li:hover{cursor: pointer;color: #e64318}
  input{display: block;border: none}
  input[type="button"]{cursor: pointer;}
</style>
