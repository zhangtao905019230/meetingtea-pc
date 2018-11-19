<style>
  #header-component>.margin{display: flex;margin-top: 20px;margin-bottom: 20px}
  .hc-logo{height: 130px;cursor: pointer}

  .hc-search{padding-top: 38px;margin-left: 100px}
  .hc-search>form{display: flex}
  .hc-search>form>.searchTxt{
    width: 491px;height: 36px;
    border: 2px solid var(--main-color);
    font-size: 14px;
    text-indent: 10px;
  }
  .hc-search>form>.searchTxt:focus::placeholder{
    color: #ccc;
  }
  .hc-search>form>.searchBtn{
    width: 132px;height: 40px;
    background-color: var(--main-color);
    color:white;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 5px;
  }
  .hc-search>ul{display: flex;font-size: 14px;margin-top: 5px}
  .hc-search>ul>li{}
  .hc-search>ul>li>a{
    line-height:14px;
    display:block;
    border-right: 1px solid #cccccc;
    padding: 0 10px;
    height: 14px;
  }
  .hc-search>ul>li:last-child>a{
    border-right: none;
  }
  .hot{color: var(--main-color)}
</style>
<template>
  <div id="header-component">
    <div class="margin">
      <img src="../assets/logo1.png" class="hc-logo" alt="" @click="goTo('/main/home')">
      <div class="hc-search">
        <form action="">
          <input type="text" class="searchTxt" placeholder="搜索 遇茶 商品/品牌">
          <input type="button" class="searchBtn" value="搜索">
        </form>
        <ul>
          <li><a>{{$t("00")}}</a></li>
          <li><a>{{$t("01")}}</a></li>
          <li><a class="hot">{{$t("02")}}</a></li>
          <li><a>{{$t("03")}}</a></li>
          <li><a class="hot">{{$t("04")}}</a></li>
          <li><a>{{$t("05")}}</a></li>
          <li><a class="hot">{{$t("06")}}</a></li>
          <li><a>{{$t("07")}}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    methods:{
      goTo(path){
        this.$router.push({path})
      }
    }
  }
</script>
