<style>
  #sidebar-component{
    position: fixed;
    height: 100%;
    width: 315px;
    background-color: salmon;
    top: 0;
    right: 0px;
    display: flex;
    z-index: 1000;
  }
  /*#sidebar-component:hover{*/
    /*transition: 1s;*/
    /*transform: translateX(-280px);*/
  /*}*/
  .sc-tabs{
    width: 35px;
    height: 100%;
    background-color: #000;
  }
  .sc-tabs>.head-portrait{
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .sc-tabs>.head-portrait:hover{
    background-color: var(--main-color);
  }
  .sc-tabs>.head-portrait:hover>.tip{
    transform: translateX(100px);
    transition: 1s;
    opacity: 1;
    /*display: block;*/
  }
  .sc-tabs>.head-portrait>img{
    height: 26px;
    width: 26px;
    border-radius: 50%;
  }
  .sc-tabs>.head-portrait>.tip{
    /*display: none;*/
    position: absolute;
    right: 135px;
    width: 90px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #fff;
    opacity: 0;
    background-color: #494949;
    -webkit-box-shadow: 0 0 5px rgba(0,0,0,.2);
    -moz-box-shadow: 0 0 5px rgba(0,0,0,.2);
    box-shadow: 0 0 5px rgba(0,0,0,.2);
  }
  .sc-tabs>.head-portrait>.tip>i{width: 12px;height: 12px;background-color: #494949;position: absolute;right: -6px;top: 10px;transform: rotate(45deg)}
  .sc-content{
    width: 280px;
    height: 100%;
    background-color: #e6e6e6;
  }
</style>
<template>
  <div id="sidebar-component">
    <div class="sc-tabs">
      <div class="head-portrait">
        <img src="http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/test0.png" alt="">
        <div class="tip">
          <span>会员权益</span>
          <i></i>
        </div>
      </div>
    </div>
    <div class="sc-content"></div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        lnBodyDatas:[
          ['清香','红茶'],['可口','绿茶'],['醇厚','黑茶'],['淡雅','黄茶'],
          ['极品','茶具']
        ]
      }
    }
  }
</script>
