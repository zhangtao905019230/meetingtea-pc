<style>
  #lift-nav{position: fixed;bottom: 50px;left: 50%;transform: translateX(-664px)}
  .ln-header{
    width: 36px;
    height: 36px;
    background-color: #ff0036;
    color: white;
    text-align: center;
    line-height: 36px;
    font-size: 12px;
    cursor: pointer;
  }
  .ln-body>li{
    width: 36px;
    height: 36px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;margin:2px 0;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
  }
  .ln-body>li:nth-child(1):hover{
    background-color: #64C333;
  }
  .ln-body>li:nth-child(2):hover{
    background-color: #000;
  }
  .ln-body>li:nth-child(3):hover{
    background-color: #EA5F8D;
  }
  .ln-body>li:nth-child(4):hover{
    background-color: #0AA6E8;
  }
  .ln-body>li:nth-child(5):hover{
    background-color: #64C333;
  }
  .ln-body>li:nth-child(6):hover{
    background-color: #F15453;
  }
  .ln-footer{
    width: 36px;
    height: 36px;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
  }
  .ln-footer>p{
    text-align: center
  }
</style>
<template>
  <div id="lift-nav">
    <div class="ln-header">
      导航
    </div>
    <ul class="ln-body">
      <li v-for="(lnBodyData,index) of lnBodyDatas" :key="index">
        <span>{{lnBodyData[0]}}</span>
        <span>{{lnBodyData[1]}}</span>
      </li>
    </ul>
    <div class="ln-footer">
      <p><</p>
      <p>顶部</p>
    </div>
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
