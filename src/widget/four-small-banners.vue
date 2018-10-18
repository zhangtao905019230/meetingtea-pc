<style>
  .four-small-banners>ul>li:nth-child(1)
  {width: 234px;height: 170px;
    background-color: #5f5750;
    display: flex;flex-wrap: wrap;
    overflow: hidden
  }
  .four-small-banners>ul>li:nth-child(1)>div{
    width: 78px;height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(255,255,255,0.7);
    position: relative;
  }
  .four-small-banners>ul>li:nth-child(1)>div:after {
    top: 6px;
    left: 0;
    width: 1px;
    height: 70px;
    position: absolute;
    content: "";
    background: #665e57;
  }
  .four-small-banners>ul>li:nth-child(1)>div:before{
    top: -1px;
    left: 6px;
    width: 64px;
    height: 1px;
    position: absolute;
    content: "";
    background: #665e57;
  }
  .four-small-banners>ul>li>img{display: block}
  .four-small-banners>ul{display: flex;justify-content: space-between;padding: 14px 0 14px 0}
</style>
<template>
  <div class="four-small-banners">
    <ul class="margin">
      <li>
        <div>
          <i class="iconfont icon-cart"></i>
          <span>我是按钮</span>
        </div>
        <div>
          <i class="iconfont icon-cart"></i>
          <span>我是按钮</span>
        </div>
        <div>
          <i class="iconfont icon-cart"></i>
          <span>我是按钮</span>
        </div>
        <div>
          <i class="iconfont icon-cart"></i>
          <span>我是按钮</span>
        </div>
        <div>
          <i class="iconfont icon-cart"></i>
          <span>我是按钮</span>
        </div>
        <div>
          <i class="iconfont icon-cart"></i>
          <span>我是按钮</span>
        </div>
      </li>
      <li>
        <img style="width: 316px" src="http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/four-small-banners/small-banner0.jpg" alt="">
      </li>
      <li>
        <img style="width: 316px" src="http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/four-small-banners/small-banner1.jpg" alt="">
      </li>
      <li>
        <img style="width: 316px" src="http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/four-small-banners/small-banner2.jpg" alt="">
      </li>
    </ul>
  </div>
</template>
