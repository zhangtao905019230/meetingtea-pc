<style>
  .small-color-block-title{display: flex;align-items: center}
  .small-color-block-title>span{display: block;width: 8px;height: 22px;margin-right: 8px}
</style>
<template>
  <div class="small-color-block-title">
    <span :style="{backgroundColor:spanBgc}"></span>
    <p style="font-size: 22px;line-height: 44px">{{title}}</p>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    props:['spanBgc','title']
  }
</script>
