<style>
  #tab-nav>.margin>.sub_cat_ul1{
    display: flex;
    justify-content: space-around;
    position: relative;
  }
  #tab-nav>.margin>.sub_cat_ul1>li{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #tab-nav>.margin>.sub_cat_ul1>li>span{border-bottom: 3px solid white;cursor: pointer;line-height: 2;font-weight: 700}
  #tab-nav>.margin>.sub_cat_ul1>li:hover>span{color: var(--main-color);border-bottom: 3px solid var(--main-color)}
  #tab-nav>.margin>.sub_cat_ul1>li:hover>img{opacity: 1}
  #tab-nav>.margin>.sub_cat_ul1>li>img{
    margin-top: 10px;
    width: 20px;
    height: 12px;
    position: relative;
    z-index: 4000;
    opacity: 0;
  }
  /*#tab-nav>.margin>.sub_cat_ul1>li:nth-child(10)>span{border-left: 1px solid #ccc}*/
  #tab-nav>.margin>.sub_cat_ul1>li .sub_cat_ul2_wrap{
    position: absolute;
    z-index: 3000;
    top: 53px;
    left: 0;
  }
  #tab-nav>.margin>.sub_cat_ul1>li:nth-child(9) .sub_cat_ul2_wrap{left: 700px}
  #tab-nav>.margin>.sub_cat_ul1>li .sub_cat_ul2{
    background-color: white;
    padding: 20px 40px 30px;
    box-shadow: 0 0 1px 1px rgba(0,0,0,.1);
    display: flex;
    font-weight: 700;
    text-align: left;
  }
  #tab-nav>.margin>.sub_cat_ul1>li .sub_cat_ul2>li>span{
    border-bottom: 1px solid #ccc;
    display: block;
    margin-right: 40px;
    line-height: 2;
    cursor: pointer;
  }
  #tab-nav>.margin>.sub_cat_ul1>li .sub_cat_ul2>li{
    width: 145px;
    /*border: 1px solid #333;*/
  }
  .sub_cat_ul3>li{
    font-weight: normal;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .sub_cat_ul3>li:hover{color: var(--main-color)}
</style>
<template>
  <div id="tab-nav">
    <div class="margin">
      <ul class="sub_cat_ul sub_cat_ul1">
        <li @click="goTo('/main/home')"><span>首页</span></li>
        <li
          v-for="(item,index) of allMenuLabel.results"
          @click="goTo('/main/goods-list')"
          @mouseover="showSub_cat_ul2(index)"
          @mouseleave="hideSub_cat_ul2(index)"
          :key="index">
          <span>{{item.name}}</span>
          <img class="arrow" src="../assets/icon/small-arrow.png" alt="">
          <transition name="el-fade-in-linear">
            <div class="sub_cat_ul2_wrap" v-show="isShowSub_cat_ul2[index].status">
              <ul class="sub_cat_ul sub_cat_ul2">
                <li v-for="(item,index) of item.sub_cat" :key="index">
                  <span>{{item.name}}</span>
                  <ul class="sub_cat_ul sub_cat_ul3">
                    <li v-for="(item,index) of item.sub_cat" :key="index">
                      <img style="width: 50px;height: 50px;margin-right: 10px" :src="testImg[index%5]" alt="">
                      <span>{{item.name}}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </transition>
        </li>
        <li @click="goTo('/main/tea-culture')" style="position: relative">
          <i style="position: absolute;height: 20px ;border-left: 1px solid rgb(197,197,197);left: -40px;top: 5px"></i>
          <span>茶文化</span>
        </li>
        <li @click="goTo('/main/look')">
          <span>发现</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { getCategory } from '../api/api'
  export default {
    data(){
      return{
        allMenuLabel: [],
        isShowSub_cat_ul2: [
          {status:false},{status:false},{status:false},{status:false},
          {status:false},{status:false},{status:false},{status:false}
        ],
        testImg:[
          'https://yanxuan.nosdn.127.net/785a1507ce654746875063805c6c4235.png',
          'https://yanxuan.nosdn.127.net/5bc69104d820dceb8d8b85ae93bb92a1.png',
          'https://yanxuan.nosdn.127.net/2c1f794e57ec0d67be0e71a04f83325c.png',
          'https://yanxuan.nosdn.127.net/ebc5db7f710a642af86728f9a9071f13.png',
          'https://yanxuan.nosdn.127.net/4e653429b5c143f7bf7ca9546be19601.png',
          'https://yanxuan.nosdn.127.net/c4e272044c1c87ea102669233f8aebc0.png',
          'https://yanxuan.nosdn.127.net/c334fe053304b63f9cdcf88b7d16b948.png'
        ]
      }
    },
    mounted(){
      this.getMenu();
    },
    methods:{
      goTo(path){
        // console.log(path)
        this.$router.push({path:path})
      },
      getMenu(){
        getCategory({
          params:{}
        }).then((response)=> {
          console.log(response.data)
          this.allMenuLabel = response.data
        })
          .catch(function (error) {
            console.log(error);
          });
      },
      showSub_cat_ul2(index){
        this.isShowSub_cat_ul2[index].status = true
      },
      hideSub_cat_ul2(index){
        this.isShowSub_cat_ul2[index].status = false
      }
    }
  }
</script>

