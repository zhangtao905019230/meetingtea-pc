<style>
  /* .logo-and-search-component{display: flex} */
  .logo-and-search-component>.margin{display: flex;padding-top: 25px}
  .logo-and-search-component>.margin>.logo{cursor: pointer;}
  .logo-and-search-component>.margin>.search{margin-left: 40px}
  .logo-and-search-component>.margin>.search>form{display: flex}
  .logo-and-search-component>.margin>.search>form>input:nth-child(1){
    width: 488px;height: 36px;
    border: 1px solid #e0e0e0;
    text-indent: 12px;
  }
  .logo-and-search-component>.margin>.search>form>input:nth-child(2){
    background-image: url("./../assets/images/icon-search.png");
    width: 56px;height: 38px;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid #e0e0e0;
    border-left: none;
    background-color: #fff
  }
  .logo-and-search-component>.margin>.search>.ul-li_a{display: flex;font-size: 12px;margin-top: 10px;color: #999}
  .logo-and-search-component>.margin>.search>.ul-li_a:hover{color: var(--main-color)}
  .logo-and-search-component>.margin>.search>.ul-li_a>li{margin-right: 20px}
  .logo-and-search-component>.margin>.search>.ul-li_a>li:nth-child(1){color: var(--main-color)}
  .logo-and-search-component>.margin>.tea-culture-museum-btn{
    margin-left: 280px;
    /*background-color: #5daf34;*/
    border: 1px solid var(--main-color);
    line-height: 28px;height: 28px;
    padding: 0 28px 0 28px;
    border-radius: 25.5px;
    color: var(--main-color);
    font-size: 16px;
    /*width: 135px;*/
    height: 51px;
  }

</style>
<template>
  <div class="logo-and-search-component">
    <div class="margin">
      <img src="./../assets/logo1.png" style="height: 80px" alt="" class="logo" @click="goHome">
      <div class="search">
        <form action="">
          <input type="text" ref="searchTxt" class="searchTxt" @blur="txtBlur()" @focus="txtFocus()">
          <input type="button" ref="searchBtn" class="searchBtn" @mouseover="btnMouseover()" @mouseleave="btnMouseleave()">
        </form>
        <ul class="ul-li_a">
          <li>{{$t("00")}}</li>
          <li>{{$t("01")}}</li>
          <li>{{$t("02")}}</li>
          <li>{{$t("03")}}</li>
        </ul>
      </div>
      <!--<div></div>-->
      <!--<el-button class="tea-culture-museum-btn" @click="goTeaCultureMuseum" type="primary">茶文化馆</el-button>-->
      <input type="button" :value="$t('logo.and.search.component.culture')" @click="goTeaCultureMuseum" class="tea-culture-museum-btn"/>
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
      txtBlur(){
        this.$refs.searchTxt.style.border = "1px solid #e0e0e0";
        this.$refs.searchBtn.style.border="1px solid #e0e0e0";
        this.$refs.searchBtn.style.backgroundColor = "#ffffff"
        this.$refs.searchBtn.style.borderLeft = "none"
      },
      txtFocus(){
        this.$refs.searchTxt.style.border = "1px solid var(--main-color)";
        this.$refs.searchBtn.style.border="1px solid var(--main-color)";
        this.$refs.searchBtn.style.borderLeft = "none"
      },
      btnMouseleave(){
        if(document.activeElement.className != 'searchTxt'){
          this.$refs.searchTxt.style.border = "1px solid #e0e0e0";
          this.$refs.searchBtn.style.border="1px solid #e0e0e0";
        }
        this.$refs.searchBtn.style.backgroundColor = "#ffffff"
        this.$refs.searchBtn.style.backgroundImage = "url('/static/special-pictures/icon-search.png')"
        this.$refs.searchBtn.style.borderLeft = "none"
      },
      btnMouseover(){
        this.$refs.searchTxt.style.border = "1px solid var(--main-color)";
        this.$refs.searchBtn.style.border="1px solid var(--main-color)";
        this.$refs.searchBtn.style.backgroundColor = "var(--main-color)"
        this.$refs.searchBtn.style.border="1px solid var(--main-color)";
        this.$refs.searchBtn.style.backgroundImage = "url('/static/special-pictures/icon-search-s.png')"
        this.$refs.searchBtn.style.borderLeft = "none"
      },
      goHome(){
        this.$router.push({path:"/"})
      },
      goTeaCultureMuseum(){
        this.$router.push({path:"/main/teaCultureMuseum"})
      }
    }
  }
</script>
