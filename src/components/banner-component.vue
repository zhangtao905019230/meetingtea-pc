<style>
  .banner-component>.margin{height: 460px;background-color: #cccccc;position: relative;display: flex;overflow: hidden}
  .banner-component>.margin>.bg{width: 234px;height: 460px;background-color: #666}
  .banner-component>.margin>.banner{
    transform-origin: 0 0;
    transition-duration: 3s;
    width: 992px;
    transform: rotate(180deg);
    transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)
  }
  .banner-component>.margin:hover>.banner{transform: rotate(180deg);}
  .banner-component>.margin>.btn{position: absolute;z-index: 101;top:10px;right: 10px}
  .banner-component>.margin>.banner>.swiper{position: absolute}
  .banner-component>.margin>.banner>.threeD-wrap{
    width: 992px;height: 100%;background-color: #5daf34;
    position: absolute;
    top: 0;
    z-index: 100;
    transform: rotate(180deg);
    transform-origin: 0 0;
  }
  /*----------*/
  .banner-component>.margin .swiper-container {
    width: 992px;
    height: 100%;
  }
  .banner-component>.margin .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: 460px;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .banner-component>.margin .swiper-slide:nth-child(1){background-image: url("./../assets/images/banner/banner0/main.jpeg")}
  .banner-component>.margin .swiper-slide:nth-child(2){background-image: url("./../assets/images/banner/banner0/main.jpeg")}
  .banner-component>.margin .swiper-slide:nth-child(3){background-image: url("./../assets/images/banner/banner0/main.jpeg")}
  .banner-component>.margin .swiper-pagination{top: 90%;left: 50%}
  .banner-component>.margin .swiper-pagination span{margin: 10px}
  .banner-component>.margin .swiper-button-prev{left: 15px}
</style>

<template>
  <div class="banner-component">
    <div class="margin">
      <el-button class="btn" type="primary" @click="changeRotate">点击切换banner类型</el-button>
      <div class="bg"></div>
      <div class="banner" :style="{transform:'rotate('+rotate+'deg)'}">
        <div class="swiper">
          <!-- Swiper -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" style="position: relative">
                <img style="position: absolute" src="./../assets/images/banner/banner0/c0.png" class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.6s">
                <img style="position: absolute" src="./../assets/images/banner/banner0/c1.png" class="ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.6s">
                <img style="position: absolute" src="./../assets/images/banner/banner0/c2.png" class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="2.5s" swiper-animate-delay="0.6s">
                <img style="position: absolute" src="./../assets/images/banner/banner0/c3.png" class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.6s">
              </div>
              <div class="swiper-slide" style="position: relative">
                <img style="position: absolute" src="./../assets/images/banner/banner0/c0.png" class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.6s">
                <img style="position: absolute" src="./../assets/images/banner/banner0/c1.png" class="ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.6s">
                <img style="position: absolute" src="./../assets/images/banner/banner0/c2.png" class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="2.5s" swiper-animate-delay="0.6s">
                <img style="position: absolute" src="./../assets/images/banner/banner0/c3.png" class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.6s">
              </div>
              <div class="swiper-slide" style="position: relative">
                <img style="position: absolute" src="./../assets/images/banner/banner0/c0.png" class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.6s">
                <img style="position: absolute" src="./../assets/images/banner/banner0/c1.png" class="ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.6s">
                <img style="position: absolute" src="./../assets/images/banner/banner0/c2.png" class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="2.5s" swiper-animate-delay="0.6s">
                <img style="position: absolute" src="./../assets/images/banner/banner0/c3.png" class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.6s">
              </div>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
          <!-- Add Arrows -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        <div class="threeD-wrap">
          <threeD></threeD>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import ThreeD from './../components/threeD'
  export default {
    components:{
      'threeD':ThreeD
    },
    data(){
      return{
        rotate: 0
      }
    },
    mounted(){

      var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        speed:600,
        effect : 'fade',
        fade: {
          crossFade: false,
        },
        on:{
          init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
          }
        }
      });
    },
    methods:{
      changeRotate(){
        // setInterval(()=>{},5000)
        this.rotate+=180
      }
    }
  }
</script>
