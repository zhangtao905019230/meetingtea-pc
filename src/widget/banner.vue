<style>
  #banner>.margin{
    width: 100%;
    min-width: 1226px;
    /*position: relative;*/
    z-index: -1000;
  }
  #banner{
    /*background-color: firebrick*/
  }
  #banner .swiper-container {
    text-align: center;
    width: 100%;
    height: 100%;
  }
  #banner .swiper-slide {
    /*height: 420px;*/
  }
  #banner.swiper-pagination>.swiper-pagination-bullet{
    width: 25px;
    height: 5px;
    border-radius: 0%;
    background-color: #000;
    opacity: 0.6;
  }
  #banner .swiper-pagination>.swiper-pagination-bullet-active{
    background-color: #fff;
  }
</style>

<template>
  <div id="banner">
    <div class="margin">
       <!--Swiper -->
      <div class="swiper-container banner-swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/945dfc5e8722da7107fcd66dd227ecce.jpg?imageView&quality=95&thumbnail=1920x420" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/99d63f093203ad4d0d1065884b57ac5d.jpg?imageView&quality=95&thumbnail=1920x420" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/f50fb5a50bee9a2f62afc23c9f2b0718.jpg?imageView&quality=95&thumbnail=1920x420" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/9314edf512773e438717a5ac796da955.jpg?imageView&quality=95&thumbnail=1920x420" alt="">
          </div>
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
        }
      });
    }
  }
</script>
