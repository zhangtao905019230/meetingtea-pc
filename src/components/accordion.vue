<style>
  .accordion{height: 430px}
  .accordion>.wrap>ul{display: flex}
  .accordion>.wrap>ul>li{width: 153px;overflow: hidden;transition: .7s;}

  .accordion>.wrap>ul>li>.li-wrap{height: 430px;width: 806px;display: flex;background-size: cover;position: relative}
  .accordion>.wrap>ul>li>.li-wrap>p{width:20px;color: white;font-size: 20px;margin-left: 30px;transform: translateY(170px)}
  .accordion>.wrap>ul>li>.li-wrap>.icon-bofang{position: absolute;left: 335px;top: 160px;font-size: 70px;color: rgb(138,138,140)}
  .accordion>.wrap>ul>li>.li-wrap>.icon-bofang:hover{color: black;cursor: pointer}
</style>
<template>
  <div class="accordion">
    <!--<p style="font-size: 20px;line-height: 40px">茶介绍</p>-->
    <small-color-block-title :title="$t('accordion.title.sketch')" spanBgc="rgb(58,91,23)"></small-color-block-title>
    <div class="wrap">
      <ul>
        <li
          v-for="(accordionData,index) of accordionDatas"
          :key="index"
          @click="changeWidth(index)"
          :style="{width:accordionData.width}">
          <div
            class="li-wrap"
            :style="{
            backgroundImage:'url('+accordionData.imageURL+')',
            }">
            <p>{{$t(accordionData.largeclass)}}</p>
            <i class="icon-bofang iconfont" @click="playVideo(index)"></i>
          </div>
        </li>
      </ul>
    </div>
    <el-dialog title="介绍视频" :visible.sync="dialogFormVisible" width="680px" :before-close="handleClose">
      <video src="/static/video/1538116537151286.mp4" controls="controls" ref="video">
        您的浏览器不支持 video 标签。
      </video>
    </el-dialog>
  </div>
</template>
<script>
  import SmallColorBlockTitle from './../components/small-color-block-title'
  export default {
    components:{
      'small-color-block-title': SmallColorBlockTitle
    },
    data(){
      return{
        accordionDatas:[
          {largeclass:'00',width: '153px',imageURL:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/红茶.jpeg'},
          {largeclass:'01',width: '153px',imageURL:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/绿茶.jpeg'},
          {largeclass:'02',width: '153px',imageURL:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/白茶.jpeg'},
          {largeclass:'03',width: '153px',imageURL:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/黑茶.jpeg'},
          {largeclass:'04',width: '153px',imageURL:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/乌龙茶.jpeg'},
          {largeclass:'05',width: '153px',imageURL:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/黄茶.jpeg'},
          {largeclass:'06',width: '153px',imageURL:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/花茶.jpeg'},
          {largeclass:'07',width: '153px',imageURL:'http://101.132.46.146:8080/elfinder/files/zhangtao25/pc/accordion/茶具.jpeg'},
        ],
        dialogFormVisible:false
      }
    },
    methods:{
      changeWidth(index){
        console.log(index)
        for (let i=0;i<8;i++){
          this.accordionDatas[i].width = '80px'
        }
        this.accordionDatas[index].width = '666px'
      },
      playVideo(index){
        this.dialogFormVisible=true
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
            this.$refs.video.pause()
          })
          .catch(_ => {});
      }
    }
  }
</script>
