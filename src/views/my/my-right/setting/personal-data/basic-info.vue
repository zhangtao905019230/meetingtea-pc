<style>
</style>
<template>
  <div class="basic-info">
    <div style="text-align: right">
      <el-button type="primary" @click="onSave" >保存</el-button>
    </div>
    <el-form :model="ruleForm" :rules="rules">
      <el-form-item prop="email" label="邮箱" label-width="80px">
        <el-input style="width: 300px" v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item prop="sex" label="性别" label-width="80px">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio :label="0">男</el-radio>
          <el-radio :label="1">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="hometown" label="家乡" label-width="80px">
        <el-cascader
          style="width: 300px"
          :options="cityOption"
          v-model="ruleForm.hometown"
          :props="{label:'name',value:'id'}"
          @change="handleChange">
        </el-cascader>
      </el-form-item>
      <el-form-item prop="nowLiving" label="现居" label-width="80px">
        <el-cascader
          style="width: 300px"
          :options="cityOption"
          v-model="ruleForm.nowLiving"
          :props="{label:'name',value:'id'}"
          @change="handleChange">
        </el-cascader>
      </el-form-item>
      <el-form-item prop="signature" label="签名" label-width="80px">
        <el-input style="width: 300px" v-model="ruleForm.signature"></el-input>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
  import CityService from './../../../../../service/city'
  import UserService from './../../../../../service/user'
  import {mapGetters,mapActions} from 'vuex'
  export default {
    data() {
      return {
        cityOption:[],
        ruleForm: {
          email: '',
          sex: 0,
          hometown: null,
          nowLiving: null,
          signature: ''
        },
        rules: {
          email:[
            { required: true, message: '请输入邮箱', trigger: 'blur' }
          ]
        }
      }
    },
    mounted() {
      CityService.getAll().then(res => {
        this.cityOption = res.data.data.china.byProvince
      });
      this.initRuleForm()
    },
    methods: {
      ...mapActions(['login']),
      handleChange(val){
      },
      onSave(){
        UserService.updateUser(this.ruleForm).then(res=>{
          this.$message({
            message: res.msg,
            type: 'success'
          })
        }).catch(err=>{
          this.$message.error(err)
        })
      },
      initRuleForm(){
        UserService.getUserInfo().then(res=>{
          this.ruleForm = {
            email: res.user_email,
            sex: res.user_sex,
            hometown: null,
            nowLiving: null,
            signature: res.user_intro
          }
        })
      }
    },
    computed:{
      ...mapGetters(['userInfo'])
    }
  }
</script>
