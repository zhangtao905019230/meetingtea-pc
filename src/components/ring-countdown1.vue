<style>
  .ring-countdown1{border: 1px solid salmon;overflow: hidden;width: 200px;height: 200px;background-color: white;position: relative}
  .ring-countdown1>.wrap{
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    box-shadow: rgba(255,255,255,1) 0px 0px 0px 200px;
    z-index: 100;
  }
  .ring-countdown1>.mask{width: 180px;height: 180px;background-color: rgba(255,255,255,1);border-radius: 50%;position: absolute;top: 10px;left: 10px;z-index: 99}
  .ring-countdown1>ul{top: 0;left: 0;z-index: 98;position: absolute;width: 200px;height: 200px}
  .ring-countdown1>ul>li{
    width: 14px;height: 14px;
    background-color: darkgreen;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    border-radius: 50%;
    transform-origin: 2px 103px;
    z-index: -200;
  }
</style>
<template>
  <div class="ring-countdown1">
    <div class="wrap"></div>
    <div class="mask"></div>
    <ul>
      <li v-for="(i,index) of qiu" :style="{transform: 'translate(5px,-95px) rotate('+i.rotate+'deg)',display: i.display}"></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        qiu:[],
        timer:''
      }
    },
    mounted(){
      for (let i=0;i<360;i++){
        this.qiu.push({rotate:i*1,display:'none'})
      }
      this.fn()
    },
    methods:{
      fn(){
        let i=0;
        let _this = this
        this.timer = setInterval(()=>{
          _this.qiu = []
          for (let j=0;j<360;j++){
            this.qiu.push({rotate:j*1,display:'none'})
          }
          this.qiu[i].display = 'block';
          i++
          if (i>359){
            clearInterval(_this.timer)
          }
          // console.log(i)
        },50)
      }
    }
  }
</script>
