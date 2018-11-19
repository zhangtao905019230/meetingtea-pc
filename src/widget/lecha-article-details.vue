<style>
  .lad-title{
    font-size: 30px;
    line-height: 1.5;
    color: #333;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .lad-details{
    display: flex;
    line-height: 1.5;
  }
  .lad-details>img{
    border-radius: 50%;
    height: 60px;
    width: 60px;
    margin-right: 20px;
  }
  .lad-content{
    margin-top: 20px;
    padding: 90px 50px;
    background-color: rgb(247, 245, 241);
    color: #333;
    font-size: 16px;
    /*text-indent: 2rem;*/
    line-height: 2;
  }
</style>
<template>
  <div class="lecha-article-details">
    <div class="margin-1090">
      <p class="lad-title">{{title}}</p>
      <div class="lad-details">
        <img src="https://yanxuan.nosdn.127.net/303f5bc757c6012e37af1033f38706ba.png?imageView&quality=95&thumbnail=120x120" alt="">
        <div style="display: flex;flex-direction: column;justify-content: center">
          <p style="color: #333;font-size: 14px">{{author}}</p>
          <p style="font-size: 14px">{{publishTime}}</p>
        </div>
      </div>
      <div class="lad-content" v-html="testArticle[2].markdownHtml">
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return {
        title:'',
        author:'',
        publishTime:'',
        content:'',
        testArticle:[]
      }
    },
    mounted(){
      // axios.get(this.dataInterface + ":3030/articles/details",{params:{page:1}}).then(res=>{
      //   console.log(res.data.articleArr)
      //   let arctic_id = res.data.articleArr[0].arctic_id
      axios.get(this.dataInterface + ":3030/articles/content",{params:{arctic_id:this.$route.query.article_id}}).then(
        res=>{
          this.title=res.data.title
          this.author = res.data.sub.split('\n')[2]
          this.publishTime=res.data.sub.split('\n')[1]
          this.content=res.data.content
        }
      )

      axios.get(this.dataInterface + ":3030/articles/getTestArticle")
        .then(res => {
          console.log(res)
          this.testArticle=res.data
        })
        .catch(err=>{
          reject(err)
        });
      // })
    }
  }
</script>
