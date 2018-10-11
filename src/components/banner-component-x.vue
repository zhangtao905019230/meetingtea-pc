<style>
  .banner-component-x>.margin{display: flex}
  .banner-component-x>.margin>.bg{width: 234px;height: 460px;background-color: #666}
  .banner-component-x>.margin>.swiper-container{background-color: seagreen;height: 460px;width: 992px}
  .banner-component-x>.margin>.swiper-container>.swiper-wrapper{
    height: 460px;width: 992px
  }
  .banner-component-x>.margin>.swiper-container>.swiper-wrapper>.swiper-slide{
    height: 100%;
    background-image: url("./../assets/images/banner/banner0/main.jpeg");
  }
</style>
<template>
  <div class="banner-component-x">
    <div class="margin">
      <div class="bg"></div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"></div>
          <div class="swiper-slide"></div>
          <div class="swiper-slide"></div>
        </div>
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
    mounted(){
      console.log($('.swiper-slide'))
      $("body").click(function(){
        $(".swiper-slide:eq(1)").animate({opacity:0.3});
      });
    },
    methods:{

    }
  }
</script>
