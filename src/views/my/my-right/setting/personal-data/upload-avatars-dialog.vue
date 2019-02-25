<style scoped>
  .box{
    width: 300px;
    height: 300px;
  }
  .cropper-wrap{
    display: flex;
  }
  .right{
    margin-left: 14px;
    display: block;
  }
  .right p{
    text-align: center;margin-top: 14px
  }
  .small{
    width: 120px;height: 120px;overflow: hidden;border-radius: 50%
  }
</style>
<template>
  <el-dialog
    title="上传头像"
    :visible.sync="dialogVisible"
    width="500px"
    :before-close="handleClose"
    @opened="initCropper">
    <div class="cropper-wrap" :style="{opacity: isShowCropper}">
      <div class="left">
        <div class="box">
          <img id="image" src="http://localhost:3030/uploads/bd_logo1.png">
        </div>
        <div class="tools">
          <span>重新上传</span>
        </div>
      </div>
      <div class="right">
        <div class="small"></div>
        <p>头像预览</p>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="uploadAvatars">确 定</el-button>
        </span>
  </el-dialog>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        dialogVisible: false,
        isShowCropper:0,
        $image:null
      }
    },
    mounted(){

    },
    props:['avatarsParam'],
    methods:{
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      initCropper(){
        this.$image = $('#image');
        this.$image.cropper({
          aspectRatio: 1,
          preview:".small",
          responsive:false,
          crop: function(event) {},
          ready: () => {
            this.isShowCropper = 1
          }
        });
        setTimeout(()=>{
          this.$image.cropper('setData',JSON.parse(this.avatarsParam))
          console.log(this.avatarsParam)
        },500)
      },
      openDialog(){
        this.dialogVisible = true;
      },
      uploadAvatars(){
        let avatarsDOM = $('.small').html()
        let avatarsParam = this.$image.cropper('getData', true)

        axios.get('http://localhost:3030/test/up',{params:{avatarsDOM,avatarsParam}}).then(res=>{
          console.log(1)
        })

        this.dialogVisible = false;
        this.$emit('giveData',avatarsDOM)
      }
    }
  }
</script>
