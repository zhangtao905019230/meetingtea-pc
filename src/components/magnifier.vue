<style>
  .magnifier>.top{
    border: 1px solid #eee;
    width: 402px;height: 402px;
    display: flex;
    align-items: center;
    justify-content: center
  }
  .magnifier>.top>img{}
  .magnifier>.bottom>ul{display: flex;width: 344px; justify-content: space-around;padding: 0 30px;margin-top: 10px}
  .magnifier>.bottom>ul>li{width: 60px;height: 60px;background-color: seagreen;border: 2px solid white}
  .magnifier>.bottom>ul>li:hover{border: 2px solid coral}
</style>
<template>
  <div class="magnifier">
    <div class="top">
      <img width="360" height="360" src="https://image.suning.cn/uimg/b2c/newcatentries/0000000000-000000000187296479_4.jpg_800w_800h_4e" alt="">
    </div>
    <div class="bottom">
      <ul>
        <li>
          <img src="https://image.suning.cn/uimg/b2c/newcatentries/0000000000-000000000187296479_4.jpg_60w_60h_4e" alt="">
        </li>
        <li>
          <img src="https://image.suning.cn/uimg/b2c/newcatentries/0000000000-000000000187296479_4.jpg_60w_60h_4e" alt="">
        </li>
        <li>
          <img src="https://image.suning.cn/uimg/b2c/newcatentries/0000000000-000000000187296479_4.jpg_60w_60h_4e" alt="">
        </li>
        <li>
          <img src="https://image.suning.cn/uimg/b2c/newcatentries/0000000000-000000000187296479_4.jpg_60w_60h_4e" alt="">
        </li>
        <li>
          <img src="https://image.suning.cn/uimg/b2c/newcatentries/0000000000-000000000187296479_4.jpg_60w_60h_4e" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>
