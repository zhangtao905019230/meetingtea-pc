<style>
  .tc-row{

  }
  .tc-row>.hd{
    /*width: 100%;*/
    height: 60px;
    /*background-color: skyblue;*/
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tc-row>.hd>span{
    font-size: 28px;
    color: #333;
  }
  .tc-row>.hd>a{
    font-size: 14px;
  }

  .tc-row>.bd>ul{
    display: flex;justify-content: space-between
  }
  .tc-row>.bd>ul>li{
    width: 295px;border: 1px solid #eaeaea;cursor: pointer;
    /*overflow: hidden;*/
  }
  .tc-row>.bd>ul>li:hover>div>img{transform: scale(1.05,1.05);transition: 0.5s}
  .tc-row>.bd>ul>li>.li-bottom{
    padding:0 18px 50px 18px
  }
  .tc-row>.bd>ul>li>.li-bottom>.author-info{
    display: flex;
  }
  .tc-row>.bd>ul>li>.li-bottom>.author-info>div{
    width: 60px;height: 60px;border-radius: 50%;background-color: white;transform: translateY(-10px)
  }
  .tc-row>.bd>ul>li>.li-bottom>.author-info>div>img{
    border-radius: 50%;margin: 8px
  }
  .tc-row>.bd>ul>li>.li-bottom>.title{
    font-size: 16px;color: #333;font-weight: 700;line-height: 1.5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 14px;
  }
  .tc-row>.bd>ul>li>.li-bottom>.desc{
    /*font-size: 16px;color: #333;font-weight: 700;*/
    line-height: 1.5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .tc-row>.bd>ul>li:hover{
    box-shadow: 0 0 16px 1px rgba(0,0,0,.1);
  }
</style>
<template>
  <div class="tea-culture">
    <div class="lecha tc-row margin">
      <div class="hd">
        <span>乐茶</span>
        <a>更多></a>
      </div>
      <div class="bd">
        <ul>
          <li v-for="(item,index) of articleArr" :key="index" @click="goTo('lecha-article-details',item.arctic_id)">
            <div style="overflow: hidden">
              <img :src="item.img_src" alt="" style="width: 100%">
            </div>
            <div class="li-bottom">
              <div class="author-info">
                <div>
                  <img src="https://yanxuan.nosdn.127.net/678341ac6beaf7962fec1d4cb96f5c4e.png?imageView&quality=95&thumbnail=44x44" alt="">
                </div>
                <p style="font-size: 14px;padding-top: 15px;color: #333">
                  <span>作者：</span>
                  <span>张涛</span>
                </p>
              </div>
              <p class="title">{{item.title}}</p>
              <p class="desc">{{item.dec}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        articleArr:[]
      }
    },
    mounted(){
      axios.get(this.dataInterface + ":3030/articles/details",{params:{page:1}}).then(
        res=>{
          console.log(res)
          // this.articleArr = res.data.articleArr

          for (let i=0;i<4;i++){
            this.articleArr.push(res.data.articleArr[i])
          }
        }
      )
    },
    methods:{
      goTo(path,article_id){
        this.$router.push({path:path,query:{article_id:article_id}})
      }
    }
  }
</script>
