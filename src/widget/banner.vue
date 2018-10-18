<style>
  #banner{background-color: firebrick}
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    height: 460px;
    background-position: center;
    background-size: cover;
  }
  .swiper-pagination>.swiper-pagination-bullet{
    width: 25px;
    height: 5px;
    border-radius: 0%;
    background-color: #000;
    opacity: 0.6;
  }
  .swiper-pagination>.swiper-pagination-bullet-active{
    background-color: #fff;
  }
</style>

<template>
  <div id="banner" :style="{'background-color':colorCard[activeIndex]}">
    <div class="margin">
      <!-- Swiper -->
      <div class="swiper-container banner-swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="background-image:url(https://img2.zuipin.cn/new_pc/%E9%A6%96%E9%A1%B5%E8%BD%AE%E6%92%ADpc%E7%AB%AF/20181008_10.8-10.22-%E9%87%8D%E9%98%B3%E8%8A%82%E6%B4%BB%E5%8A%A8-%E9%A6%96%E9%A1%B5%E8%BD%AE%E6%92%AD-f9f2e7.jpg)"></div>
          <div class="swiper-slide" style="background-image:url(https://img2.zuipin.cn/new_pc/%E9%A6%96%E9%A1%B5%E8%BD%AE%E6%92%ADpc%E7%AB%AF/1-8702951%EF%BC%9Af9fbf9.jpg)"></div>
          <div class="swiper-slide" style="background-image:url(https://img2.zuipin.cn/new_pc/%E9%A6%96%E9%A1%B5%E8%BD%AE%E6%92%ADpc%E7%AB%AF/4-8684606%EF%BC%9Af4ebce.jpg)"></div>
          <div class="swiper-slide" style="background-image:url(https://img2.zuipin.cn/new_pc/%E9%A6%96%E9%A1%B5%E8%BD%AE%E6%92%ADpc%E7%AB%AF/3-8684481%EF%BC%9Afafaf9.jpg)"></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-white"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  export default {
    data(){
      return{
        activeIndex:'0',
        colorCard:['rgb(248,241,231)','rgb(249,251,248)','rgb(243,237,212)','rgb(248,248,246)']
      }
    },
    methods:{
    },
    mounted(){
      let _this = this
      var swiper = new Swiper('.banner-swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay:{
          delay:5000
        },
        on: {
          slideChangeTransitionStart: function(){
            _this.activeIndex = this.activeIndex
          },
        },
      });
    }
  }
</script>
