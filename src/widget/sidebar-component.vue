<style>
  #sidebar-component{
    position: fixed;
    height: 100%;
    width: 315px;
    background-color: salmon;
    top: 0;
    right: -280px;
    display: flex;
    z-index: 1000;
    transition: .5s;
  }
  #sidebar-component.active{
    right: 0px;
  }
  .sc-tabs{
    width: 35px;
    height: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column-reverse;
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
    cursor: pointer;
  }
  .sc-tabs>.head-portrait:hover>.tip{
    transition: 0.5s;
  }
  .sc-tabs>.head-portrait>img{
    height: 26px;
    width: 26px;
    border-radius: 50%;
  }
  .sc-tabs>.head-portrait>.tip{
    display: none;
    position: absolute;
    right: 70px;
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
    cursor: pointer;
  }
  .sc-tabs>.head-portrait>.tip>i{
    width: 12px;height: 12px;
    background-color: #494949;
    position: absolute;
    right: -6px;
    top: 10px;
    transform: rotate(45deg)
  }
  .sc-tabs>.car-wrap>.car{
    display: flex;flex-direction: column;align-items: center;
    margin: 0 5px;
    color: white;
    height: 100px;
    justify-content: center;
    cursor: pointer;
    border-top: 1px solid #444;
    border-bottom: 1px solid #444;
  }
  .sc-tabs>.car-wrap>.car>.icon-cart{
    color: var(--main-color)
  }
  .sc-tabs>.car-wrap:hover{
    background-color: var(--main-color)
  }
  .sc-tabs>.car-wrap:hover>.car{
    border-top: 1px solid var(--main-color);
    border-bottom: 1px solid var(--main-color);
  }
  .sc-tabs>.car-wrap:hover>.car>.icon-cart{
    color: white
  }
  .sc-content{
    width: 280px;
    height: 100%;
    background-color: #e6e6e6;
  }
</style>
<template>
  <div id="sidebar-component" :class="{ active: isActive }">
    <div class="sc-tabs">
      <!--car-wrap-->
      <div
        class="car-wrap"
        @click="activeStatusSwitch">
        <div class="car">
          <i class="iconfont icon-cart"></i>
          <p style="width: 12px">购物车</p>
        </div>
      </div>
      <!--head-portrait-->
      <div
        class="head-portrait"
        @mouseenter="headPortraitMouseenter"
        @mouseleave="headPortraitMouseleave"
        @click="activeStatusSwitch">
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
        sidebarComponentStatusActive:false,
        lnBodyDatas:[
          ['清香','红茶'],['可口','绿茶'],['醇厚','黑茶'],['淡雅','黄茶'],
          ['极品','茶具']
        ],
        isActive:false
      }
    },
    methods:{
      headPortraitMouseenter(){
        // Solving the influence of display on transform
        $(".tip").css({'display':'block'})
        setTimeout(()=>{
          $(".tip").css({'transform':'translateX(35px)','opacity':1})
        },100)
      },
      headPortraitMouseleave(){
        $(".tip").css({'display':'none','transform':'translateX(0px)','opacity':0})
      },
      activeStatusSwitch(){
        if (this.isActive){
          this.isActive=false
        } else {
          this.isActive=true
        }
      }
    }
  }
</script>
