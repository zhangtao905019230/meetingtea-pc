<template>
  <div class="normal">
    <el-upload
      ref="upload"
      action=""
      :http-request="uploadNote"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :multiple="true"
      :auto-upload="false">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>

    <el-form :model="ruleForm" :rules="rules">
      <el-form-item prop="desc" label="描述" label-width="80px">
        <el-input style="width: 300px" v-model="ruleForm.desc"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="sub">上传</el-button>
  </div>
</template>
<script>
  // import axios from 'axios'
  import NoteService from './../../service/note'
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        ruleForm:{
          desc:''
        },
        rules:{},
        fileList:[]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      uploadNote(val){
        this.fileList.push(val.file)
      },
      sub(){
        this.$refs.upload.submit();
        let noteForm = {
          noteId: '123',
          desc: this.ruleForm.desc
        };
        let formData = new FormData();
        this.fileList.forEach((item)=>{
          formData.append('note', item,item.name);
        });
        formData.append('noteForm', JSON.stringify(noteForm));
        NoteService.upLoadNote(formData).then(res=>{
          console.log(res)
        })
      }
    }
  }
</script>
