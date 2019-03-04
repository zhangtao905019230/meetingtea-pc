<style scoped>
  .my-left .personal-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px 20px 20px;
    background-color: white;
    border-radius: 4px;
  }
  .my-left .avatar-container{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
  }
  .my-left .presonal-info{
    margin-top: 16px;
  }
  .my-left .presonal-info a{
    color: #333;
    font-size: 16px;
    font-weight: 600;
  }
  .my-left .presonal-info a:hover{
    color: var(--main-color);
  }
  .my-left .position-info span {
    font-size: 12px;
    color: #bbb;
  }
  .my-left .btn-area{
    width: 100%;
    margin-top: 20px;
  }

  .my-left .personal-menu{
    margin-top: 10px;
    background-color: white;
    border-radius: 4px;
    padding: 10px;
  }
  .my-left .personal-menu .el-menu{
    border-right: none;
  }
</style>
<template>
  <div class="my-left">
    <div class="personal-card">
      <!--<div class="avatar-container" v-html="basicInfo.avatarsDOM">-->
      <!--</div>-->
      <div class="presonal-info">
        <a href="">zhangtao25</a>
      </div>
      <div class="position-info">
        <span>上海&nbsp;|&nbsp;设计爱好者</span>
      </div>
      <div class="btn-area">
        <el-button style="width: 100%;padding: 10px 20px" type="primary">开始创作</el-button>
      </div>
    </div>
    <div class="personal-menu">
      <el-menu
        default-active="4"
        @select="onSelectMenu">
        <el-menu-item
          :index="index.toString()"
          v-for="(item,index) of menuArr"
          :key="index">
          <i :class="['iconfont',item.icon]" style="margin-right: 14px"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return{
        src:'https://img.zcool.cn/community/0150145c696f4ca801203d22de704b.jpg@80w_80h_1c_1e_1o_100sh.jpg',
        menuArr:[
          {name:'我的关注',path:'/focus',icon:'icon-focus'},
          {name:'我的创作',path:'/works',icon:'icon-works'},
          {name:'我的收藏',path:'/collections',icon:'icon-collections'},
          {name:'我的统计',path:'/statistics',icon:'icon-statistics'},
          {name:'资料与账号',path:'/setting',icon:'icon-setting'},
        ],
      }
    },
    methods:{
      onSelectMenu(index){
        console.log(index)
        this.$router.push({path:'/my'+this.menuArr[index]['path']})
      }
    },
    computed:{
      ...mapGetters(['basicInfo'])
    }
  }
</script>
