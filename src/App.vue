<style>
  #app{
    padding-top: 50px;
  }
  :root{
    --main-color: #409EFF
  }
</style>
<template>
  <div id="app">
    <p>dskjhckdsjhk</p>
    <head-top></head-top>
    <router-view/>
  </div>
</template>
<script>
  import HeadTop from './components/head-top'
  import AuthService from './service/auth'
  import {mapActions} from 'vuex'
  export default {
    components:{
      'head-top': HeadTop
    },
    mounted(){

    },
    methods:{
      ...mapActions(['setUser','clearUser'])
    }
  }
</script>
