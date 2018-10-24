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
          <div class="swiper-slide" style="background-image:url(http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/test/banner1.jpg)"></div>
          <div class="swiper-slide" style="background-image:url(http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/test/banner2.jpg)"></div>
          <div class="swiper-slide" style="background-image:url(http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/test/banner3.jpg)"></div>
          <div class="swiper-slide" style="background-image:url(http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/test/banner4.jpg)"></div>
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
