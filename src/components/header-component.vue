<style>
  header{background-color: #333}
  header>.margin{display: flex;line-height: 40px;justify-content:space-between}
  header>.margin>.l>ul{height: 40px;display: flex;}
  header>.margin>.l>ul>li{margin-right: 32px}
  header>.margin>.r>ul{height: 40px;display: flex}
  header>.margin>.r>ul>li{margin-right: 32px}
  header>.margin>.r>ul>li.touxiang{width: 40px;height: 40px;overflow: hidden;border-radius: 50%}
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
          <li @click="goTo('/main/home')">{{$t("header.component.home.page")}}</li>
          <li>{{$t("header.component.mobile.version")}}</li>
          <li :class="['iconfont',langCodeHandle]" style="font-size:25px" @click="onChangeLang"></li>
        </ul>
      </div>
      <div class="r">
        <ul  class="ul-li_a">
          <li @click="goTo('/login')" v-show="loginLogoutRegisterBtnStatus[0]">{{$t("header.component.login")}}</li>
          <li @click="goReg" v-show="loginLogoutRegisterBtnStatus[2]">{{$t("header.component.register")}}</li>
          <li class="touxiang">
            <img height="40" :src="handleTouxiang()" alt="">
          </li>
          <li v-show="loginLogoutRegisterBtnStatus[1]">{{$t("header.component.welcome")}}{{userInfo.user_name}}</li>
          <li @click="logout" v-show="loginLogoutRegisterBtnStatus[1]">{{$t("header.component.logout")}}</li>
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
    mounted(){
      // dataInterface:this.dataInterface
    },
    methods:{
      onChangeLang(){
        this.changeLang(this.changeToTheContrary(this.langCode))
        // setTimeout(()=>{})
        window.location.reload()
      },
      changeToTheContrary(langCode){
        if (langCode == "zh"){
          return "en"
        } else {
          return "zh"
        }
      },
      goTo(path){
        this.$router.push({path:path})
      },
      logout(){
        this.userLogout()
      },
      goReg(){
        this.$router.push({path:'/reg'})
      },
      handleTouxiang(){
        if (this.userInfo.touxiang){
          let str = this.userInfo.touxiang
          return this.dataInterface+':3030' + str.slice(6,str.length)
        } else {
          return ""
        }
      },
      ...mapActions(["changeLang","userLogout"])
    },
    computed:{
      langCodeHandle:function(){
        if (this.langCode=="en"){
          return "icon-zh"
        } else {
          return "icon-en"
        }
      },
      ...mapGetters(["langCode","loginLogoutRegisterBtnStatus","userInfo"])
    }
  }
</script>
