<style>

</style>
<template>
  <div id="product-details">
    <div class="margin">
      <div class="top">
        <magnifier></magnifier>
        <proinfo-main></proinfo-main>
      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>
<script>
  import Magnifier from './../components/magnifier'
  import ProinfoMain from './../components/proinfo-main'
  export default {
    components:{
      'magnifier': Magnifier,
      'proinfo-main': ProinfoMain
    },
    data(){
      return{

      }
    }
  }
</script>
