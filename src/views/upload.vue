<style>
  .upload>.margin{
    width: 1130px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .upload>.margin>.left{
    width: 210px;
    /*background-color: skyblue;*/
  }
  .upload>.margin>.right{
    /*background-color: crimson;*/
    width: 900px;
  }
</style>
<template>
  <div class="upload">
    <div class="margin">
      <div class="left">
        <ul>
          <li
            v-for="(item,index) of uploadType"
            :key="index"
            @click="onClickMenu(item.type)">{{item.label}}</li>
        </ul>
      </div>
      <div class="right">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        uploadType:[
          {label:'上传普通笔记',type:'normal'},
          {label:'上传视频笔记',type:'video'}
        ]
      }
    },
    methods:{
      onClickMenu(type){
        this.$router.push({path:'/upload/'+type})
      }
    }
  }
</script>
