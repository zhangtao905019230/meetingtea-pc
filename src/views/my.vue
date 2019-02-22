<style>
  #my{
    padding-top: 20px;
    background-color: rgb(244,244,244);
  }
  .container-area{
    display: flex;
    margin: 0 auto;
    width: 1130px;
  }
  .container-area-left{
    width: 210px;
    background-color: rgb(244,244,244);
  }
  .container-area-right{
    margin-left: 20px;
    flex: 1;
    background-color: rgb(244,244,244);
  }
</style>
<template>
  <div id="my">
    <div class="container-area">
      <container-area-left></container-area-left>
      <container-area-right>
      </container-area-right>
    </div>
  </div>
</template>
<script>
  import ContainerAreaLeft from './my/container-area-left'
  import ContainerAreaRight from './my/container-area-right'
  export default {
    components:{
      'container-area-left':ContainerAreaLeft,
      'container-area-right':ContainerAreaRight
    }
  }
</script>
