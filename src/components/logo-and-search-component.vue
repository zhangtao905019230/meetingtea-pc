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
  .logo-and-search-component>.margin>.search>.ul-li_a:hover{color: #ff3600}
  .logo-and-search-component>.margin>.search>.ul-li_a>li{margin-right: 20px}
  .logo-and-search-component>.margin>.search>.ul-li_a>li:nth-child(1){color: #ff3600}

</style>
<template>
  <div class="logo-and-search-component">
    <div class="margin">
      <img src="./../assets/images/logo.png" style="height: 80px" alt="" class="logo" @click="goHome">
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
      <div></div>
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
        this.$refs.searchTxt.style.border = "1px solid #ff3600";
        this.$refs.searchBtn.style.border="1px solid #ff3600";
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
        this.$refs.searchTxt.style.border = "1px solid #ff3600";
        this.$refs.searchBtn.style.border="1px solid #ff3600";
        this.$refs.searchBtn.style.backgroundColor = "#ff3600"
        this.$refs.searchBtn.style.border="1px solid #ff3600";
        this.$refs.searchBtn.style.backgroundImage = "url('/static/special-pictures/icon-search-s.png')"
        this.$refs.searchBtn.style.borderLeft = "none"
      },
      goHome(){
        this.$router.push({path:"/"})
      }
    }
  }
</script>
