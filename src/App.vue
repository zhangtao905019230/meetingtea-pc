<style>
  #app{
    padding-top: 50px;
  }
</style>
<template>
  <div id="app">
    <head-top></head-top>
    <router-view/>
  </div>
</template>
<script>
  import HeadTop from './components/head-top'
  export default {
    components:{
      'head-top': HeadTop
    }
  }
</script>
