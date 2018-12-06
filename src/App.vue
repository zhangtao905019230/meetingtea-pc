<template>
  <router-view></router-view>
</template>
<style>
  :root{
    /*--main-color: #ff0036;天猫红*/

    /*支付宝蓝*/
    --main-color: #108EE9;

    /*严选金*/
    --main-color: #b4a078;

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
    font-family: 'iconfont';  /* project id 803857 */
    src: url('//at.alicdn.com/t/font_803857_0zi705rik4de.eot');
    src: url('//at.alicdn.com/t/font_803857_0zi705rik4de.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_803857_0zi705rik4de.woff') format('woff'),
    url('//at.alicdn.com/t/font_803857_0zi705rik4de.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_803857_0zi705rik4de.svg#iconfont') format('svg');
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
  .icon-baohu:before{ content: "\e60e" }
  .icon-wenhao:before{ content: "\e61c" }
  .icon-fukuan:before{ content: "\e643" }
  .icon-tese:before{ content: "\e617" }
  .icon-bofang:before{ content: "\e600" }
  .icon-you-yuan:before{ content: "\e7c8" }

  .margin{margin: 0 auto;width: 1226px}
  .margin-1090{margin: 0 auto;width: 1090px}
  .ul-li_a>li{color: #b0b0b0}
  .ul-li_a>li:hover{cursor: pointer;color: var(--main-color)}
  input{display: block;border: none}
  input[type="button"]{cursor: pointer;}

  a{color: #999}
  a:hover{color: var(--main-color)}

  b.rotating-arrowhead{
    position: absolute;
    top: 45%;
    right: 6px;
    border-width: 3px;
    border-style: solid dashed dashed;
    border-color: #bbb transparent transparent;
  }
  .rotating-arrowhead-par:hover b.rotating-arrowhead{
    transform-origin: 50% 25%;
    transition: 0.3s;
    transform: rotate(180deg);
  }
</style>
