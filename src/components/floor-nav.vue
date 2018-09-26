<style>
  #floor-nav{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 1226px;
    /*border: 1px solid salmon;*/
  }
  #floor-nav>.floor-nav-wrap{
    width: 65px;
    border: 1px solid #d6d6d6;
    border-radius: 3px;
    transform: translate(-88px,0);
    padding: 5px;
  }
  #floor-nav>.floor-nav-wrap>ul>li{
    font-size:12px;
    color: #666;
    line-height: 36px;
    border-bottom: 1px solid #eaeaea;
  }
  #floor-nav>.floor-nav-wrap>ul>li:hover{
    font-size:12px;
    color: rgb(221,49,127);
    line-height: 36px;
    border-bottom: 1px solid #eaeaea;
    cursor: pointer;
  }
</style>
<template>
  <div id="floor-nav">
    <div class="floor-nav-wrap">
      <ul>
        <li
          v-for="(largeclass,index) of largeclasses"
          :key="index"
          class="iconfont icon-cart"
          @click="Which_floor_are_you_going_to_please(largeclass.scrollTo)">
          {{largeclass[langCode]}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data(){
      // 221,49,127
      return{
        largeclasses:[
          {zh:'红 茶',en:'Black',scrollTo:875},
          {zh:'绿 茶',en:'Green',scrollTo:1741},
          {zh:'白 茶',en:'White',scrollTo:2607},
          {zh:'黑 茶',en:'Brick',scrollTo:3473},
          {zh:'乌 龙',en:'Oolong',scrollTo:4339},
          {zh:'黄 茶',en:'Yellow',scrollTo:5205},
          {zh:'花 茶',en:'Scented',scrollTo:6071},
          {zh:'茶 具',en:'Tea Set',scrollTo:6937}
        ]
      }
    },
    mounted(){

    },
    methods:{
      Which_floor_are_you_going_to_please(scrollTo){
        // window.srcollTo(scrollTo)
        // console.log(scrollTo)
        // document.body.scrollTop = scrollTo
        // document.documentElement.scrollTop = scrollTo
        $("html,body").animate({ scrollTop: scrollTo }, 500);//100为滚动条的位置，1000为滚动的时延
      }
    },
    computed:{
      ...mapGetters(['langCode'])
    }
  }
</script>
