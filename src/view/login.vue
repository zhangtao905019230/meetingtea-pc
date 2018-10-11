<style>
  .login-margin{width: 990px;margin: 0 auto}
  #login>.header>.logo>.login-margin{display: flex;align-items: center;height: 120px}
  #login>.header>.logo>.login-margin>img{height: 80px;cursor: pointer}
  #login>.header>.logo>.login-margin>span{font-size: 25px}
  #login>.header>.tips{background-color: #fff8f0}
  #login>.header>.tips>.login-margin>p{font-size: 12px;color: #999;line-height: 39px;text-align: center}
  #login>.main{background-color: #ed3e26;height: 475px}
  #login>.main>.login-margin{height: 475px;background-image: url("https://img10.360buyimg.com/da/jfs/t1/156/38/10083/86438/5bad80c2E3814ad9f/0b4487b214da36f2.jpg")}
  #login>.main>.login-margin>.login-wrap{width: 346px;float: right;margin-top: 10px;background-color: white}
  #login>.main>.login-margin>.login-wrap>.tips{font-size: 12px;color: #999;line-height: 39px;text-align: center;background-color: #fff8f0}
  #login>.main>.login-margin>.login-wrap>.coagent{
    display: flex;
    height: 50px;
    align-items: center;
    padding: 0 20px 0 20px;
    border-top: 1px solid #f4f4f4;
    justify-content: space-between;
  }
  #login>.main>.login-margin>.login-wrap>.coagent>div{display: flex}
  #login>.main>.login-margin>.login-wrap>.coagent>div>a{display: flex;align-items: center;color: #666}
  #login>.main>.login-margin>.login-wrap>.coagent>div>a>img{margin-right: 5px}
  #login>.main>.login-margin>.login-wrap>.coagent>span:nth-child(2){color: #b61d1d;cursor: pointer}
  #login>.main>.login-margin>.login-wrap>.login-form>ul{
    border-bottom: 1px solid #f4f4f4;
    font-size: 18px;
    color: #666;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    line-height: 55px;
    /*font-weight: 700;*/
  }
  #login>.main>.login-margin>.login-wrap>.login-form>ul>li:hover{
    font-weight: 700;
    color: #e4393c;
    cursor: pointer;
  }
  #login>.main>.login-margin>.login-wrap>.login-form>ul>li.active{
    font-weight: 700;
    color: #e4393c;
  }
  #login>.main>.login-margin>.login-wrap>.login-form .el-button{
    background-color: #e4393c;
    border: 1px solid #e85356;
    color: white;
    width: 300px;
    /*margin-left: 55px;*/

  }

</style>
<template>
  <div id="login">
    <div class="header">
      <div class="logo">
        <div class="login-margin">
          <img @click="goTo('/main/home')" src="./../assets/logo1.png"/>
          <span>{{$t("login.welcome.landing")}}</span>
        </div>
      </div>
      <div class="tips">
        <div class="login-margin">
          <p>{{$t("login.tips")}}</p>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="login-margin">
        <div class="login-wrap">
          <p class="tips">{{$t("login.form.tips")}}</p>
          <div class="login-form">
            <ul>
              <li @click="ishow(0)" :class="{active:isShowQrcodeLogin}">{{$t("login.scavenging.login")}}</li>
              <li style="color: #f4f4f4;font-weight: 100" >丨</li>
              <li @click="ishow(1)" :class="{active:isShowLoginBox}">{{$t("login.account.login")}}</li>
            </ul>
            <div class="qrcode-login" style="padding: 30px 20px 30px 20px" v-show="isShowLoginBox">
              <el-form>
                <el-form-item>
                  <el-input v-model="user_name" style="width: 300px" :placeholder="$t('login.username.placeholder')"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input v-model="user_password" type="password" style="width: 300px" :placeholder="$t('login.password.placeholder')"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button @click="goHome">{{$t('login.login.btn')}}</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="login-box" v-show="isShowQrcodeLogin" style="text-align: center">
              <img src="./../assets/images/show.png" alt="" style="margin: 10px 0 10px 0">
              <p style="text-align: center;margin: 10px 0 10px 0">{{$t("login.scavenging.tips")}}</p>
            </div>
          </div>
          <div class="coagent">
            <div>
              <a href="###"><img width="20" src="./../assets/icon/qq.png" alt="">QQ</a>
              <span style="color: #666">丨</span>
              <a href="###"><img width="20" src="./../assets/icon/weixin.png" alt="">{{$t('login.weixin')}}</a>
            </div>
            <span class="iconfont icon-you-yuan" @click="goReg">{{$t('login.immediate.registration')}}</span>
          </div>
        </div>
      </div>
    </div>
    <end></end>
  </div>
</template>
<script>
  import End from './../components/end'
  import UserInfo from './../service/user-info'
  import {mapActions,mapGetters} from 'vuex'
  export default {
    components:{
      'end': End
    },
    data(){
      return{
        isShowQrcodeLogin:true,
        isShowLoginBox:false,
        user_name: "",
        user_password: ""
      }
    },
    methods:{
      ...mapActions(['userLogin']),
      ishow(val){
        if (val == 0){
          this.isShowQrcodeLogin = true
          this.isShowLoginBox = false
        } else {
          this.isShowQrcodeLogin = false
          this.isShowLoginBox = true
        }
      },
      goTo(path){
        this.$router.push({path:path})
      },
      goHome(){
        let val = {user_name: this.user_name,user_password:this.user_password}
        UserInfo.ValidateLogon(this.dataInterface,val)
          .then(res => {
              if (res.success == false){
                this.$message('账号密码错误')
              }else {
                this.userLogin(res)
                this.$router.push({path:'/main/home'})
              }
            }
          )
      },
      goReg(){
        this.$router.push({path:'/reg'})
      }
    }
  }
</script>
