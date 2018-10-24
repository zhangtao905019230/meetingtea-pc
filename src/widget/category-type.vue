<style>
  #category-type{
    border-bottom: 2px solid var(--main-color);
    height: 36px
  }
  #category-type>.margin{
    position: relative;
    z-index: 1000;
    height: 38px;
  }
  .ct-title{
    width: 234px;
    height: 38px;
    font-size:16px;
    line-height:36px;
    display: block;
    background-color: var(--main-color);
    color: white;
  }
  .ct-title>.iconfont{font-size: 18px;padding: 0 10px}

  .ct-content{
    height: 460px;
    width: 234px;
    background-color: rgba(0,0,0,.5);
  }
  .ct-content>.largeclass-ul{
    padding: 20px 0;
  }
  .ct-content>.largeclass-ul>li{
    width: 234px;
    height: 52.5px;
    color: white;
    line-height: 52.5px;
    font-size: 16px;
  }
  .ct-content>.largeclass-ul>li:hover{
    background-color: var(--main-color);
    cursor: pointer;
  }

  .ct-content>.smallclass-ul{
    width: 992px;
    height: 420px;
    background-color: white;
    position: absolute;
    top: 38px;
    left: 234px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    align-content: flex-start;
  }
  .ct-content>.smallclass-ul>li{
    background-color: white;
    padding-left: 20px;
    height: 60px;width: 228px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .ct-content>.smallclass-ul>li>img{
    width: 40px;height: 40px;
    margin-right: 20px
  }
</style>
<template>
  <div id="category-type">
    <div class="margin">
      <span class="ct-title">
        <i class="iconfont icon-list"></i>
        商品分类
      </span>
      <div class="ct-content">
        <ul class="largeclass-ul">
          <li
            v-for="(largeclass,index) of largeclasses"
            :key="index"
            @mousemove="changeLargeclass(largeclass,index)"
            @mouseleave="mouseleaveCtContent">
            {{$t(largeclass)}}
          </li>
        </ul>
        <ul
          class="smallclass-ul"
          :style="{display:smallclassUlState}"
          @mouseenter="mouseenterSmallclassUl"
          @mouseleave="mouseleaveCtContent">
          <li v-for="(smallclass,index) of smallclasses[activeIndex]" :key="index">
            <img src="https://img1.zuipin.cn/new_pc/%E5%AF%BC%E8%88%AA%E6%A0%8F%E4%B8%89%E7%BA%A7%E5%88%86%E7%B1%BB/%E5%AE%89%E6%BA%AA%E9%93%81%E8%A7%82%E9%9F%B3.jpg" alt="">
            <span>{{$t(smallclass)}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        smallclassUlState:'none',
        activeIndex:'01',
        largeclasses:['00','01','02','03','04','05','06','07'],
        smallclasses:{
          '00':['0000','0001','0000','0001','0000','0001','0000','0001','0000','0001','0000','0001','0000','0001','0000','0001','0000','0001'],
          '01':['0100','0101'],
          '02':['0200','0201'],
          '03':['0300','0301'],
          '04':['0400','0401'],
          '05':['0500','0501'],
          '06':['0600','0601'],
          '07':['0700','0701']
        }
      }
    },
    methods:{
      changeLargeclass(largeclass,index){
        this.smallclassUlState = 'flex'
        this.activeIndex = largeclass
      },
      mouseleaveCtContent(){
        this.smallclassUlState = 'none'
      },
      mouseenterSmallclassUl(){
        this.smallclassUlState = 'flex'
      }
    }
  }
</script>
