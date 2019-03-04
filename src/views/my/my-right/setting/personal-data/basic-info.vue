<template>
  <div class="basic-info">
    <div style="text-align: right">
      <el-button type="primary" @click="onSave" >保存</el-button>
    </div>
    <el-form :model="ruleForm" :rules="rules">
      <el-form-item prop="user_email" label="邮箱" label-width="80px">
        <el-input style="width: 300px" v-model="ruleForm.user_email"></el-input>
      </el-form-item>
      <el-form-item prop="user_sex" label="性别" label-width="80px">
        <el-radio-group v-model="ruleForm.user_sex">
          <el-radio :label="0">男</el-radio>
          <el-radio :label="1">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="user_address" label="现居" label-width="80px">
        <el-cascader
          style="width: 300px"
          :options="cityOption"
          v-model="ruleForm.user_address"
          :props="{label:'name',value:'id'}">
        </el-cascader>
      </el-form-item>
      <el-form-item prop="user_introduce" label="签名" label-width="80px">
        <el-input style="width: 300px" v-model="ruleForm.user_introduce"></el-input>
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
          'user_nikename':'',
          'user_address':[],
          'user_email': '',
          'user_sex': 0,
          'user_introduce': '',
          'user_birthday': ''
        },
        rules: {
          user_email:[
            { required: true, message: '请输入邮箱', trigger: 'blur' }
          ]
        }
      }
    },
    props:['basicInfoRuleForm'],
    mounted() {
      CityService.getAll().then(res => {
        this.cityOption = res.data.data.china.byProvince
      });
    },
    methods: {
      onSave(){
        UserService.updateUser(this.ruleForm).then(res=>{
          this.$message({
            message: res.msg,
            type: 'success'
          })
        }).catch(err=>{
          this.$message.error(err)
        })
      }
    },
    watch:{
      basicInfoRuleForm(val){
        this.ruleForm = {
          'user_nikename':this.basicInfoRuleForm.user_nikename,
            'user_address':this.basicInfoRuleForm.user_address,
            'user_email': this.basicInfoRuleForm.user_email,
            'user_sex': this.basicInfoRuleForm.user_sex,
            'user_introduce': this.basicInfoRuleForm.user_introduce,
            'user_birthday': this.basicInfoRuleForm.user_birthday
        }
      }
    }
  }
</script>
