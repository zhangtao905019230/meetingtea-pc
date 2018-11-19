<style>
  .tab-nav{
    margin-bottom: 20px;
  }
  .tn-largeclass-list{
    display: flex;
    justify-content: space-between;
  }
  .tn-largeclass-list>li{
    height: 20px;
    border-bottom: 3px solid white;
    font-size: 14px;
    font-weight: 700;
    color: black;
    text-align: center;
  }
  .tn-largeclass-list>li:hover{
    border-bottom: 3px solid #b4a078;
    color: #b4a078;
    cursor: pointer;
  }

  .tn-largeclass-list>li.active{
    border-bottom: 3px solid #b4a078;
    color: #b4a078;
    cursor: pointer;
  }
</style>
<template>
  <div class="tab-nav">
    <div class="margin">
      <ul class="tn-largeclass-list">
        <li v-for="(item,index) of navLists" :class="{active:item.isActive}" @click="goTo(item.path,index)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        navLists:[
          {'name':'首页','path':'home','isActive':false},
          {'name':'红茶','isActive':false},
          {'name':'绿茶','isActive':false},
          {'name':'黑茶','isActive':false},
          {'name':'白茶','isActive':false},
          {'name':'乌龙茶','isActive':false},
          {'name':'黄茶','isActive':false},
          {'name':'花茶','isActive':false},
          {'name':'茶具','isActive':false},
          {'name':'茶文化','path':'tea-culture','isActive':false}
        ]
      }
    },
    methods:{
      goTo(path,index){
        this.navLists.forEach((value, index, array)=>{
          value.isActive=false
        })
        this.navLists[index].isActive=true
        this.$router.push({path:path})
      }
    }
  }
</script>
