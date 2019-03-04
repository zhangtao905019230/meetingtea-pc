<style scoped>
  .personal-data img {
  }
  .user-avatars{
    margin-top: 20px;
  }
  .user-avatars .wrap{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
  }
  .user-avatars .wrap img{
    display: block;
  }
  .user-avatars .wrap span{
    display: none;
  }
  .user-avatars .wrap:hover span{
    cursor: pointer;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);
    position: absolute;
    color: white;
    text-align: center;
    line-height: 120px;
  }
</style>
<template>
  <div class="personal-data">
    <div class="user-avatars">
      <div class="wrap" @click="openUploadAvatarsDialog">
        <span>修改头像</span>
        <div v-html="avatarsDOM"></div>
      </div>
      <upload-avatars-dialog :avatarsParam="avatarsParam" @giveData="getCropperData" ref="uploadAvatarsDialog"></upload-avatars-dialog>
    </div>
    <p style="text-align: center;line-height: 2">zhangtao25</p>

    <el-collapse v-model="activeNames">
      <el-collapse-item title="基本信息" name="basicInfo">
        <basic-info></basic-info>
      </el-collapse-item>
    </el-collapse>

  </div>
</template>
<script>
  import UploadAvatarsDialog from './personal-data/upload-avatars-dialog'
  import BasicInfo from './personal-data/basic-info'

  import axios from 'axios'
  export default {
    components:{
      'upload-avatars-dialog': UploadAvatarsDialog,
      'basic-info': BasicInfo
    },
    data(){
      return{
        avatarsDOM:'',
        avatarsParam:'',
        activeNames:'basicInfo'
      }
    },
    mounted(){
      // axios.get('/api/user/avatars').then(res=>{
      //   console.log(res.data)
      //   this.avatarsDOM = res.data.avatarsDOM
      //   this.avatarsParam = res.data.avatarsParam
      // })
    },
    methods:{
      openUploadAvatarsDialog(){
        this.$refs.uploadAvatarsDialog.openDialog();
      },
      getCropperData(val){
        this.avatarsDOM = val
      }
    }
  }
</script>
