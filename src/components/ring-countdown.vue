<style>
  .ring-countdown{position: relative;border: 1px solid salmon;width: 200px;height: 200px}
  .ring-countdown>.wrap{display: flex;width: 200px;border-radius: 50%;overflow: hidden;z-index: -101;position: absolute}
  .ring-countdown>.wrap>div{width: 100px;height: 200px;}
  .ring-countdown>.wrap>div:nth-child(1){background-color: #fff;transform-origin: 100px 100px}
  .ring-countdown>.wrap>div:nth-child(2){background-color: #5daf34;transform-origin: 0px 100px;z-index: -100}
  .ring-countdown>.mask{width: 180px;height: 180px;background-color: rgba(0,0,0,0);border-radius: 50%;position: absolute;top: 10px;left: 10px}
</style>
<template>
  <div class="ring-countdown">
    <div class="wrap" :style="{backgroundColor:wrapColor}">
      <div :style="{transform:'rotate('+rotateDegDiv1+'deg)'}"></div>
      <div :style="{transform:'rotate('+rotateDegDiv2+'deg)','z-index': ZIndexDiv2}"></div>
    </div>
    <div class="mask">

    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        wrapColor:'#fff',
        rotateDegDiv1:'0',
        rotateDegDiv2:'180',
        ZIndexDiv2:'-100',
        timer:'',
        off:true
      }
    },
    mounted(){
      this.fn();
    },
    methods:{
      fn(){
        let _this = this
        this.timer = setInterval(()=>{
          this.rotateDegDiv2++;
          if (this.rotateDegDiv2==360){
            this.ZIndexDiv2 = '100'
            this.wrapColor = '#5daf34'
          }else if (this.rotateDegDiv2==540) {
            clearInterval(_this.timer)
          }
        },50)
      }
    }
  }
</script>
