<style>
</style>
<template>
  <div class="basic-info">
    <div style="text-align: right">
      <el-button type="primary">保存</el-button>
    </div>
    <el-form :model="ruleForm" :rules="rules">
      <el-form-item prop="phoneNumber" label="手机号" label-width="80px">
        <el-input style="width: 300px" v-model="ruleForm.phoneNumber"></el-input>
      </el-form-item>
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

  export default {
    data() {
      return {
        cityOption:[],
        ruleForm: {
          phoneNumber: '18158899797',
          email: '18158899797@163.com',
          sex: 0,
          hometown: null,
          nowLiving: null,
          signature: ''
        },
        rules: {
          phoneNumber:[
            { min: 11, max: 11, required: true, message: '请输11位入手机号', trigger: 'blur' }
          ],
          email:[
            { required: true, message: '请输入邮箱', trigger: 'blur' }
          ]
        }
      }
    },
    mounted() {
      CityService.getAll().then(res => {
        this.cityOption = res.data.data.china.byProvince
        // console.log(res.data.data.china.byProvince)
      })
    },
    methods: {
      handleChange(val){
        console.log(val,111)
      }
    }
  }
</script>
