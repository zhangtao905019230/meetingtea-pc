<style>
  #site-nav{
    background-color: #f2f2f2;
    border-bottom: 1px solid #e5e5e5;
  }
  #site-nav>.margin{
    height: 32px;
    display: flex;
    justify-content: space-between;
  }
  .sn-welcome{
    line-height: 32px;
    margin: 0 12px 0 0;
  }
  .l{display: flex}
  .l>.sn-login{
    line-height: 32px;
    padding: 0 12px;
  }
  .l>.sn-reg{
    line-height: 32px;
    padding: 0 12px;
  }
  .r{display: flex}

  /*======*/
  a.underline:hover{text-decoration: underline}
  .r>.rotating-arrowhead-par{
    position: relative;
    z-index: 1000
  }
  .r>.rotating-arrowhead-par:hover>.menu-hd{
    background-color: white;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid white;
  }
  .r>.rotating-arrowhead-par:hover>.menu-bd{
    display: block;
  }
  .r>.rotating-arrowhead-par>.menu-hd{
    border-left: 1px solid rgba(0,0,0,0);
    border-right: 1px solid rgba(0,0,0,0);
    border-bottom: 1px solid rgba(0,0,0,0);
    line-height: 32px;
    height: 32px;
    display: block;
    padding: 0 14px;
    position: relative;
  }
  .r>.rotating-arrowhead-par>.menu-bd{
    display: none;
    background-color: white;
    padding: 0 14px;
    position: absolute;
    border: 1px solid #e5e5e5;
    border-top: 1px solid rgba(0,0,0,0);
    white-space:nowrap
  }
  .r>.rotating-arrowhead-par>.menu-bd>a{
    display: block;
    line-height: 24px;

  }
  /*======*/

  .r>.sn-cart-link{
    line-height: 32px;
    margin: 0 14px;
  }
  .r>.sn-cart-link>span{
    font-weight: 700;color: #666
  }
  .r>.sn-cart-link:hover>span{
    font-weight: 700;color: var(--main-color)
  }
</style>
<template>
  <div id="site-nav">
    <div class="margin">

      <div class="l">
        <span class="sn-welcome">{{$t("site.nav.welcome")}}</span>
        <a class="sn-login" @click="goTo('/login')">{{$t("site.nav.please.login")}}</a>
        <a class="sn-reg" @click="goTo('/reg')">{{$t("site.nav.reg")}}</a>
      </div>
      <div class="r">
        <div class="sn-mymeetingtea rotating-arrowhead-par">
          <a class="menu-hd underline">
            {{$t("site.nav.my.meetingtea")}}
            <b class="rotating-arrowhead"></b>
          </a>
          <div class="menu-bd">
            <a class="underline">{{$t("site.nav.already.bought")}}</a>
            <a class="underline">{{$t("site.nav.already.sold")}}</a>
          </div>
        </div>
        <a class="sn-cart-link" @click="goTo('/main/shoppingCart')">
          <i class="icon-cart iconfont"></i>
          {{$t("site.nav.shopping.cart")}}
          <span>0</span>
          {{$t("site.nav.shopping.piece")}}
        </a>
        <div class="sn-favorite rotating-arrowhead-par">
          <a class="menu-hd underline">
            {{$t("site.nav.favorite")}}
            <b class="rotating-arrowhead"></b>
          </a>
          <div class="menu-bd">
            <a class="underline">{{$t("site.nav.favorite.goods")}}</a>
            <a class="underline">{{$t("site.nav.favorite.shops")}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods:{
      goTo(path){
        this.$router.push({path})
      }
    }
  }
</script>
