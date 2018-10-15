<style>
  #reg>.top{height: 110px;box-shadow: 5px 5px 10px #ccc}
  #reg>.top>.margin>img{height: 80px;}
  #reg>.main{padding-top: 110px}
  #reg>.main>.margin{width: 400px}
  .mobile-phone-verification input{margin: 20px 0 0 }
  .mobile-phone-verification button{width: 400px}
  .account-info{padding-top: 20px}
  .account-info button{width: 400px}
  .successful-registration p{margin: 20px 0;color:rgb(90,157,248);font-size: 25px;text-align: center;width: 100%}
  .successful-registration button{width: 400px}
</style>
<template>
  <div id="reg">
    <div class="top">
      <div class="margin">
        <img src="./../assets/logo1.png"/>
        <span>{{$t("reg.welcome.reg")}}</span>
      </div>
    </div>
    <div class="main">
      <div class="margin">
        <el-steps :active="activeSteps">
          <el-step title="验证手机号"></el-step>
          <el-step title="填写账号信息"></el-step>
          <el-step title="注册成功"></el-step>
        </el-steps>
        <div class="mobile-phone-verification" v-show="isShow[0]">
          <el-form :model="ruleForm0" :rules="rules0" ref="ruleForm0">
            <el-form-item prop="phone_number">
              <el-input v-model="ruleForm0.phone_number" placeholder="建议使用常用手机"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="nextStep('ruleForm0')">下一步</el-button>
            </el-form-item>
          </el-form>

        </div>
        <div class="account-info" v-show="isShow[1]">
          <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1">
            <el-form-item prop="user_name">
              <el-input v-model="ruleForm1.user_name" placeholder="用户名：您的账号名和登录名"></el-input>
            </el-form-item>
            <el-form-item prop="user_password">
              <el-input type="password" v-model="ruleForm1.user_password" placeholder="设置密码：建议使用两种以上字符组合"></el-input>
            </el-form-item>
            <el-form-item prop="user_password_again">
              <el-input type="password" v-model="ruleForm1.user_password_again" placeholder="确认密码：请再次输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="mailbox">
              <el-input v-model="ruleForm1.mailbox" placeholder="邮箱验证:请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="touxiang">
              <el-upload
                class="upload-demo"
                action="/"
                :http-request="httpRequest"
                :on-success="success"
                :file-list="fileList"
                :before-remove="beforeRemove"
                :on-exceed="onExceed"
                :limit="1"
                list-type="picture-card">
                <i class="el-icon-plus"></i>
                <el-input type="text" v-model="ruleForm1.touxiang" v-show="false"></el-input>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button @click="immediateRegistration('ruleForm1')">立即注册</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="successful-registration" v-show="isShow[2]">
          <p class="el-icon-success">注册成功</p>
          <el-button @click="goLogin">前往登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import aixos from 'axios'
  import UserInfo from './../service/user-info'
  export default {
    data(){
      let _this=this
      return{
        activeSteps:1,
        ruleForm0:{
          phone_number:""
        },
        rules0:{
          phone_number:[
            { min: 11, max: 11, message: '长度为11个数字', change: 'blur',required:true }
            ]
        },
        ruleForm1:{
          user_name:"",
          user_password:"",
          user_password_again:"",
          mailbox:"",
          touxiang:""
        },
        rules1:{
          user_name:[
            { min: 4, max: 16, message: '长度在 4 到 16 个字符' , change: 'blur', required:true}
          ],
          user_password:[
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', change:'blur', required:true}
          ],
          user_password_again:[
            {
              validator:function (rule, value, callback) {
                if (value === '') {
                  callback(new Error('请再次输入密码'));
                } else if (value !== _this.ruleForm1.user_password) {
                  callback(new Error('两次输入密码不一致!'));
                } else {
                  callback();
                }
              },
              change:'blur'
            },
            ],
          mailbox:[
            {
              validator:function (rule, value, callback) {
                let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                if (ePattern.test(value)){
                  callback();
                } else {
                  callback(new Error('邮箱格式错误'))
                }
              },
              change:'blur'
            }
          ],
          touxiang:[{required:true}]
        },
        fileList: []
      }
    },
    methods:{
      nextStep(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.activeSteps=2
          } else {
            return false;
          }
        });
      },
      immediateRegistration(formName){
        let _this=this
        let mainForm = {
          phone_number:_this.ruleForm0.phone_number,
          user_name:_this.ruleForm1.user_name,
          user_password:_this.ruleForm1.user_password,
          mailbox:_this.ruleForm1.mailbox,
          touxiang:_this.ruleForm1.touxiang
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            UserInfo.RegisteredAccount(_this.dataInterface,mainForm).then((res)=>{
              console.log(res)
              if (res.success==true){
                this.activeSteps=3
              }
            })
          } else {
            return false;
          }
        });
      },
      goLogin(){
        this.$router.push({path:'/login'})
      },
      success(val){
        console.log(val)
        this.ruleForm1.touxiang = val
      },
      httpRequest(val){
        let _this = this
        var formdata = new FormData();
        formdata.append('file',val.file);
        formdata.append('action','test');
        aixos.post(_this.dataInterface+":3030/user/touxiang",formdata)
          .then(res => {
            // console.log(res)
            if (res.data.success==true){
              val.onSuccess(res.data.headPortraitPath)
            }

          })
      },
      beforeRemove(){
        alert("还不支持删除")
        return false
      },
      onExceed(files, fileList){
        // console.log(files,fileList)
        this.$message({
          showClose: true,
          message: '只能上传一张图片哦😅',
          type: 'error'
        });
      }
    },
    computed:{
      isShow(){
        if (this.activeSteps==1){
          return [true,false,false]
        } else if (this.activeSteps==2){
          return [false,true,false]
        } else {
          return [false,false,true]
        }
      }
    }
  }
</script>
