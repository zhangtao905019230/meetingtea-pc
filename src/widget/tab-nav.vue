<style>
  .tn-largeclass-list{
    display: flex;
  }
  .tn-largeclass-list>li{
    width: 76px;
    height: 20px;
    border-bottom: 3px solid white;
    font-size: 14px;
    font-weight: 700;
    color: black;
    text-align: center;
    /*b4a078*/
  }
  .tn-largeclass-list>li:hover{
    border-bottom: 3px solid #b4a078;
    color: #b4a078;
    cursor: pointer;
  }
  .tn-largeclass-list>li:nth-child(6){
    border-right: 1px solid #e4e4e4;
  }
</style>
<template>
  <div class="tab-nav">
    <div class="margin-1090">
      <ul class="tn-largeclass-list">
        <li v-for="(item,index) of navLists" @click="goTo(item.path)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        navLists:[
          {'name':'首页','path':'home'},
          {'name':'红茶'},
          {'name':'绿茶'},
          {'name':'黑茶'},
          {'name':'乌龙茶'},
          {'name':'黄茶'},
          {'name':'茶具'},
          {'name':'茶文化','path':'tea-culture'}
        ]
      }
    },
    methods:{
      goTo(path){
        this.$router.push({path:path})
      }
    }
  }
</script>
