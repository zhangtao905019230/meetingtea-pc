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
    width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
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
    color: #f15467;
  }
  #head-top .menu-nav > li >a:hover>i{
    background-color: #f15467
  }
  /*激活后的样式*/
  #head-top .menu-nav > li > a.active{
    color: #f15467;
  }
  #head-top .menu-nav > li > a.active i {
    background-color: #f15467;
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
        <span @click="onClickLogin">登录</span>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            zhangtao25<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="personalCenter">个人中心</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>


    </div>
    <el-dialog
      title="登录"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      :append-to-body="true">
      <div style="text-align: center">
        <el-form style="text-align: center">
          <el-form-item>
            <el-input style="width: 272px" v-model="ruleForm.phoneNumber"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input style="width: 272px" v-model="ruleForm.password"></el-input>
          </el-form-item>
        </el-form>
        <el-button style="width: 272px" type="primary" @click="onClickLoginBtn(ruleForm.phoneNumber,ruleForm.password)">登录</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import AuthService from './../service/auth'
  export default {
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
        dialogVisible:false,
        ruleForm:{
          phoneNumber:'',
          password:''
        }
      }
    },
    methods:{
      onSelectMenu(index){
        this.activeIndex = index
        console.log(index)
        if (index == 1){
          this.$router.push({path:'/explorer'})
        }
      },
      onClickLogin(){
        this.dialogVisible = true
      },
      onClickLoginBtn(phoneNumber,password){
        AuthService.login(phoneNumber,password).then(res=>{
          console.log(res)
        })
      },
      handleCommand(command){
        console.log(command)
        if (command == 'personalCenter'){
          this.$router.push({path:'/my/setting'})
        }
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>
