<style>
  header{background-color: #333}
  header>.margin{display: flex;line-height: 40px;justify-content:space-between}
  header>.margin>.l>ul{height: 40px;display: flex;}
  header>.margin>.l>ul>li{margin-right: 32px}
  header>.margin>.r>ul{height: 40px;display: flex}
  header>.margin>.r>ul>li{margin-right: 32px}
  header>.margin>.cart-btn{height: 40px;padding-right: 24px; display: block;display: flex;background-color: #ff3600;overflow: hidden}
  header>.margin>.cart-btn>.img-wrap{transform: translateY(0);transition: .2s}
  header>.margin>.cart-btn:hover>.img-wrap{transform: translateY(-30px)}
  header>.margin>.cart-btn:hover{background-color:#ccc}
  header>.margin>.cart-btn:hover>input{background-color: #ccc;color: #ff3600}
  header>.margin>.cart-btn>.img-wrap>img{display: block;width: 20px;margin: 10px}
  header>.margin>.cart-btn>input{background-color: #ff3600;font-size: 16px;color: #fff;}

</style>
<template>
  <header>
    <div class="margin">
      <div class="l">
        <ul class="ul-li_a">
          <li>{{$t("header.component.home.page")}}</li>
          <li>{{$t("header.component.home.page")}}</li>
          <li :class="['iconfont',langCodeHandle]" style="font-size:25px" @click="onChangeLang"></li>
        </ul>
      </div>
      <div class="r">
        <ul  class="ul-li_a">
          <li>{{$t("header.component.login")}}</li>
          <li>{{$t("header.component.register")}}</li>
          <li>{{$t("header.component.order")}}</li>
          <li>{{$t("header.component.help")}}</li>
          <li>{{$t("header.component.about")}}</li>
          <li>4000-000-000</li>
        </ul>
      </div>
      <div class="cart-btn">
        <div class="img-wrap">
          <img src="./../assets/images/cart2.png" alt="">
          <img src="./../assets/images/cart1.png" alt="">
        </div>
        <input type="button" :value="$t('header.component.cart')">
      </div>
    </div>
  </header>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex'
  export default {
    data(){
      return{
      }
    },
    methods:{
      onChangeLang(){
        this.changeLang(this.changeToTheContrary(this.langCode))
        window.location.reload()
      },
      changeToTheContrary(langCode){
        if (langCode == "zh"){
          return "en"
        } else {
          return "zh"
        }
      },
      ...mapActions(["changeLang"])
    },
    computed:{
      langCodeHandle:function(){
        if (this.langCode=="en"){
          return "icon-zh"
        } else {
          return "icon-en"
        }
      },
      ...mapGetters(["langCode"])
    }
  }
</script>
