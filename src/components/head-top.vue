<style>
  #head-top{
    width: 100%;
    height: 50px;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.04);
  }
  #head-top .margin{
    width: 1130px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #head-top .logo{
    width: 72px;
    height: 25px;
  }
  #head-top .menu-nav{
    display: flex;
    margin-left: 60px;
  }
  #head-top .menu-nav > li{
    width: 110px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #head-top .menu-nav > li > a >i{
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
  }

  /*hover后的样式*/
  #head-top .menu-nav > li > a{
    display: inline-block;
    color: #555;
  }
  #head-top .menu-nav > li >a:hover{
    color: var(--main-color);
  }
  #head-top .menu-nav > li >a:hover>i{
    background-color: var(--main-color)
  }
  /*激活后的样式*/
  #head-top .menu-nav > li > a.active{
    color: var(--main-color);
  }
  #head-top .menu-nav > li > a.active i {
    background-color: var(--main-color);
  }
</style>
<template>
  <div id="head-top">
    <div class="margin" style="position: relative">
      <img src="./../assets/logo.png" alt="" class="logo">
      <ul class="menu-nav">
        <li v-for="(item,index) of menuNavArr" :key="index">
          <a :class="{active:index == activeIndex}" @click="onSelectMenu(index)">
            <span>{{item.name}}</span>
            <i></i>
          </a>
        </li>
      </ul>
      <div class="right">
        <span @click="onClickLogin" v-if="!userInfo.phoneNumber">登录</span>
        <login ref="login" ></login>
        <el-dropdown @command="handleCommand" v-if="userInfo.phoneNumber">
          <span class="el-dropdown-link">
            {{userInfo.phoneNumber}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="personalCenter">个人中心</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions,mapGetters} from 'vuex'
  import Login from './head-top/login'
  export default {
    components:{
      'login': Login
    },
    data(){
      return{
        activeIndex: 0,
        menuNavArr:[
          {name:'首页'},
          {name:'社区精选'},
          {name:'关于我们'},
          {name:'加入我们'},
          {name:'招商合作'},
          {name:'品牌账号'},
        ],

      }
    },
    mounted(){

    },
    methods:{
      ...mapActions(['clearUser']),
      onSelectMenu(index){
        this.activeIndex = index
        if (index == 1){
          this.$router.push({path:'/explorer'})
        }
      },
      onClickLogin(){
        this.$refs.login.dialogVisible = true
      },
      handleCommand(command){
        console.log(command)
        if (command == 'personalCenter'){
          this.$router.push({path:'/my/setting'})
        }else if (command == 'logout'){
          this.clearUser();
          this.$message({
            message: '退出登录成功！',
            type: 'success'
          });
        }
      }
    },
    computed:{
      ...mapGetters(['userInfo'])
    }
  }
</script>
