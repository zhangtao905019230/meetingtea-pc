<style>
  .setting{
    background-color: white;
    padding: 10px 20px;
  }
</style>
<template>
  <div class="setting">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个人资料" name="first">
        <personal-data></personal-data>
      </el-tab-pane>
      <!--<el-tab-pane label="偏好设置" name="second">偏好设置</el-tab-pane>-->
      <!--<el-tab-pane label="账号安全" name="third">账号安全</el-tab-pane>-->
    </el-tabs>
  </div>
</template>

<script>
  import PersonalData from './setting/personal-data'
  export default {
    components:{
      'personal-data': PersonalData
    },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
