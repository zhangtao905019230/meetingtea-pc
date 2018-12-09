<style>
  .transitional-effect{
    transition: .3s;
  }
  .transitional-effect:hover{
    transition: .3s;
    transform: translateY(-5px);
  }
  #look a{color: #333}
  #look>.margin>ul{
    display: flex;
    justify-content: space-between;
  }
  #look>.margin>ul>li:nth-child(1){
    width: 286px;
    height: 784px;
    /*background-color: salmon;*/
  }
  #look>.margin>ul>li:nth-child(2){
    width: 604px;
    height: 784px;
    /*background-color: seagreen;*/
    border-radius: 10px;
    overflow: hidden;
  }
  #look>.margin>ul>li:nth-child(3){
    width: 286px;
    height: 784px;
  }
  #look>.margin>ul>li:nth-child(3)>div{
    box-shadow: 0 0 18px 0 rgba(0,0,0,.05);
    border-radius: 10px;

  }
  #look>.margin>ul>li:nth-child(3)>div:hover{
    box-shadow: 0 0 30px 0 rgba(0,0,0,.1);
  }
  #look>.margin>ul>li:nth-child(3)>ul>li{
    margin-top: 18px;
  }


  #look>.margin>ul>li:nth-child(3) .nav{
    display: flex;
    flex-wrap: wrap;
    /*background-color: salmon;*/
  }
  #look>.margin>ul>li:nth-child(3) .nav>li{
    text-align: center;position: relative
  }
  #look>.margin>ul>li:nth-child(3) .btn{
    display: block;height: 76px;text-align: center;line-height: 76px
  }

  /*瀑布流*/
  .waterfall {
    column-count: 4;
    column-gap: 1em;
    /*border: 1px solid salmon;*/
  }
</style>
<template>
  <div id="look">
    <div class="margin">
      <ul>
        <li>
          <div class="transitional-effect">
            <img width="100%" src="https://s10.mogucdn.com/mlcdn/c45406/181203_79d740gl98fj7ab0063bi6jc81lc5_564x640.gif" alt="">
          </div>
          <div>
            <look-show-list style="position: relative;z-index: 1000"></look-show-list>
          </div>
        </li>
        <li>
          <img width="100%" src="https://s10.mogucdn.com/mlcdn/c45406/181203_648kddb44d8h0g68k8fa6bjjk5j7b_1176x1568.jpg" alt="">
        </li>
        <li>
          <div class="transitional-effect">
            <a class="btn">12.12 购物商城</a>
            <ul class="nav">
              <li v-for="item of Array(12)">
                <img width="86px" src="https://s10.mogucdn.com/mlcdn/c45406/181203_67c813j5a22463e92g88djciagbi4_172x172.png" alt="">
                <p style="position: absolute;bottom: 0;left: 35%">上衣</p>
              </li>
            </ul>
          </div>
          <ul>
            <li class="transitional-effect">
              <img width="100%" src="https://s10.mogucdn.com/mlcdn/c45406/181203_6184f9lgb502c115a2fdl0lhd72f7_564x180.png" alt="">
            </li>
            <li class="transitional-effect">
              <img width="100%" src="https://s10.mogucdn.com/mlcdn/c45406/181203_6184f9lgb502c115a2fdl0lhd72f7_564x180.png" alt="">
            </li>
            <li class="transitional-effect">
              <img width="100%" src="https://s10.mogucdn.com/mlcdn/c45406/181203_6184f9lgb502c115a2fdl0lhd72f7_564x180.png" alt="">
            </li>
          </ul>
        </li>
      </ul>

      <div class="waterfall">
        <div style="width: 286px;height: 200px;opacity: 0">

        </div>
        <look-show-list v-for="(item,index) of Array(20)" :pt="ptArr[index]" :key="index"></look-show-list>
      </div>

    </div>
  </div>
</template>
<script>
  import LookShowList from './../../widget/look-show-list'
  export default {
    components:{
      'look-show-list': LookShowList
    },
    data(){
      return{
        ptArr:[]
      }
    },
    mounted(){
      for(let i=0;i<20;i++){
        this.ptArr.push(Math.random()*200)
      }
    }
  }
</script>
