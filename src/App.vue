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
      if(localStorage.getItem('token')!=null){
        AuthService.autoLogin().then(res=>{
          this.$message({
            message: 'token校验通过，自动登录成功！',
            type: 'success'
          });
          this.setUser();
        }).catch(err=>{
          this.$message.error(error);
          this.clearUser();
        })
      }
    },
    methods:{
      ...mapActions(['setUser','clearUser'])
    }
  }
</script>
