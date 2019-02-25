<style>
  #my{
    padding-top: 20px;
    background-color: rgb(244,244,244);
  }
  #my>.margin{
    display: flex;
    margin: 0 auto;
    width: 1130px;
  }
  .my-left{
    width: 210px;
    background-color: rgb(244,244,244);
  }
  .my-right{
    margin-left: 20px;
    flex: 1;
    background-color: rgb(244,244,244);
  }
</style>
<template>
  <div id="my">
    <div class="margin">
      <my-left></my-left>
      <my-right></my-right>
    </div>
  </div>
</template>
<script>
  import MyLeft from './my/my-left'
  import MyRight from './my/my-right'
  export default {
    components:{
      'my-left':MyLeft,
      'my-right':MyRight
    }
  }
</script>
