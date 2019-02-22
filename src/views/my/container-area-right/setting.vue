<style>
  .setting .el-tabs__item{
    color: #999;
    line-height: 65px;
    height: 65px;
    font-size: 16px;
    font-weight: normal;
  }
  .setting .el-tabs__item.is-active{
    color: #333;
  }
  .setting .el-tabs__active-bar{
    background-color: #333;
  }
</style>
<style scoped>
  .setting{
    background-color: white;
    padding: 0 30px;
  }
</style>
<template>
  <div class="setting">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个人资料" name="first">
        <personal-data></personal-data>
      </el-tab-pane>
      <el-tab-pane label="偏好设置" name="second">偏好设置</el-tab-pane>
      <el-tab-pane label="账号安全" name="third">账号安全</el-tab-pane>
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
