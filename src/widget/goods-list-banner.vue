<style>
  .goods-list-banner .swiper-container {
    text-align: center;
    width: 100%;
    height: 100%;
  }
  .goods-list-banner .swiper-slide {
    height: 356px;
  }
  .goods-list-banner .swiper-slide img{
    width: 100%;
  }
  .goods-list-banner .swiper-pagination>.swiper-pagination-bullet{
    width: 25px;
    height: 5px;
    border-radius: 0%;
    background-color: #000;
    opacity: 0.6;
  }
  .goods-list-banner .swiper-pagination>.swiper-pagination-bullet-active{
    background-color: #fff;
  }
</style>
<template>
  <div class="goods-list-banner">
    <div class="swiper-container goods-list-banner-swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/4ddc87856afe6e9d4c5c86d727f2c684.jpg?imageView&quality=95&thumbnail=1090x310" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/82b404f633f1bb234bc3d6ba6e7965fd.jpg?imageView&quality=95&thumbnail=1090x310" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/2404aa4778385c03fe9d11fbb7431b58.jpg?imageView&quality=95&thumbnail=1090x310" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/aed09d12594a2358c624388323681859.jpg?imageView&quality=95&thumbnail=1090x310" alt="">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination swiper-pagination-white"></div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  export default {
    mounted(){
      let _this = this
      var swiper = new Swiper('.goods-list-banner-swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
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
