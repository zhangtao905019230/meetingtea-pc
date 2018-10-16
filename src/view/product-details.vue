<style>
  #product-details>.margin>.top{display: flex}
</style>
<template>
  <div id="product-details">
    <div class="margin">
      <div class="top">
        <magnifier :image-preview="teaDetail.figure_img"></magnifier>
        <proinfo-main :tea-detail="teaDetail"></proinfo-main>
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
        teaDetail:{

        }
      }
    },
    mounted(){
      console.log(this.$route.query)
      this.teaDetail = this.$route.query
    }
  }
</script>
