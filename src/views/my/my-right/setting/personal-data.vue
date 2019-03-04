<template>
  <div class="personal-data">
    <div class="user-avatars">
      <div class="wrap" @click="openUploadAvatarsDialog">
        <span>修改头像</span>
        <div v-html="user_avatar.avatarsDOM"></div>
      </div>
      <upload-avatars-dialog
        :avatarsParam="user_avatar.avatarsParam"
        @update="updateData"
        ref="uploadAvatarsDialog"></upload-avatars-dialog>
    </div>
    <p style="text-align: center;line-height: 2">zhangtao25</p>

    <el-collapse v-model="activeNames">
      <el-collapse-item title="基本信息" name="basicInfo">
        <basic-info :basic-info-rule-form="basicInfoRuleForm"></basic-info>
      </el-collapse-item>
    </el-collapse>

  </div>
</template>
<script>
  import UploadAvatarsDialog from './personal-data/upload-avatars-dialog'
  import BasicInfo from './personal-data/basic-info'
  import UserService from './../../../../service/user'

  export default {
    components:{
      'upload-avatars-dialog': UploadAvatarsDialog,
      'basic-info': BasicInfo
    },
    data(){
      return{
        avatarsDOM:'',
        avatarsParam:'',
        activeNames:'basicInfo',
        user_avatar:{
          avatarsDOM:'',
          avatarsParam:{}
        },
        basicInfoRuleForm:{
          'user_nikename':'',
          'user_address':[],
          'user_email': '',
          'user_sex': 0,
          'user_introduce': '',
          'user_birthday': ''
        }
      }
    },
    mounted(){
      this.init()
    },
    methods:{
      init(){
        UserService.getUserInfo().then(res=>{
          this.user_avatar = {
            avatarsDOM:JSON.parse(res.user_avatar).avatarsDOM,
            avatarsParam:JSON.parse(res.user_avatar).avatarsParam
          };
          this.basicInfoRuleForm={
            'user_nikename':res.user_nikename,
            'user_address':res.user_address,
            'user_email': res.user_email,
            'user_sex': res.user_sex,
            'user_introduce': res.user_introduce,
            'user_birthday': res.user_birthday
          }
        })
      },
      openUploadAvatarsDialog(){
        this.$refs.uploadAvatarsDialog.openDialog();
      },
      updateData(val){
        this.user_avatar = val.user_avatar;
      }
    }
  }
</script>

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
