<style>
  .category-list{height: 60px;width:234px;position: relative;z-index: 100;box-sizing: border-box}
  .category-list>.category-list-title{
    width: 234px;height: 60px;
    font-size:16px;
    line-height:60px;
    display: block;
  }
  .category-list:hover .category-list-content{display: flex}
  .category-list>.category-list-content{display: none;font-size: 16px;position: absolute;top: 60px;left: 0;}
  .category-list>.category-list-content.is-show-category-list-content{display: flex}
  .category-list>.category-list-content>ul{background-color: rgba(0, 0, 0, 0.6);padding: 20px 0 20px 0;}
  .category-list>.category-list-content>ul>li{width: 204px;line-height: 52.5px;padding-left: 30px;color: #fff}
  .category-list>.category-list-content>div{height: 460px;}
  .category-list>.category-list-content>div>ul{

    border: 1px solid #e0e0e0;
    border-left: 0;
    box-shadow: 0 8px 16px rgba(0,0,0,0.18);
    height: 460px;
    display: flex;
    flex-wrap:wrap;
    flex-direction: column;
    align-content: flex-start;
    background-color: #fff
  }
  .category-list>.category-list-content>div>ul>li{
    width: 245px;
    height: 76px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 14px;
    color: #333
    }
  .category-list>.category-list-content>div>ul>li:hover{color: #ff6700}
  .category-list>.category-list-content>div>ul>li>img{width: 40px;height: 40px;margin-right: 12px}
</style>
<template>
  <div class="margin">
    <div class="category-list">
      <span class="category-list-title">
        <i class="iconfont icon-list" style="font-size: 18px"></i>
        {{$t("category.list.all.product.categories")}}
      </span>
      <div
        @mouseleave="closeAllActiveLargeclass"
        :class="{'category-list-content':categoryListContent,'is-show-category-list-content':isShowCategoryListContent}">
        <ul class="ul-li_a">
          <li
            v-for="(largeclass,index) of largeclasses" :key="index"
            @mousemove="triggerActiveLargeclass(index)"
            :style="{'background-color': activeLargeColor[index],'display':'flex'}">
            <span style="display: block;width: 170px">{{$t(largeclass)}}</span>
            <i class="iconfont icon-right" style="font-size: 18px"></i>
          </li>
        </ul>
        <div>
          <ul
            class="ul-li_a"
            :style="{'width':activeLargeclassWidth[index]}"
            v-for="(largeclass,index) of largeclasses"
            :key="index"
            v-show="activeLargeclass[index]"
            @mouseleave="closeAllActiveLargeclass">
            <li
              v-for="(virtualData,index) of virtualDatas"
              :key="index"
              v-if="largeclass==virtualData.class_id.slice(0,2)">
              <img :src="phpStaticFilePath+'/elfinder/files/zhangtao25/pc/category-list/'+virtualData.largeclass+'-'+virtualData.smallclass_img" alt="">
              <span>{{$t(virtualData.class_id)}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  import GetGoodsInfor from './../service/get-goods-infor'
  export default {
    data(){
      return{
        largeclasses: ["00","01","02","03","04","05","06","07"],
        virtualDatas:[],
        phpStaticFilePath:this.phpStaticFilePath,
        activeLargeclass: Array(8).fill(false),
        activeLargeColor:Array(8).fill('rgba(0, 0, 0, 0)'),
        categoryListContent: true
      }
    },
    mounted(){
      GetGoodsInfor.GetAllTypesOfTea(this)
        .then(res=>{
          this.virtualDatas = res
        })
    },
    methods:{
      triggerActiveLargeclass(index){
        this.activeLargeclass = Array(8).fill(false)
        this.activeLargeColor = Array(8).fill('rgba(0, 0, 0, 0)');
        this.activeLargeclass[index] = true;
        this.activeLargeColor[index] = '#ff6700'
      },
      closeAllActiveLargeclass(){
        this.activeLargeclass = Array(8).fill(false)
        this.activeLargeColor = Array(8).fill('rgba(0, 0, 0, 0)');
      }
    },
    computed:{
      activeLargeclassWidth(){
        let datashuliang = Array(8).fill(0)
        for(let i in this.virtualDatas){
          if(this.virtualDatas[i]['class_id'].slice(0,2) == "00"){
            datashuliang[0]++
          }else if(this.virtualDatas[i]['class_id'].slice(0,2) == "01"){
            datashuliang[1]++
          }else if(this.virtualDatas[i]['class_id'].slice(0,2) == "02"){
            datashuliang[2]++
          }else if(this.virtualDatas[i]['class_id'].slice(0,2) == "03"){
            datashuliang[3]++
          }else if(this.virtualDatas[i]['class_id'].slice(0,2) == "04"){
            datashuliang[4]++
          }else if(this.virtualDatas[i]['class_id'].slice(0,2) == "05"){
            datashuliang[5]++
          }else if(this.virtualDatas[i]['class_id'].slice(0,2) == "06"){
            datashuliang[6]++
          }else if(this.virtualDatas[i]['class_id'].slice(0,2) == "07"){
            datashuliang[7]++
          }else{}
        }
        let activeLargeclassWidth = []
        for(let i in datashuliang){
          activeLargeclassWidth.push(Math.ceil(datashuliang[i]/6)*245+'px')
        }
        return activeLargeclassWidth
      },
      ...mapGetters(["langCode","isShowCategoryListContent"])
    }
  }
</script>
