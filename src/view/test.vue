<template>
  <div>
    <div style="background-color: salmon" @mouseover="fn1" @mouseleave="fn2">Click Me</div>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" style="font-family:'微软雅黑'" class="transition-box">.el-fade-in</div>
      </transition>
      <p></p>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      show: true
    }),
    methods:{
      fn1(){
        this.show = true;
        console.log(this.show);
      },
      fn2(){
        this.show = false;
        console.log(this.show);
      }
    }
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
